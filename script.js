const target = 30;
let clickedElements = [];

const popupElement = document.querySelector(".popup");
const gameOverElement = document.querySelector(".game-over");
const closePopupButton = document.querySelector(".popup .game-nav-button");

// const popup
const coronaVirusElementsList = document.querySelectorAll(".body:not(.obstacle)");
coronaVirusElementsList.forEach(function (element) {
  element.addEventListener("click", function () {
    if (clickedElements.find((elem) => elem == element)) {
      return;
    }
    clickedElements.push(element);
    if (clickedElements.length == target) {
      gameOverElement.style.animationState = "paused";
      popupElement.style.display = "block";
    }
  });
});

closePopupButton.addEventListener("click", function () {
  popupElement.style.display = "none";
});
