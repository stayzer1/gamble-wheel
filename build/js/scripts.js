// Custom Scripts
const results = [
  "+500%<br> к депозиту",
  "ПОПРОБУЙ ЕЩЕ РАЗ",
  "+500% к депозиту<br> и 150ФС",
  "25 ФРИСПИНОВ",
  "150<br> фриспинов",
  "НЕ ПОВЕЗЛО",
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
      results[randomIndex] === "НЕ ПОВЕЗЛО" ||
      results[randomIndex] === "ПОПРОБУЙ ЕЩЕ РАЗ"
    ) {
      wheel.style.transform = `rotate(0deg)`;
      modalTitle.innerHTML = "Попробуйте<br> ещё раз!";
      modalText.innerHTML = "";
      modalMessage.innerHTML = "";
      tryAgainButton.style.display = "flex";
      document.querySelector(".modal__link").style.display = "none";
    } else {
      modalTitle.innerHTML = "Поздравляем!";
      modalText.innerHTML = "Вы выиграли!";
      modalMessage.innerHTML = results[randomIndex];
      document.querySelector(".modal__link").innerHTML = "Получить бонус";
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

