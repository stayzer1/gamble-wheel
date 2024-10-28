// Custom Scripts
// Custom scripts

// Smooth Scroll
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener("click", function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
const results = [
  "+500%<br> к депозиту",
  "ПОПРОБУЙ ЕЩЕ РАЗ",
  "+500% к депозиту<br> и 150ФС", // Пример с использованием <br>
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
      modalTitle.innerHTML = "Попробуйте<br> ещё раз!"; // Используем innerHTML
      modalText.innerHTML = ""; // Очищаем текст
      modalMessage.innerHTML = ""; // Очищаем сообщение
      tryAgainButton.style.display = "flex"; // Покажем кнопку попробовать еще раз
      document.querySelector(".modal__link").style.display = "none"; // Скрываем ссылку
    } else {
      modalTitle.innerHTML = "Поздравляем!"; // Используем innerHTML
      modalText.innerHTML = "Вы выиграли!"; // Используем innerHTML
      modalMessage.innerHTML = results[randomIndex]; // Используем innerHTML для отображения выигрыша
      document.querySelector(".modal__link").innerHTML = "Получить бонус"; // Используем innerHTML
      document.querySelector(".modal__link").style.display = "flex"; // Показываем ссылку
      tryAgainButton.style.display = "none"; // Скрываем кнопку
    }

    modal.style.display = "flex"; // Показываем модальное окно
  }, 4000);
});

tryAgainButton.addEventListener("click", function () {
  blockedWheel.style.display = "none";
  modal.style.display = "none"; // Закрываем модальное окно
});

