"use strict";
{

  const menu = document.querySelector("#menu");
  const open = document.querySelector("#open");
  const first = document.querySelector("#first");
  const second = document.querySelector("#second");
  const third = document.querySelector("#third");

  open.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    first.classList.toggle("first-trans");
    second.classList.toggle("second-trans");
    third.classList.toggle("third-trans");
  });

  // -------------------------------------
  // -------------------------------------
  // -------------------------------------

  const prev = document.querySelector("#prev");
  const next = document.querySelector("#next");
  const slides = document.querySelector("#slides");
  const slide = slides.children;
  let conunter = 0;

  function moveSlide() {
    const slideWidth = slide[0].getBoundingClientRect().width;
    slides.style.transform = `translateX(${-1 * slideWidth * conunter}px)`
  }

  next.addEventListener("click", () => {
    conunter++;
    if (conunter > slide.length - 1) {
      conunter = 0;
    }
    moveSlide();
  });

  prev.addEventListener("click", () => {
    conunter--;
    if (conunter < 0) {
      conunter = slide.length - 1;
    }
    moveSlide();
  });

  window.addEventListener("resize", () => {
    moveSlide();
  })




}