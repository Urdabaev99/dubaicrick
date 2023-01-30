import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { SplitText } from "gsap/SplitText.min.js";
gsap.registerPlugin(ScrollTrigger, SplitText);
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";

export default function animation() {
  gsap.utils.toArray(".wrapper").forEach((section, i) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      pin: true,
      pinSpacing: false,
    });
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".vision",
      start: "top +600px",
      end: "center center",
      scrub: true,
    },
  });

  tl.fromTo(
    ".vision__right_img1",
    {
      y: -50,
      x: -50,
    },
    {
      y: 0,
      x: 0,
    }
  );
  tl.fromTo(
    ".vision__right_img2",
    {
      x: 100,
      y: 100,
    },
    {
      x: 0,
      y: 0,
    },
    "<"
  );
  tl.fromTo(
    ".vision__right_img3",
    {
      x: -100,
    },
    {
      x: 0,
    },
    "<"
  );

  tl.fromTo(
    ".wrapper",
    {
      y: 0,
      opacity: 1,
      duration: 1,
    },
    {
      y: -200,
      opacity: 0.5,
    },
    "<"
  );
  // gallery

  document.querySelector(".gallery__btn button").onclick = () => {
    document.querySelector(".gallery-pop-up").classList.add("active");
    document.body.classList.add("lock");
    header.classList.remove("hide");
  };
  document.querySelector(".popup-image__close").onclick = () => {
    document.querySelector(".gallery-pop-up").classList.remove("active");
    document.body.classList.remove("lock");
  };

  // gallery
  // gallery-pop
  // gallery-pop

  // stage
  // stage

  const stageInfoTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".stage",
      start: "top-=500px top",
      end: "bottom top",
    },
  });

  stageInfoTl.fromTo(
    ".stage__rb_4",
    {
      x: -1300,
      rotate: -2000,
      scale: 1,
    },
    {
      duration: 3,
      x: 0,
      rotate: 45,
      scale: 0.5,
    },
    0.5
  );
  stageInfoTl.fromTo(
    ".stage__rb_1",
    {
      opacity: 0,
      scale: 1,
      rotate: -360,
    },
    {
      opacity: 1,
      duration: 1,
      scale: 0.9,
      rotate: 45,
    },
    0.8
  );

  stageInfoTl.fromTo(
    ".stage__line-green",
    {
      width: 0,
    },
    {
      width: 1135,
      duration: 3,
    },
    1
  );
  stageInfoTl.fromTo(
    ".stage__rb_2",
    {
      opacity: 0,
      scale: 1,
      rotate: -250,
    },
    {
      opacity: 1,
      duration: 1,
      scale: 0.9,
      rotate: 45,
    },
    1.3
  );
  stageInfoTl.fromTo(
    ".stage__rb_3",
    {
      opacity: 0,
      scale: 1,
      rotate: -200,
    },
    {
      opacity: 1,
      duration: 1.5,
      scale: 0.7,
      rotate: 45,
    },
    2
  );
  stageInfoTl.fromTo(
    ".stage__img_1",
    {
      y: -300,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
    },
    1
  );
  stageInfoTl.fromTo(
    ".stage__info_1",
    {
      y: 300,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
    },
    1
  );

  stageInfoTl.fromTo(
    ".stage__img_2",
    {
      y: -300,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 2,
    },
    1
  );
  stageInfoTl.fromTo(
    ".stage__info_2",
    {
      y: 300,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 2,
    },
    1
  );

  stageInfoTl.fromTo(
    ".stage__img_3",
    {
      y: -300,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 3,
    },
    1
  );
  stageInfoTl.fromTo(
    ".stage__info_3",
    {
      y: 300,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 3,
    },
    1
  );

  stageInfoTl.fromTo(
    ".stage__img_4",
    {
      y: -300,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 4,
    },
    1
  );
  stageInfoTl.fromTo(
    ".stage__info_4",
    {
      y: 300,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 4,
    },
    1
  );
  // stage
}

Fancybox.bind('[data-fancybox="gallery"]', {
  dragToClose: false,

  Toolbar: false,
  closeButton: "top",

  Image: {
    zoom: false,
  },

  on: {
    initCarousel: (fancybox) => {
      const slide = fancybox.Carousel.slides[fancybox.Carousel.page];

      fancybox.$container.style.setProperty(
        "--bg-image",
        `url("${slide.$thumb.src}")`
      );
    },
    "Carousel.change": (fancybox, carousel, to, from) => {
      const slide = carousel.slides[to];

      fancybox.$container.style.setProperty(
        "--bg-image",
        `url("${slide.$thumb.src}")`
      );
    },
  },
});
