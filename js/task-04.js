const value = document.querySelector('#value')
const decrementBtn = document.querySelector('[data-action="decrement"]')
const incrementBtn = document.querySelector('[data-action="increment"]')

let counterValue = 0;
decrementBtn.addEventListener('click', () =>
    value.textContent = counterValue -= 1);

 incrementBtn.addEventListener('click', () =>
    value.textContent = counterValue += 1);   
