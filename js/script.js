"use strict";

// $(function () {
//   $(".POINT_ac dt").on("click", function () {
//     $(this).next().slideToggle();
//   });
// });

//ハンバーガーメニュー
let hbgFlg = false;
const hbgbtn = document.querySelector("#hbg-btn");
function btnClick() {
  const hbgbtnDiv = document.querySelector(".btn-line");
  const hbgMenu = document.querySelector(".hbg-menu-body");
  if (hbgFlg == false) {
    hbgMenu.classList.add("hbg-menu-body-clicked");
    hbgbtnDiv.classList.add("btn-line-clicked");
    hbgFlg = true;
  } else {
    hbgMenu.classList.remove("hbg-menu-body-clicked");
    hbgbtnDiv.classList.remove("btn-line-clicked");
    hbgFlg = false;
  }
}
const hbgbtnAction = hbgbtn.addEventListener("click", btnClick);
const abtn = document.querySelectorAll(".hbg-act");
const abtbtnaction1 = abtn[0].addEventListener("click", btnClick);
const abtbtnaction2 = abtn[1].addEventListener("click", btnClick);
const abtbtnaction3 = abtn[2].addEventListener("click", btnClick);
// const abtbtnaction4 = abtn[3].addEventListener("click", btnClick);
// const abtbtnaction5 = abtn[4].addEventListener("click", btnClick);

const scroll = document.querySelector(".TOP");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  window.scrollY > 850
    ? (scroll.style.opacity = 1)
    : (scroll.style.opacity = 0);
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  centeredSlides: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const btn = document.querySelector(".botan_yomu");
const modal = document.querySelector(".modal");
const batu = document.querySelector(".batu");
const bg = document.querySelector(".bg");

btn.addEventListener("click", () => {
  console.log("click");
  modal.classList.toggle("grid");
  bg.classList.toggle("grid");
  document.body.classList.toggle("no-sc");
});

batu.addEventListener("click", () => {
  console.log("click");
  modal.classList.toggle("grid");
  bg.classList.toggle("grid");
  document.body.classList.toggle("no-sc");
});

/*アコーディオン*/
const dt = document.querySelectorAll("dt");
console.log(dt);
const dd_ad = document.querySelectorAll(".dd_ad");
for (let i = 0; i < dt.length; i++) {
  dt[i].addEventListener("click", () => {
    for (let l = 0; l < dt.length; l++) {
      document.querySelector(`.POINT0${l + 1}`).style.marginBottom = 0;
    }
    dd_ad[i].classList.toggle("active");
    const h = dd_ad[i].clientHeight;
    console.log(`POINT0${i + 1} ${h}`);
    document.querySelector(`.POINT0${i + 1}`).style.marginBottom = `${h}px`;
  });
}
