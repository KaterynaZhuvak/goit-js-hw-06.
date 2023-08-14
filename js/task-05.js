const inputEl = document.querySelector('#name-input');
const nameChanging = document.querySelector('#name-output');

inputEl.addEventListener('input', (event) => {
    inputEl.value === '' ?
        nameChanging.textContent = 'Anonymous' :
        nameChanging.textContent = event.currentTarget.value.trim();
});