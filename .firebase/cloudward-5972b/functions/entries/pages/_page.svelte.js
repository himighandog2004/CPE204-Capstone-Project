import "clsx";
import { v as sanitize_props, w as rest_props, x as fallback, y as spread_attributes, z as clsx, n as slot, A as bind_props, m as pop, p as push, B as ensure_array_like, C as element, D as spread_props } from "../../chunks/index.js";
import "../../chunks/splide.esm.js";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function forOwn(object, iteratee) {
  if (object) {
    const keys = Object.keys(object);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (key !== "__proto__") {
        if (iteratee(object[key], key) === false) {
          break;
        }
      }
    }
  }
  return object;
}
function isObject(subject) {
  return subject !== null && typeof subject === "object";
}
function isEqualDeep(subject1, subject2) {
  if (Array.isArray(subject1) && Array.isArray(subject2)) {
    return subject1.length === subject2.length && !subject1.some((elm, index) => !isEqualDeep(elm, subject2[index]));
  }
  if (isObject(subject1) && isObject(subject2)) {
    const keys1 = Object.keys(subject1);
    const keys2 = Object.keys(subject2);
    return keys1.length === keys2.length && !keys1.some((key) => {
      return !Object.prototype.hasOwnProperty.call(subject2, key) || !isEqualDeep(subject1[key], subject2[key]);
    });
  }
  return subject1 === subject2;
}
function merge(object, source) {
  const merged = object;
  forOwn(source, (value, key) => {
    if (Array.isArray(value)) {
      merged[key] = value.slice();
    } else if (isObject(value)) {
      merged[key] = merge(isObject(merged[key]) ? merged[key] : {}, value);
    } else {
      merged[key] = value;
    }
  });
  return merged;
}
function Splide_1($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "go",
    "sync",
    "class",
    "options",
    "splide",
    "extensions",
    "transition",
    "hasTrack"
  ]);
  push();
  let className = fallback($$props["class"], void 0);
  let options = fallback($$props["options"], () => ({}), true);
  let splide = fallback($$props["splide"], void 0);
  let extensions = fallback($$props["extensions"], void 0);
  let transition = fallback($$props["transition"], void 0);
  let hasTrack = fallback($$props["hasTrack"], true);
  let prevOptions = merge({}, options);
  function go(control) {
    splide?.go(control);
  }
  function sync(target) {
    splide?.sync(target);
  }
  if (splide && !isEqualDeep(prevOptions, options)) {
    splide.options = options;
    prevOptions = merge({}, prevOptions);
  }
  $$payload.out += `<div${spread_attributes(
    {
      class: clsx(classNames("splide", className)),
      ...$$restProps
    }
  )}>`;
  if (hasTrack) {
    $$payload.out += "<!--[-->";
    SplideTrack($$payload, {
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    });
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<!---->`;
    slot($$payload, $$props, "default", {});
    $$payload.out += `<!---->`;
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, {
    class: className,
    options,
    splide,
    extensions,
    transition,
    hasTrack,
    go,
    sync
  });
  pop();
}
function SplideTrack($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  push();
  let className = fallback($$props["class"], void 0);
  $$payload.out += `<div${spread_attributes(
    {
      class: clsx(classNames("splide__track", className)),
      ...$$restProps
    }
  )}><ul class="splide__list"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></ul></div>`;
  bind_props($$props, { class: className });
  pop();
}
function SplideSlide($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  push();
  let className = fallback($$props["class"], void 0);
  $$payload.out += `<li${spread_attributes(
    {
      class: clsx(classNames("splide__slide", className)),
      ...$$restProps
    }
  )}><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></li>`;
  bind_props($$props, { class: className });
  pop();
}
/**
 * @license @lucide/svelte v0.507.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 */
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
function Icon($$payload, $$props) {
  push();
  const {
    name,
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth = false,
    iconNode = [],
    children,
    $$slots,
    $$events,
    ...props
  } = $$props;
  const each_array = ensure_array_like(iconNode);
  $$payload.out += `<svg${spread_attributes(
    {
      ...defaultAttributes,
      ...props,
      width: size,
      height: size,
      stroke: color,
      "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      class: clsx([
        "lucide-icon lucide",
        name && `lucide-${name}`,
        props.class
      ])
    },
    null,
    void 0,
    void 0,
    3
  )}><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let [tag, attrs] = each_array[$$index];
    element($$payload, tag, () => {
      $$payload.out += `${spread_attributes({ ...attrs }, null, void 0, void 0, 3)}`;
    });
  }
  $$payload.out += `<!--]-->`;
  children?.($$payload);
  $$payload.out += `<!----></svg>`;
  pop();
}
function Boxes($$payload, $$props) {
  push();
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    [
      "path",
      {
        "d": "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"
      }
    ],
    ["path", { "d": "m7 16.5-4.74-2.85" }],
    ["path", { "d": "m7 16.5 5-3" }],
    ["path", { "d": "M7 16.5v5.17" }],
    [
      "path",
      {
        "d": "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"
      }
    ],
    ["path", { "d": "m17 16.5-5-3" }],
    ["path", { "d": "m17 16.5 4.74-2.85" }],
    ["path", { "d": "M17 16.5v5.17" }],
    [
      "path",
      {
        "d": "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"
      }
    ],
    ["path", { "d": "M12 8 7.26 5.15" }],
    ["path", { "d": "m12 8 4.74-2.85" }],
    ["path", { "d": "M12 13.5V8" }]
  ];
  Icon($$payload, spread_props([
    { name: "boxes" },
    props,
    {
      iconNode,
      children: ($$payload2) => {
        props.children?.($$payload2);
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
  pop();
}
function Chart_no_axes_combined($$payload, $$props) {
  push();
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    ["path", { "d": "M12 16v5" }],
    ["path", { "d": "M16 14v7" }],
    ["path", { "d": "M20 10v11" }],
    [
      "path",
      {
        "d": "m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"
      }
    ],
    ["path", { "d": "M4 18v3" }],
    ["path", { "d": "M8 14v7" }]
  ];
  Icon($$payload, spread_props([
    { name: "chart-no-axes-combined" },
    props,
    {
      iconNode,
      children: ($$payload2) => {
        props.children?.($$payload2);
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
  pop();
}
function Github($$payload, $$props) {
  push();
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    [
      "path",
      {
        "d": "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
      }
    ],
    ["path", { "d": "M9 18c-4.51 2-5-2-7-2" }]
  ];
  Icon($$payload, spread_props([
    { name: "github" },
    props,
    {
      iconNode,
      children: ($$payload2) => {
        props.children?.($$payload2);
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
  pop();
}
function User($$payload, $$props) {
  push();
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    [
      "path",
      {
        "d": "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"
      }
    ],
    ["circle", { "cx": "12", "cy": "7", "r": "4" }]
  ];
  Icon($$payload, spread_props([
    { name: "user" },
    props,
    {
      iconNode,
      children: ($$payload2) => {
        props.children?.($$payload2);
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
  pop();
}
function _page($$payload) {
  $$payload.out += `<div id="head" class="top-div bg-[#2c2c2c] w-full min-h-screen flex flex-col items-center"><div class="header sticky top-0 z-999 bg-[#2c2c2c] w-full flex flex-col md:flex-row items-center justify-between p-4 py-10"><div class="logotitle flex items-center ml-10 svelte-1txfd2f"><img src="/cloudward white.png" alt="Logo" class="w-15 h-15 mr-3 svelte-1txfd2f"> <a href="#head" class="nav-link text-white text-3xl font-bold svelte-1txfd2f">CloudWard</a></div> <div class="navbar mt-4 md:mt-0 svelte-1txfd2f"><ul class="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-5"><li class="svelte-1txfd2f"><a href="#mid-section" class="nav-link text-[#d9d9d9] text-lg font-bold svelte-1txfd2f">Features</a></li> <li class="svelte-1txfd2f"><a href="#about-section" class="nav-link text-[#d9d9d9] text-lg font-bold svelte-1txfd2f">About</a></li> <li class="svelte-1txfd2f"><a href="#footer" class="nav-link text-[#d9d9d9] text-lg font-bold svelte-1txfd2f">Contact</a></li></ul></div> <div class="authenticate flex flex-col md:flex-row items-center justify-center mt-4 md:mt-0 mr-10 svelte-1txfd2f"><button class="nav-link text-white font-bold mb-2 md:mb-0 md:mr-2 svelte-1txfd2f">Sign In</button> <button class="bg-[#F7374F] text-white font-bold py-2 px-4 rounded-full hover:bg-[#b02738] transition duration-300 svelte-1txfd2f">Register</button></div></div> <section class="w-full flex flex-col md:flex-row"><div class="hero-left w-full md:w-1/2 text-white py-40 px-8 md:px-20 flex flex-col items-start text-left rounded-xl"><h1 class="text-4xl md:text-5xl font-extrabold mb-4">Welcome to CloudWard</h1> <p class="text-lg md:text-xl mb-8 max-w-xl">A modern cloud-based hospital management system built for speed, simplicity, and efficiency.</p> <button class="text-white font-bold bg-[#F7374F] py-3 px-4 rounded-full hover:bg-[#b02738] transition duration-300">Join Us Today</button></div> <div class="hero-right w-1/2 md:w-1/2 flex items-center justify-center p-0 ml-10">`;
  Splide_1($$payload, {
    "aria-labelby": "site",
    options: {
      type: "loop",
      perPage: 1,
      autoplay: true,
      arrows: false,
      pagination: false,
      speed: 5e3,
      interval: 5e3,
      pauseOnHover: false,
      pauseOnFocus: false
    },
    children: ($$payload2) => {
      SplideSlide($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<img src="/reg.png" alt="Slide 1">`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      SplideSlide($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<img src="/login.png" alt="Slide 2">`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      SplideSlide($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<img src="/landing.png" alt="Slide 3">`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></section> <div id="mid-section" class="p-5 mb-10"></div> <section class="mid-section flex flex-row justify-center items-center text-center p-2"><div class="grid grid-cols-3 gap-4 ml-10"><div class="card-container h-full flex-1 flex-col justify-center items-center text-center p-4 bg-[#f7374f] rounded-3xl shadow-lg"><h2 class="text-3xl font-bold text-white mb-4">Patient Analytics</h2> <p class="text-lg text-white">Streamline patient records, appointments, and history for better care.</p> <div class="flex items-center justify-center mt-10">`;
  Chart_no_axes_combined($$payload, {
    size: 150,
    color: "#FFFF",
    class: "flex items-center justify-center"
  });
  $$payload.out += `<!----></div></div> <div class="card-container h-full flex-1 flex-col justify-center items-center text-center p-4 ml-2 bg-[#f7374f] rounded-3xl shadow-lg"><h2 class="text-3xl font-bold text-white mb-4">Inventory Management</h2> <p class="text-lg text-white">Keep track of medical supplies and equipment with ease.</p> <div class="flex items-center justify-center mt-10">`;
  Boxes($$payload, {
    size: 150,
    color: "#FFFF",
    class: "flex items-center justify-center"
  });
  $$payload.out += `<!----></div></div> <div class="card-container h-full flex-1 flex-col justify-center items-center text-center p-4 ml-2 bg-[#f7374f] rounded-3xl shadow-lg"><h2 class="text-3xl font-bold text-white mb-4">Staff Management</h2> <p class="text-lg text-white">Manage staff schedules, roles, and performance efficiently.</p> <div class="flex items-center justify-center mt-10">`;
  User($$payload, {
    size: 150,
    color: "#FFFF",
    class: "flex items-center justify-center mt-7"
  });
  $$payload.out += `<!----></div></div></div> <spline-viewer class="roboto svelte-1txfd2f" url="https://prod.spline.design/YRuPMoNhtwzqnQiL/scene.splinecode"></spline-viewer></section> <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.89/build/spline-viewer.js"><\/script></div> <div id="bot-div" class="bot-div w-full bg-white py-20"><section id="about-section" class="about-section mx-auto px-8"><h2 class="text-3xl font-bold text-center mb-6 text-gray-800">About Us</h2> <p class="text-lg text-gray-700 max-w-3xl mx-auto text-center">CloudWard revolutionizes hospital management with a fully integrated, cloud-based solution designed for efficiency, security, and ease of use. Our platform streamlines administrative tasks, enhances patient care, and simplifies communication to ensure that healthcare providers can focus on what matters most.</p> <div class="mt-10 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-10"><div class="about-card bg-gray-100 p-6 rounded-lg shadow-md"><h3 class="text-xl font-semibold mb-2 text-gray-800">Efficient</h3> <p class="text-gray-600">Automate routine tasks and streamline patient management seamlessly.</p></div> <div class="about-card bg-gray-100 p-6 rounded-lg shadow-md"><h3 class="text-xl font-semibold mb-2 text-gray-800">Secure</h3> <p class="text-gray-600">Protect sensitive information with advanced security protocols and cloud storage.</p></div> <div class="about-card bg-gray-100 p-6 rounded-lg shadow-md"><h3 class="text-xl font-semibold mb-2 text-gray-800">Innovative</h3> <p class="text-gray-600">Embrace the future of healthcare with cutting-edge technology.</p></div></div></section> <div class="p-10"></div> <footer id="footer" class="footer bg-[#f7374f] flex flex-row items-left justify-left py-10 svelte-1txfd2f"><div class="fot flex flex-col items-left justify-center pl-15 svelte-1txfd2f"><div class="flex flex-row items-center"><img src="/cloudward.png" alt="Logo" class="w-15 h-15 mr-3"> <h1 class="text-3xl font-bold text-white">CloudWard</h1></div> <p class="text-white text-lg mt-4 ml-5">CloudWard takes the stress out of hospital management — so your team can focus on what matters most: care.</p> <a href="https://github.com/himighandog2004/CPE204-Capstone-Project" target="_blank" class="github text-white hover:underline svelte-1txfd2f">`;
  Github($$payload, { size: 32, color: "#FFFF", class: "ml-5 mt-5" });
  $$payload.out += `<!----></a></div> <div class="flex flex-col items-left top-0 pt-3 pl-30"><h2 class="text-2xl font-bold text-white">Developers</h2> <p class="text-[#d9d9d9] text-m mt-4">Blaza, Andre</p> <p class="text-[#d9d9d9] text-m mt-1">Nicomedes, Brent Daniel</p> <p class="text-[#d9d9d9] text-m mt-1">Oreto, Angelito Jose</p></div> <div class="flex flex-col items-left top-0 pt-3 pl-30"><h2 class="text-2xl font-bold text-white">Contact Us</h2> <a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=2023-108219@rtu.edu.ph" target="_blank" class="text-[#d9d9d9] text-m mt-4">2023-108219@rtu.edu.ph</a> <a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=2023-106271@rtu.edu.ph" target="_blank" class="text-[#d9d9d9] text-m mt-1">2023-106271@rtu.edu.ph</a> <a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=2023-109391@rtu.edu.ph" target="_blank" class="text-[#d9d9d9] text-m mt-1">2023-109391@rtu.edu.ph</a></div></footer></div>`;
}
export {
  _page as default
};
