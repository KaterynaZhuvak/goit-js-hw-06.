function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const color = document.querySelector('.color');
const changeButton = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');

changeButton.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  color.textContent = randomColor;
})