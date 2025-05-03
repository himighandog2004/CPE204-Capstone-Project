<script lang="ts">
    let selectedRole = 'Admin';
    const roles = ['Patient', 'Admin', 'Doctor'];
  
    function selectRole(role: string) {
      selectedRole = role;
    }
  </script>
  
  <!-- Page Container -->
  <div class="bg-[#2C2C2C] w-screen h-screen flex flex-col items-center justify-center">
  
    <!-- Login Card -->
    <div class="rounded-3xl shadow-xl bg-[#F7374F] w-full max-w-[400px] h-[500px]">
      <!-- Back Button -->
      <div class="flex items-center justify-left w-10 h-10 ml-5 mt-5">
        <a href = "/" class="hover:bg-[#d9d9d9] hover:rounded-full duration-300">
          <img src="/backbtn.png" alt="Back">
        </a>
      </div>
      <!-- Image Container -->
      <div class="flex items-top justify-center">
        <img src="/cloudward.png" alt="Logo" class="w-32 h-32">
      </div>
      <!-- Text and Role Selector -->
      <div class="text-center mt-5">
        <h1 class="text-white text-3xl font-bold">CloudWard</h1>
        <!-- Role Selector container -->
        <div class="relative mt-4 flex bg-[#d9d9d9] border-2 border-[#2c2c2c] rounded-full p-1 mx-auto" style="width: {roles.length * 80}px;">
          <!-- Slider Element -->
          <div
            class="absolute left-0 bg-[#2c2c2c] rounded-full transition-transform duration-300 ease-in-out"
            style="width: 75px; top: -1px; height: calc(100% + 2px); transform: translateX({roles.indexOf(selectedRole) * 81}px);">
          </div>
          {#each roles as role}
            <button
              on:click={() => selectRole(role)}
              class="relative z-10 flex items-center justify-center px-3 py-1 rounded-full text-xs font-semibold truncate text-center"
              class:selected={selectedRole === role}
              style="width: 80px;">
              {role}
            </button>
          {/each}
        </div>
      </div>
      
    </div>
    
    <!-- Removed external Role Selector -->
    <!-- ...existing code if any... -->
  </div>
  
  <style>
    :global(button.selected) {
      /* Maintain existing styling for selected state */
      background-color: transparent;
      color: white;
    }
  
    /* Add a 300ms transition for the text color */
    button {
      transition: color 300ms ease-in-out;
    }
  </style>
  