const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


function render() {
  const ulEl = document.querySelector('.gallery');
  const animals = images.map(item => `<li>
  <img width='300' height='200' src='${item.url}' alt='${item.alt}'/>
  </li>`).join('');
  ulEl.style.listStyle = 'none';
  ulEl.style.display = 'flex';
  ulEl.style.gap = '20px';
  ulEl.insertAdjacentHTML('afterbegin', animals);
}

render()



