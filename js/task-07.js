const inputEl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const changeSize = () => {
    const fontSize = inputEl.value;
    return text.style.fontSize = `${fontSize}px`;
};

changeSize();

inputEl.addEventListener('input', changeSize);

