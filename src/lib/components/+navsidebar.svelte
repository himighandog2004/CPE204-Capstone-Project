<script lang="ts">
  import { ArrowBigDown, ArrowDownToLine, LogOut, Settings } from "@lucide/svelte";
  import { patientCount } from "$lib/stores/userData";
  export let avatarUrl = 'https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg';
  export let selectedRole: string;
  
</script>

<div class="w-screen h-screen flex">
  <!-- Sidebar -->
  <div class="w-1/5 min-h-screen bg-[#f7374f] text-[#181818] flex-col items-center justify-center">
    <!-- Logo Title -->
    <div class="w-full flex flex-row items-center justify-start px-4 pt-7">
        <img src="/cloudward.png" alt="logo" class="w-15 h-15 mask mask-circle" />
        <h1 class="text-3xl font-bold text-[#181818]">Cloudward</h1>
    </div>
    <!-- Divider -->
    <div class="divider divider-neutral"></div>
    <slot name="sidebar"></slot>
  </div>

  <!-- Main Content -->
  <div class="w-full h-full text-white flex flex-col items-center justify-center bg-[#181818]">
    <!-- Navbar -->
    <div class="w-full h-1/8 text-white flex flex-col">
        <!-- Navbar Content Container -->
        <div class="flex flex-row justify-between px-8 pt-6">
            <div class="w-auto rounded-full hover:bg-[#2c2c2c] items-center justify-center duration-300">
              <div class="px-4 pt-4 "><h1 class="text-3xl font-bold">Welcome, {selectedRole}!👋</h1></div>
            </div>
            <!-- Navbar Slot -->
            <slot name="navbar"></slot>
            <!-- Dropdown -->
            <div class="flex flex-row">
                <div class="dropdown dropdown-end">
                <div tabindex="0" role="button" class="flex items-center cursor-pointer bg-[#2c2c2c] hover:bg-[#f7374f] rounded-full duration-300 p-2">
                    <ArrowBigDown size={40}/>
                    <img src={avatarUrl} alt="User Avatar" class="w-12 h-12 mask mask-circle" />
                </div>
                <ul class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm text-white">
                  <slot name="dropdown"></slot>
                </ul>
                </div>
            </div>
            
        </div>
        <!-- Divider -->
        <div class="flex flex-col">
            <div class="divider divider-neutral"></div>
        </div>
    </div>
    <!-- Dashboard -->
    <div class="w-full h-full text-white flex flex-col items-start justify-start px-11 pt-10">
      <slot name="main"></slot>
    </div>
  </div>
</div>
