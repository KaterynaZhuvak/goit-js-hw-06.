const input = document.querySelector('#validation-input');
const inputLength = input.getAttribute('data-length');

input.addEventListener('blur', () => {
    input.textContent === null ?
        input.style.border = '2px solid #bdbdbd' :
    input.value.length === Number(inputLength) ?
        input.style.borderColor = '#4caf50' :
            input.style.borderColor = '#f44336'
        
});
