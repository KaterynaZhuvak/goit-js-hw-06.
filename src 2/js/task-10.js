const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const divEl = document.querySelector('#controls');
const inputEl = divEl.firstElementChild;
const divBoxes = document.querySelector('#boxes');


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

createBtn.addEventListener('click', () => {
  const number = inputEl.value;
  createBoxes(number)
});

destroyBtn.addEventListener('click', () =>
  destroyBoxes()
);

function createBoxes(amount) {
  const randomColor = getRandomHexColor();
  const box = document.createElement('div');
  const value = Number(amount) + 2;
  box.style.width = `${value}0px`;
  box.style.height = `${value}0px`;
  box.style.backgroundColor = randomColor;
  divBoxes.insertAdjacentElement("afterbegin", box)
};

function destroyBoxes() {
  divBoxes.innerHTML = '';
};