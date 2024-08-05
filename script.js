const headerEl = document.querySelector("header");
const logoEl = document.querySelector(".logo");


const setTranslate = (xPos, yPos, el) => {
  el.style.transform = `translate3d(${xPos}, ${yPos}px, 0)`;
};

let xScrollPosition;
let yScrollPosition;

const scrollLoop = () => {
  xScrollPosition = window.scrollX;
  yScrollPosition = window.scrollY;

  setTranslate(0, yScrollPosition * 0.71, headerEl);
  setTranslate(0, yScrollPosition * -0.15, logoEl);

  requestAnimationFrame(scrollLoop);
};

window.addEventListener("DOMContentLoaded", scrollLoop, false);
