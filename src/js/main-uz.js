const results = [
  "+500% <br> DEPOZITGA",
  "Emas Baxtli",
  "+500% depozitga<br> va 150FS",
  "25 frispinlar",
  "150<br> frispinlar",
  "YANA URINIB<br> KO'RING",
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
      results[randomIndex] === "Emas Baxtli" ||
      results[randomIndex] === "YANA URINIB KO'RING"
    ) {
      wheel.style.transform = `rotate(0deg)`;
      modalTitle.innerHTML = "Qayta urinib<br> ko'ring!";
      modalText.innerHTML = "";
      modalMessage.innerHTML = "";
      tryAgainButton.style.display = "flex";
      document.querySelector(".modal__link").style.display = "none";
    } else {
      modalTitle.innerHTML = "Tabriklaymiz!";
      modalText.innerHTML = "Siz yutdingiz!";
      modalMessage.innerHTML = results[randomIndex];
      document.querySelector(".modal__link").innerHTML = "Bonus oling";
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
