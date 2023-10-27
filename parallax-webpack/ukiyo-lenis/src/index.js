import Ukiyo from "ukiyojs";
import Lenis from '@studio-freight/lenis'

// parallax
const els = document.querySelectorAll(".ukiyo");
els.forEach((el) => {
  const parallax = new Ukiyo(el, {
    scale: 1.2,
    wrapperClass: 'img'
  });
});

// smooth scroll
const lenis = new Lenis({
  lerp: 0.1,
  smooth: true,
  direction: "vertical"
});

function raf() {
  lenis.raf();
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);