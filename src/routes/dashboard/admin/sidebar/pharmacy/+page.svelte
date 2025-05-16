<script lang="ts">
  import { onMount } from 'svelte';
  import { writable, get } from 'svelte/store';
  import { db } from '$lib/firebase';
  import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';

  let medicines = writable<any[]>([]);
  let searchQuery = '';
  let newMedicine = { name: '', category: '', stock: 0, price: 0 };

  // Fetch medicines from Firestore on mount
  onMount(async () => {
    const snapshot = await getDocs(collection(db, 'medicines'));
    medicines.set(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  });

  async function addMedicine() {
    if (!newMedicine.name || !newMedicine.category) return;
    const $medicines = get(medicines);
    const found = $medicines.find(m =>
      m.name && m.category &&
      m.name.trim().toLowerCase() === newMedicine.name.trim().toLowerCase() &&
      m.category.trim().toLowerCase() === newMedicine.category.trim().toLowerCase()
    );
    if (found) {
      // If exists, add to stock
      const updatedStock = Number(found.stock) + Number(newMedicine.stock);
      await updateDoc(doc(db, 'medicines', found.id), { stock: updatedStock });
      medicines.update(meds =>
        meds.map(m =>
          m.id === found.id ? { ...m, stock: updatedStock } : m
        )
      );
    } else {
      // If not, add as new
      const docRef = await addDoc(collection(db, 'medicines'), {
        name: newMedicine.name,
        category: newMedicine.category,
        stock: Number(newMedicine.stock),
        price: Number(newMedicine.price)
      });
      medicines.update(meds => [
        ...meds,
        { id: docRef.id, ...newMedicine, stock: Number(newMedicine.stock), price: Number(newMedicine.price) }
      ]);
    }
    newMedicine = { name: '', category: '', stock: 0, price: 0 };
  }

  async function deleteMedicine(id) {
    await deleteDoc(doc(db, 'medicines', id));
    medicines.update(meds => meds.filter(m => m.id !== id));
  }
</script>

<div class="p-5 pt-2">
  <h1 class="text-3xl text-blue-600">Pharmacy Inventory</h1>

  <!-- Search Bar -->
  <input type="text" placeholder="Search medicine..." bind:value={searchQuery} class="input input-sm my-2" />

  <!-- Medicine Table -->
  <div class="w-full h-75 overflow-x-auto">
    <table class="table table-sm table-bordered w-full">
      <tbody style="max-height: 300px; overflow-y: auto; display: block; width: 100%">
        {#each $medicines as med}
          {#if med.name.toLowerCase().includes(searchQuery.toLowerCase())}
            <tr style="display: table; width: 100%; table-layout: fixed;">
              <td>{med.name}</td>
              <td>{med.category}</td>
              <td>{med.stock}</td>
              <td>₱{med.price}</td>
              <td>
                <button class="btn btn-xs btn-error" on:click={() => deleteMedicine(med.id)}>Delete</button>
              </td>
            </tr>
          {/if}
        {/each}
      </tbody>
    </table>
  </div>

  <!-- Add Medicine -->
  <div class="p-4 bg-[#2c2c2c] rounded-xl mt-4">
    <h2 class="text-lg">Add New Medicine</h2>
    <input type="text" placeholder="Name" bind:value={newMedicine.name} class="input input-sm my-2" />
    <input type="text" placeholder="Category" bind:value={newMedicine.category} class="input input-sm my-2" />
    <input type="number" placeholder="Stock" bind:value={newMedicine.stock} class="input input-sm my-2" />
    <input type="number" placeholder="Price" bind:value={newMedicine.price} class="input input-sm my-2" />
    <button class="btn btn-success mt-2" on:click={addMedicine}>Add Medicine</button>
  </div>
</div>