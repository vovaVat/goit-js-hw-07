const colorSpn= document.querySelector(".color");
const changeColorButton= document.querySelector(".change-color")
const body= document.querySelector("body");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColorButton.addEventListener("click", event => {
  const color= getRandomHexColor();
  colorSpn.textContent= color;
  body.style.backgroundColor= color;
});