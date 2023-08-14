const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const inputEl = document.querySelector("#controls input");
const divBoxes = document.querySelector("#boxes");
const minValue = inputEl.getAttribute("min");
const maxValue = inputEl.getAttribute("max");
const step = inputEl.getAttribute("step");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

createBtn.addEventListener("click", () => {
  if (inputEl.value >= minValue && inputEl.value <= maxValue) {
    for (let i = Number(inputEl.value); i >= minValue && i <= maxValue; i += step) {
    const randomColor = getRandomHexColor();
    const box = document.createElement("div");
    box.style.width = `${i * 10 + 20}px`;
    box.style.height = `${i * 10 + 20}px`;
    box.style.backgroundColor = randomColor;
    divBoxes.insertAdjacentElement("afterbegin", box);
  }
  } else (
    alert('Please, write down number from 1 to 100!')
  )
  
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
  inputEl.value = null;
});

function destroyBoxes() {
  divBoxes.innerHTML = "";
}
