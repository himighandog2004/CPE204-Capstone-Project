<script lang="ts">
    import Navsidebar from "$lib/components/+navsidebar.svelte";
	import { LogOut, Settings } from "@lucide/svelte";
    let avatarUrl = 'https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg'; // Placeholder for the user's avatar

    export let data: {
        user:{
            role:string;
        }
    };

    let selectedRole = data.user.role;

</script>

<Navsidebar {avatarUrl} {selectedRole}>
    <!-- Navbar -->
        <!-- Dropdown -->
        <div slot="dropdown">
            <li><a href="/dashboard/admin/settings"><Settings />Settings</a></li>
            <li><a href="/login"><LogOut />Logout</a></li>
        </div>
</Navsidebar>
