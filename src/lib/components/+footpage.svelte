<script>
	import { Github, Mail } from "@lucide/svelte";

</script>

<footer id = "footer" class="footer bg-[#f7374f] flex flex-row items-left justify-left py-10">
    <div class="fot flex flex-col items-left justify-center pl-15">
      <div class="flex flex-row items-center">
        <img src = "/cloudward white.png" alt = "Logo" class = "w-15 h-15 mr-3 mt-3">
        <h1 class="text-3xl font-bold text-white mt-3">CloudWard</h1>
      </div>
      <p class="text-[#181818] text-lg mt-2 ml-5">CloudWard takes the stress out of hospital management — so your team can focus on what matters most: care.</p>
      <a href="https://github.com/himighandog2004/CPE204-Capstone-Project" target="_blank" class="github text-white"><Github size={32} color="#181818" class = "icong ml-5 mt-3 transform transition-transform duration-300 hover:scale-130" /></a>
    </div>
    <div class = "flex flex-col items-left top-0 pt-3 pl-27">
      <h2 class="text-3xl font-bold text-white">Developers</h2>
      <p class="text-[#181818] text-lg mt-4">Blaza, Andre</p>
      <p class="text-[#181818] text-lg">Nicomedes, Brent Daniel</p>
      <p class="text-[#181818] text-lg">Oreto, Angelito Jose</p>
    </div>
    <div class = "flex flex-col items-left top-0 pt-3 pl-30">
      <h2 class="text-3xl font-bold text-white">Contact Us</h2>
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=2023-108219@rtu.edu.ph"
      target="_blank" class="nav-link text-[#181818] text-lg mt-4 flex flex-row"> <Mail class= "mr-3"/> 2023-108219@rtu.edu.ph</a>
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=2023-106271@rtu.edu.ph"
      target="_blank" class="nav-link text-[#181818] text-lg flex flex-row"> <Mail class = "mr-3"/> 2023-106271@rtu.edu.ph</a>
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=2023-109391@rtu.edu.ph"
      target="_blank" class="nav-link text-[#181818] text-lg flex flex-row"> <Mail class = "mr-3" /> 2023-109391@rtu.edu.ph</a>
  </footer>

  <style>
    .github {
        position:relative;
        width: 50px;
        height: 50px;
    }
  
    .fot{
        position:relative;
        width: 450px;
        height: 200px;
        text-align: justify;
    }

    .footer {
        position: absolute;
        width: 100%;
        height: 280px;
        background-color: #f7374f;
    }
  </style>