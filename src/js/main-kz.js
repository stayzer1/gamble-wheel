const results = [
  "+500% <br> депозитке",
  "СӘТСІЗ БОЛДЫ",
  "+500% епозитке <br> және 150FS",
  "25 фриспиндер",
  "150<br> фриспиндер",
  "СЫНАП КӨРІҢІЗ<br>ТАҒЫ БІР РЕТ",
];

const wheel = document.getElementById("wheel-image");
const modal = document.getElementById("modal");
const modalTitle = document.querySelector(".modal__title");
const modalText = document.querySelector(".modal__text");
const modalMessage = document.querySelector("#modal-message");
const tryAgainButton = document.getElementById("tryAgainButton");
const blockedWheel = document.querySelector(".blocked");

document.getElementById("spinButton").addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * results.length);
  const degrees = 360 * 5 + randomIndex * 60;

  wheel.style.transform = `rotate(${degrees}deg)`;
  wheel.style.zIndex = "5";
  blockedWheel.style.display = "block";

  setTimeout(() => {
    if (
      results[randomIndex] === "СӘТСІЗ БОЛДЫ" ||
      results[randomIndex] === "СЫНАП КӨРІҢІЗ<br>ТАҒЫ БІР РЕТ"
    ) {
      wheel.style.transform = `rotate(0deg)`;
      modalTitle.innerHTML = "Әрекетті<br> қайталаңыз!";
      modalText.innerHTML = "";
      modalMessage.innerHTML = "";
      tryAgainButton.style.display = "flex";
      document.querySelector(".modal__link").style.display = "none";
    } else {
      modalTitle.innerHTML = "Құттықтаймыз!";
      modalText.innerHTML = "Сіз ұтып алдыңыз!";
      modalMessage.innerHTML = results[randomIndex];
      document.querySelector(".modal__link").innerHTML = "Бонус алу";
      document.querySelector(".modal__link").style.display = "flex";
      tryAgainButton.style.display = "none";
    }

    modal.style.display = "flex";
  }, 4000);
});

tryAgainButton.addEventListener("click", function () {
  blockedWheel.style.display = "none";
  modal.style.display = "none";
});
