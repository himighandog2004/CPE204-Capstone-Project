<script>
	import Footpage from '$lib/components/+footpage.svelte';
  import { fade } from 'svelte/transition';
  import { BackgroundBeams } from '$lib';

  
  // @ts-ignore
  function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }


</script>

<!-- Top -->
<div in:fade id = "head" class="top-div bg-[#181818] w-full min-h-screen flex flex-col items-center">
  <!-- Header -->
  <div class="header sticky top-0 z-999 bg-[#181818] h-1/2 w-full flex flex-col md:flex-col items-center justify-between p-4 pt-8 pb-4">
    <!-- img - Cloudward -->
    <div class="flex flex-row w-full justify-between items-center">
      <div class="logotitle flex items-center ml-10">
        <img src="/cloudward white.png" alt="Logo" class="w-15 h-15 mr-3">
        <a href = "#head" class="nav-link text-white text-3xl font-bold">CloudWard</a>
      </div>
      <!-- Navbar -->
      <div class="flex flex-row items-center justify-center mr-15">
        <ul class="navbar flex flex-row items-center justify-center space-x-4">
          <li><button on:click={() => scrollToSection('mid-section')} class="nav-link text-[#d9d9d9] text-lg font-bold">Features</button></li>
          <li><button on:click={() => scrollToSection('about-section')} class="nav-link text-[#d9d9d9] text-lg font-bold">About</button></li>
          <li><button on:click={() => scrollToSection('footer')} class="nav-link text-[#d9d9d9] text-lg font-bold">Contact</button></li>
        </ul>
      </div>
      <!-- Sign in and Register Button -->
      <div class="authenticate flex flex-col md:flex-row items-center justify-center mt-4 md:mt-0 mr-10">
        <a class="nav-link text-white font-bold mb-2 md:mb-0 md:mr-2" href = "/login">Sign In</a>
        <a href= "/register" class="bg-[#F7374F] text-white font-bold py-2 px-4 rounded-full hover:bg-[#b02738] transition duration-300">Register</a>
      </div>
    </div>
  </div>
  <!-- Hero Section -->
  <section class="w-full flex flex-row">
    <!-- Hero left: current hero content -->
    <div class="hero-left w-full text-white py-40 px-8 md:px-20 flex flex-col items-center text-left rounded-xl">
      <h1 class="text-4xl md:text-5xl font-extrabold mb-4 text-[#f7374f]">
        Welcome to CloudWard
      </h1>
      <p class="text-lg md:text-xl">A modern cloud-based hospital management system</p>
      <p class="text-lg md:text-xl mb-8">built for speed, simplicity, and efficiency.</p>
      <a href="/register" class="text-white font-bold bg-[#F7374F] py-3 px-4 rounded-full hover:bg-[#b02738] transition duration-300">
        Join Us Today
      </a>
    </div>
    <BackgroundBeams />
  </section>
  <!-- Middle -->
  <div id = "mid-section" class = "divider pt-6 pb-5 mt-18"></div>
  <section class = "mid bg-[#181818] flex flex-row justify-center items-center text-center w-full min-h-screen">
    <div class ="grid grid-cols-3 gap-4 w-full h-full">  
      <!-- Left -->
      <div class = "grid grid-rows-3 items-center justify-center position-relative overflow-visible">
        <!-- text -->
        <div class = "flex flex-col items-end justify-end">
          <div class = "flex flex-col items-center justify-center w-[70%]">
            <h2 class="text-3xl font-bold text-white mb-4">User-Friendly</h2>
            <p class="text-lg text-white">Intuitive interface for all users.</p>
          </div>
        </div>
        <div class = "flex flex-col items-center justify-center w-full">
          <h2 class="text-3xl font-bold text-white mb-4">Secure</h2>
          <p class="text-lg text-white">Protect sensitive information with advanced security protocols.</p>
        </div>
        <div class = "flex flex-col items-end justify-end">
          <div class = "flex flex-col items-center justify-center w-[70%]">
            <h2 class="text-3xl font-bold text-white mb-4">Integrated</h2>
            <p class="text-lg text-white">Seamless integration with existing systems.</p>
          </div>
        </div>   
      </div>
      <!-- Robotdude -->
      <div class = "flex flex-col items-center justify-center h-full">
        <spline-viewer class = "roboto w-1/2 h-full" url="https://prod.spline.design/YRuPMoNhtwzqnQiL/scene.splinecode"></spline-viewer>
      </div>
      <!-- Right -->
      <div class = "flex flex-col items-center justify-center">
        <h2 class="text-3xl font-bold text-white mb-4">Cloud-Based</h2>
        <p class="text-lg text-white">Access your data from anywhere, anytime.</p>
      </div>
    </div>
  </section>
  <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.89/build/spline-viewer.js"></script>  

</div>

<!-- Bottom -->
<div id = "about-section" class="bot-div w-full bg-white py-20">
  <!-- About Section -->
  <section class="about-section mx-auto px-8 mt-3">
    <h2 class="text-4xl font-bold text-center mb-6 text-gray-800">About Us</h2>
    <p class="text-lg text-gray-700 max-w-3xl mx-auto text-justify">
      CloudWard revolutionizes hospital management with a fully integrated, cloud-based solution designed for efficiency, security, and ease of use. Our platform streamlines administrative tasks, enhances patient care, and simplifies communication to ensure that healthcare providers can focus on what matters most.
    </p>
    <div class="flex items-center justify-center">
      <div class="mt-10 flex flex-row md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-10 w-1/2">
        <div class="card-container flex-1 h-45 bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold mb-2 text-gray-800">Efficient</h3>
          <p class="text-gray-600">
            Automate routine tasks and streamline patient management seamlessly.
          </p>
        </div>
        <div class="card-container flex-1 h-45 bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold mb-2 text-gray-800">Innovative</h3>
          <p class="text-gray-600">
            Embrace the future of healthcare with cutting-edge technology.
          </p>
        </div>
      </div>
    </div>
  </section>
  <div class="p-10"></div>
  <!-- Footer / Contact -->
  <Footpage/>
</div>

<style>
  @container (max-width:425px) {
    /* In small viewports, hide the title and shrink the logo */
    .logotitle img {
      width: 4rem; /* 64px */
      height: 4rem;
    }
    /* Make navbar text smaller */
    .navbar li {
      font-size: 0.75rem; /* ~12px */
    }
    /* Make signin/register text and padding smaller */

  }
  .nav-link {
    position: relative;
    overflow: hidden;

  }
  .nav-link::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: white;
    transition: width 0.3s ease, left 0.3s ease;
  }
  .nav-link:hover::after{
    width: 100%;
    left: 0;
  }

  .roboto {
    position: relative;
    width: 800px;
    height: 500px;
  }

  .card-container {
    transition: transform 0.3s ease-in-out;
  }

  .card-container:hover {
    transform: scale(1.05);
  }

</style>
