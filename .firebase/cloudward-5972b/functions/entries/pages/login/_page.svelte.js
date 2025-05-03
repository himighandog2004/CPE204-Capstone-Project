import { B as ensure_array_like, E as attr_style, F as stringify, G as attr_class, u as escape_html } from "../../../chunks/index.js";
function _page($$payload) {
  let selectedRole = "Admin";
  const roles = ["Patient", "Admin", "Doctor"];
  const each_array = ensure_array_like(roles);
  $$payload.out += `<div class="bg-[#2C2C2C] w-screen h-screen flex flex-col items-center justify-center"><div class="rounded-3xl shadow-xl bg-[#F7374F] w-full max-w-[400px] h-[500px]"><div class="flex items-center justify-left w-10 h-10 ml-5 mt-5"><button type="button" class="hover:bg-[#d9d9d9] hover:rounded-full svelte-6nsvzy"><img src="/backbtn.png" alt="Back"></button></div> <div class="flex items-top justify-center"><img src="/cloudward.png" alt="Logo" class="w-32 h-32"></div> <div class="text-center mt-5"><h1 class="text-white text-3xl font-bold">CloudWard</h1>  <div class="relative mt-4 flex bg-[#d9d9d9] border-2 border-[#2c2c2c] rounded-full p-1 mx-auto"${attr_style(`width: ${stringify(roles.length * 80)}px;`)}><div class="absolute left-0 bg-[#2c2c2c] rounded-full transition-transform duration-300 ease-in-out"${attr_style(`width: 75px; top: -1px; height: calc(100% + 2px); transform: translateX(${stringify(roles.indexOf(selectedRole) * 81)}px);`)}></div> <!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let role = each_array[$$index];
    $$payload.out += `<button${attr_class("relative z-10 flex items-center justify-center px-3 py-1 rounded-full text-xs font-semibold truncate text-center svelte-6nsvzy", void 0, { "selected": selectedRole === role })} style="width: 80px;">${escape_html(role)}</button>`;
  }
  $$payload.out += `<!--]--></div></div></div></div>`;
}
export {
  _page as default
};
