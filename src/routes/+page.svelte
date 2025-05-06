<script>
	import Footpage from '$lib/components/+footpage.svelte';
  import { Github, Mail } from '@lucide/svelte';
  import {ChartNoAxesCombined} from '@lucide/svelte';
  import {Boxes} from '@lucide/svelte';
  import {User} from '@lucide/svelte';
  import { Splide, SplideSlide } from "@splidejs/svelte-splide";
</script>

<!-- Top -->
<div id = "head" class="top-div bg-[#181818] w-full min-h-screen flex flex-col items-center">
  <!-- Header -->
  <div class="header sticky top-0 z-999 bg-[#181818] w-full flex flex-row md:flex-row items-center justify-between p-4 py-10">
    <!-- img - Cloudward -->
    <div class="logotitle flex items-center ml-10">
      <img src="/cloudward white.png" alt="Logo" class="w-15 h-15 mr-3">
      <a href = "#head" class="nav-link text-white text-3xl font-bold">CloudWard</a>
    </div>
    <!-- Navbar -->
    <div class="flex flex-row items-center justify-center mr-15">
      <ul class="navbar flex flex-row items-center justify-center space-x-4">
        <li><a href="#mid-section" class="nav-link text-[#d9d9d9] text-lg font-bold">Features</a></li>
        <li><a href="#about-section" class="nav-link text-[#d9d9d9] text-lg font-bold">About</a></li>
        <li><a href="#footer" class="nav-link text-[#d9d9d9] text-lg font-bold">Contact </a></li>
      </ul>
    </div>
    <!-- Sign in and Register Button -->
    <div class="authenticate flex flex-col md:flex-row items-center justify-center mt-4 md:mt-0 mr-10">
      <a class="nav-link text-white font-bold mb-2 md:mb-0 md:mr-2" href = "/login">Sign In</a>
      <a href= "/register" class="bg-[#F7374F] text-white font-bold py-2 px-4 rounded-full hover:bg-[#b02738] transition duration-300">Register</a>
    </div>
  </div>
  <!-- Hero Section -->
  <section class="w-full flex flex-col md:flex-row">
    <!-- Hero left: current hero content -->
    <div class="hero-left w-full md:w-1/2 text-white py-40 px-8 md:px-20 flex flex-col items-start text-left rounded-xl">
      <h1 class="text-4xl md:text-5xl font-extrabold mb-4">
        Welcome to CloudWard
      </h1>
      <p class="text-lg md:text-xl mb-8 max-w-xl">
        A modern cloud-based hospital management system built for speed, simplicity, and efficiency.
      </p>
      <a href="/register" class="text-white font-bold bg-[#F7374F] py-3 px-4 rounded-full hover:bg-[#b02738] transition duration-300">
        Join Us Today
      </a>
    </div>
    <!-- Hero right: empty column for additional content -->
    <div class="hero-right w-1/2 md:w-1/2 flex items-center justify-center p-0 mr-10">
      <Splide aria-labelby="site" options={{type:"loop", perPage: 1, autoplay: true, arrows:false, pagination: false, speed:5000, interval: 5000, pauseOnHover: false, pauseOnFocus: false}}>
        <SplideSlide>
          <img src="/reg.png" alt="Slide 1">
        </SplideSlide>
        <SplideSlide>
          <img src="/login.png" alt="Slide 2">
        </SplideSlide>
        <SplideSlide>
          <img src="/landing.png" alt="Slide 3">
        </SplideSlide>
      </Splide>
    </div>
  </section>
  <!-- Middle -->
  <div id = "mid-section" class = "p-5 mb-10"></div>
  <section class = "mid-section flex flex-row justify-center items-center text-center p-2">
    <!-- Feature Card -->
    <div class = "grid grid-cols-3 gap-4 ml-10">
      <div class = "card-container h-full flex-1 flex-col justify-center items-center text-center p-4 bg-[#f7374f] rounded-3xl shadow-lg">
        <h2 class = "text-3xl font-bold text-white mb-4">Patient Analytics</h2>
        <p class = "text-lg text-white">Streamline patient records, appointments, and history for better care.</p>
        <div class = "flex items-center justify-center mt-10">
          <ChartNoAxesCombined size = {150} color = #FFFF class = "flex items-center justify-center"/>
        </div>
      </div>
      <div class = "card-container h-full flex-1 flex-col justify-center items-center text-center p-4 ml-2 bg-[#f7374f] rounded-3xl shadow-lg">
        <h2 class = "text-3xl font-bold text-white mb-4">Inventory Management</h2>
        <p class = "text-lg text-white">Keep track of medical supplies and equipment with ease.</p>
        <div class = "flex items-center justify-center mt-10">
          <Boxes size = {150} color = #FFFF class = "flex items-center justify-center"/>
        </div>
      </div>
      <div class = "card-container h-full flex-1 flex-col justify-center items-center text-center p-4 ml-2 bg-[#f7374f] rounded-3xl shadow-lg">
        <h2 class = "text-3xl font-bold text-white mb-4">Staff Management</h2>
        <p class = "text-lg text-white">Manage staff schedules, roles, and performance efficiently.</p>
        <div class = "flex items-center justify-center mt-10">
          <User size = {150} color = #FFFF class = "flex items-center justify-center mt-7"/>
        </div>
      </div>
    </div>
    <!-- Robotdude -->
    <spline-viewer class = "roboto" url="https://prod.spline.design/YRuPMoNhtwzqnQiL/scene.splinecode"></spline-viewer>
  </section>
  <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.89/build/spline-viewer.js"></script>  
</div>

<!-- Bottom -->
<div id="bot-div" class="bot-div w-full bg-white py-20">
  <!-- About Section -->
  <section id = "about-section" class="about-section mx-auto px-8">
    <h2 class="text-4xl font-bold text-center mb-6 text-gray-800">About Us</h2>
    <p class="text-lg text-gray-700 max-w-3xl mx-auto text-center">
      CloudWard revolutionizes hospital management with a fully integrated, cloud-based solution designed for efficiency, security, and ease of use. Our platform streamlines administrative tasks, enhances patient care, and simplifies communication to ensure that healthcare providers can focus on what matters most.
    </p>
    <div class="mt-10 flex flex-row md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-10">
      <div class="card-container bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold mb-2 text-gray-800">Efficient</h3>
        <p class="text-gray-600">
          Automate routine tasks and streamline patient management seamlessly.
        </p>
      </div>
      <div class="card-container bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold mb-2 text-gray-800">Secure</h3>
        <p class="text-gray-600">
          Protect sensitive information with advanced security protocols and cloud storage.
        </p>
      </div>
      <div class="card-container bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold mb-2 text-gray-800">Innovative</h3>
        <p class="text-gray-600">
          Embrace the future of healthcare with cutting-edge technology.
        </p>
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
