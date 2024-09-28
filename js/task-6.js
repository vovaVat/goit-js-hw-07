const input = document.querySelector("#controls input");
const createButton = input.nextElementSibling;
const destroyButton = createButton.nextElementSibling;
const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
  let color;
  let width = 30;
  let height = 30;
  let boxElements = '';

  for (let i = 0; i < amount; i++) {
    color = getRandomHexColor();
    boxElements += `<div style="width:${width}px; height:${height}px; background-color:${color};"></div>`;
    width += 10;
    height += 10;
  }

  boxes.innerHTML = boxElements;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

createButton.addEventListener("click", event => {
  const amount = parseInt(input.value);
  if (amount <= 100) {
    createBoxes(amount);
  }
  input.value = '';
});

function destroyBoxes() {
  boxes.innerHTML = '';
}

destroyButton.addEventListener("click", event => {
  destroyBoxes();
});
