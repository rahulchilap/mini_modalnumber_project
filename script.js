"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btn = document.querySelector(".close-modal");
const three_buttons = document.querySelectorAll(".show-modal");

const openModel = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < three_buttons.length; i++) {
  three_buttons[i].addEventListener("click", openModel);
}
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
