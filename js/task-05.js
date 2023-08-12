const inputEl = document.querySelector('#name-input');
const nameChanging = document.querySelector('#name-output');

inputEl.addEventListener('input', (event) =>
    inputEl.textContent === null ?
        nameChanging.textContent = 'Anonymous' :
        nameChanging.textContent = event.currentTarget.value);


        console.log(nameChanging)