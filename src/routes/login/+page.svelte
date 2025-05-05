<script lang="ts">
    let selectedRole = 'Admin';
    const roles = ['Patient', 'Admin', 'Doctor'];
  
    function selectRole(role: string) {
      selectedRole = role;
    }
  </script>
  
  <!-- Page Container -->
  <div class="bg-[#181818] w-screen h-screen flex items-center justify-center">
    <!-- Login Card -->
    <div class = "login-card rounded-xl bg-[#f7374f] flex flex-col items-center">
      <!-- Back Btn -->
      <a href = "/" class = "flex items-center justify-left w-full">
        <img src = "/backbtn.png" alt = "Back Button" class = "w-10 h-10 mt-5 ml-5"/>
      </a>
      <!-- Logo -->
      <div class = "flex flex-col items-center justify-center">
        <img src = "/cloudward.png" alt = "Logo" class = "w-32 h-32 mb-5"/>
        <h1 class = "text-3xl text-white font-bold mb-1">CloudWard</h1>
      </div>
      <!-- Role Menu -->
      <div class = "menu menu-horizontal bg-[#181818] rounded-xl">
        {#each roles as role}
          <li>
            <button
              class="flex justify-between"
              class:active={selectedRole === role}
              on:click={() => selectRole(role)}
            >
              {role}
              {#if selectedRole === role}
                <span class="text-green-500">✓</span>
              {/if}
          </button>
          </li>
       {/each}
      </div>
    </div>

  </div>
  
  <style>
    .login-card {
      width: 430px;
      height: 550px;
    }
  </style>