import * as flsFunctions from "./modules/functions.js";
import data from "./card.json";
import { loadProducts, moreP, tabsActive, search, cardSwiper } from "./card.js";

import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { SplitText } from "gsap/SplitText.min.js";
import tippy from "tippy.js";
import fancybox from "fancybox";

gsap.registerPlugin(ScrollTrigger, SplitText);
// import tippy from "tippy.js";
flsFunctions.isWebp();

import gsap from "gsap";

import Swiper, { Autoplay, FreeMode, Navigation, Pagination } from "swiper";

import animation from "./animation.js";

// import preloader from "./preloader.js";

// preloader();

//header

//
tabsActive();
loadProducts(data);
setTimeout(() => {
  cardSwiper.init();
}, 2000);

moreP(".tab1", data, "apartments");
moreP(".tab2", data, "villas");
moreP(".tab3", data, "townhouses");
moreP(".tab4", data, "penthouses");
moreP(".tab5", data, "duplexes");
moreP(".tab6", data, "properties");

search(data);

//

// apartment

// apartment

let scrollBefore = 600;
const header = document.getElementById("header");
window.addEventListener("scroll", (e) => {
  const scrolled = window.scrollY;
  if (scrolled < document.querySelector(".wrapper").offsetHeight) {
    header.classList.remove("hide");
  }
  if (scrolled > 600) {
    if (scrollBefore < scrolled) {
      if (header.classList.contains("hide")) {
        header.classList.remove("hide");
        document.querySelector(".menu__bg").classList.remove("_active");
        document.querySelector(".btn").classList.remove("_active");
      }
      scrollBefore = scrolled;
    } else {
      scrollBefore = scrolled;
      if (!header.classList.contains("hide")) {
        header.classList.add("hide");
      }
    }
  }
});

const iconMenu = document.querySelector(".btn");
const linkMenu = document.querySelector(".menu__bg");

if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    iconMenu.classList.toggle("_active");
    linkMenu.classList.toggle("_active");
  });
}

if (header.classList.contains("hide")) {
  iconMenu.classList.remove("_active");
  linkMenu.classList.remove("_active");
  console.log("i work");
}

gsap.to(".header-left__img", {
  x: 0,
  duration: 1,
});

gsap.to(".header-right-content__title", {
  x: 0,
  y: 0,
  duration: 1.5,
});

gsap.to(".header-right-content__subtitle", {
  x: 0,
  duration: 1.75,
});

gsap.to(".header-right-content__btn", {
  x: 0,
  y: 0,
  duration: 2,
});

gsap.to(".new-vesion__bg ", {
  y: 0,
  duration: 2,
});
//

// map

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".front-page",
    start: "top",
    end: "100%",
    scrub: "true",
    pin: true,
  },
});

tl.fromTo(
  ".front-page",
  {
    clipPath: "circle(10%)",
  },
  {
    clipPath: "circle(75%)",
    duration: 2,
  }
);

tl.fromTo(
  ".map-img",
  {
    scale: 0.15,
  },
  {
    scale: 0,
    opacity: 0,
    duration: 1,
  },
  "-=2"
);

tl.fromTo(
  ".map-dots",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 2,
  }
);

tl.fromTo(
  ".sub-title",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 1,
  }
);

let mapDots = document.querySelectorAll(".map-dot");
document.addEventListener("click", (e) => {
  const target = e.target;
  if (
    target.closest(".dot-active") /* document.querySelector("dot-active") */
  ) {
    target.closest(".map-dot").classList.remove("dot-active");
  } else if (target.closest(".map-dot")) {
    mapDots.forEach((dot) => {
      dot.classList.remove("dot-active");
    });
    target.closest(".map-dot").classList.add("dot-active");
  } else {
    mapDots.forEach((dot) => {
      dot.classList.remove("dot-active");
    });
  }
});

// map
tippy(".map-dot", {
  content(reference) {
    const id = reference.getAttribute("data-template");
    const template = document.getElementById(id);
    return template.innerHTML;
  },
  allowHTML: true,
  // trigger: "click",
  arrow: true,
  theme: "clarity",
  interactive: true,
  trigger: "click",
});

// cloud
// gsap.utils.toArray(".gsap-section").forEach((section) => {
//   ScrollTrigger.create({
//     trigger: section,
//     start: "top top",
//     pin: true,
//     pinSpacing: false,
//   });
// });
// cloud

//

// footer btn
const showNumber1 = document.querySelector(".bottom-f__number1");
const showNumber2 = document.querySelector(".bottom-f__number2");
const showNumberBtn = document.querySelector(".bottom-f__btn");

showNumberBtn.addEventListener("click", () => {
  if (showNumber1 && showNumber2) {
    showNumber1.classList.add("active");
    showNumber2.classList.add("noactive");
  }
});

//vision-swiper

var swiper = new Swiper(".vision__swiper", {
  modules: [Navigation, Pagination],
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 100,
  autoHeight: true,
  pagination: {
    el: ".swiper-pagination",
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    500: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    700: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    900: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
  },
});

// gallery-swiper

var swiper = new Swiper(".gallery__swiper", {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  centeredSlides: true,
  autoHeight: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
  },
  // Responsive breakpoints
});

// stage+

const txtS = new SplitText(".gallery__swiper-title", { type: "chars" });

const gallertAnimate = gsap.timeline({
  scrollTrigger: {
    trigger: ".gallery",
    start: "-200px top",
  },
});

const txt = new SplitText(".gallery__title-splite", { type: "chars" });

gallertAnimate.from(txt.chars, {
  duration: 0.5,
  opacity: 0,
  y: -50,
  x: 25,
  stagger: 0.1,
});

gallertAnimate.fromTo(
  ".gallery__img1",
  {
    opacity: 0,
    scale: 0.5,
    x: -300,
    y: -300,
  },
  {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
  },
  "<"
);
gallertAnimate.fromTo(
  ".gallery__img4",
  {
    opacity: 0,
    scale: 0.5,
    x: 300,
    y: -300,
  },
  {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
  },
  "<"
);
gallertAnimate.fromTo(
  ".gallery__img3",
  {
    opacity: 0,
    x: -300,
    y: 300,
    scale: 0.5,
  },
  {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
  }
);
gallertAnimate.fromTo(
  ".gallery__img6",
  {
    opacity: 0,
    x: 300,
    y: 300,
    scale: 0.5,
  },
  {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
  },
  "<"
);
gallertAnimate.fromTo(
  ".gallery__img2",
  {
    opacity: 0,
    x: -300,
    scale: 0.5,
  },
  {
    opacity: 1,
    x: 0,
    scale: 1,
  }
);
gallertAnimate.fromTo(
  ".gallery__img5",
  {
    opacity: 0,
    x: 300,
    scale: 0.5,
  },
  {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  "<"
);

animation();
