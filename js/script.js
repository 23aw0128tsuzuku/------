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

/*モーダルウィンドウ*/
const modal = document.querySelector(".js-modal"); // layer要素に付与したjs-modalクラスを取得し変数に格納
const modalButton = document.querySelector(".js-modal-button"); // button要素に付与したjs-modal-buttonクラスを取得し、変数に格納
const modalClose = document.querySelector(".js-close-button"); // xボタンのjs-close-buttonを取得し変数に格納
// モーダルボタンをクリックしたときのイベントを登録
modalButton.addEventListener("click", () => {
  modal.classList.add("is-open");
});

modalClose.addEventListener("click", () => {
  // xボタンをクリックしたときのイベントを登録
  modal.classList.remove("is-open");
});

const swiper = new Swiper(".swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 30, //任意のマージン
});
