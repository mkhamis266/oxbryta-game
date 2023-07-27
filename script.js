const target = 100;
let score = 0;
let clickedElements = [];

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("dblclick", (e) => {
    e.preventDefault();
  });
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });
  // document.querySelector("form").addEventListener("touchstart", function (e) {
  //   e.preventDefault();
  // });
});

// const popupElement = document.querySelector(".win-popup");
const gameOverElement = document.querySelector(".game-over");
// const closePopupButton = document.querySelector(".win-popup .game-nav-button");
const resetButton = document.querySelector(".game-over input[type=reset]");
const scoreElement = document.querySelector(".score");

const infectedElementsList = document.querySelectorAll(".body:not(.obstacle)");
infectedElementsList.forEach(function (element) {
  element.parentElement.addEventListener("click", function () {
    if (clickedElements.find((elem) => elem == element)) {
      return;
    }
    clickedElements.push(element);
    // if (clickedElements.length == target) {
    //   popupElement.style.display = "block";
    // }
    score = Math.round((clickedElements.length / target) * 100);
    scoreElement.innerHTML = score;
  });
});

// closePopupButton.addEventListener("click", function () {
//   popupElement.style.display = "none";
//   clickedElements = [];
// });

resetButton.addEventListener("click", function () {
  clickedElements = [];
});
