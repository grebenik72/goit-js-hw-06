function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyBgcolor = document.body;
const currentColor = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");
btnChangeColor.addEventListener(`click`, bodyChangeColor => {
  currentColor.textContent = bodyBgcolor.style.backgroundColor = getRandomHexColor();
});