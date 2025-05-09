// src/routes/dashboard/admin/+layout.ts
import { getAuth } from 'firebase/auth';
import { redirect } from '@sveltejs/kit';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '$lib/firebase';

export async function load() {
  const user = getAuth().currentUser;
  if (!user) {
    throw redirect(302, '/login');
  }

  // Fetch the user’s profile document to check their role
  const snap = await getDoc(doc(db, 'users', user.uid));
  const data = snap.data();
  if (!data?.role || data.role !== 'Patient') {
    // Not an admin? Kick them away
    throw redirect(302, '/unauthorized');
  }

  // OK—they’re an Admin, let the page load
  return {
    user: {
      uid: user.uid,
      email: user.email,
      role: data.role
    }
  };
}
