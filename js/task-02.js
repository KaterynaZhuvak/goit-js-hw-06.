const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients');
const arr = []

ingredients.map(ingredient => {
  const liEl = document.createElement('li');
  liEl.classList.add('item');
  liEl.textContent = ingredient;
  return arr.push(liEl);
});

ulEl.append(...arr);