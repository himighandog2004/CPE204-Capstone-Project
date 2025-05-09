<script>
    import Navsidebar from "$lib/components/+navsidebar.svelte";
	import { Activity, ClipboardPlus, Home, LogOut, Settings } from "@lucide/svelte";
    let avatarUrl = 'https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg'; // Placeholder for the user's avatar
</script>

<Navsidebar {avatarUrl}>
    <!-- Sidebar -->
    <div slot="sidebar">
        <!-- Sidebar Content Container -->
        <div class="flex flex-col items-start justify-start pl-4 font-bold">
            <!-- Menu -->
            <ul class="menu w-full text-xl space-y-2">
                <li>
                    <a href="/dashboard/admin">
                        <Home />
                        Home
                    </a>
                </li>
                <li>
                    <details open>
                    <summary>
                        <Activity />
                        Doctor Management
                    </summary>
                        <ul class="text-base w-50">
                            <li><a>Manage/Add doctors</a></li>
                            <li><a>Assign to Patient</a></li>
                            <!-- Add more here -->
                        </ul>
                    </details>
                </li>
                <li>
                    <details open>
                    <summary>
                        <Activity />
                        Patients
                    </summary>
                        <ul class="text-base w-50">
                            <li><a>Manage/Add Patients</a></li>
                            <!-- Add more here -->
                        </ul>
                    </details>
                </li>
                <li>
                    <a>
                        <ClipboardPlus />
                        Appointments
                    </a>
                </li>
            </ul>

        </div>
    </div>
    <!--Navbar-->
    <div slot="navbar">
        <!-- Can be empty -->
         <div class="p-4 "><h1 class="text-3xl text-white font-bold">Admin Dashboard</h1></div>
    </div>
        <!-- Dropdown -->
        <div slot="dropdown">
            <li><a href="/dashboard/admin/settings"><Settings />Settings</a></li>
            <li><a href="/login"><LogOut />Logout</a></li>
        </div>
    <!-- Main -->
    <div slot="main" class="flex flex-col">

    </div>
</Navsidebar>
