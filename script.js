const target = 30;
let clickedElements = [];

const popupElement = document.querySelector(".win-popup");
const gameOverElement = document.querySelector(".game-over");
const closePopupButton = document.querySelector(".win-popup .game-nav-button");
const resetButton = document.querySelector(".game-over input[type=reset]");

const infectedElementsList = document.querySelectorAll(".body:not(.obstacle)");
infectedElementsList.forEach(function (element) {
  element.parentElement.addEventListener("click", function () {
    if (clickedElements.find((elem) => elem == element)) {
      return;
    }
    clickedElements.push(element);
    if (clickedElements.length == target) {
      popupElement.style.display = "block";
    }
  });
});

closePopupButton.addEventListener("click", function () {
  popupElement.style.display = "none";
  clickedElements = [];
});

resetButton.addEventListener("click", function () {
  clickedElements = [];
});
