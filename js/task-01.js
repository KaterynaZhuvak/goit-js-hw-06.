// first part of task.
const liEl = document.querySelectorAll('.item');

const countLiElements = () => {
    let total = 0;
    liEl.forEach((item, index) => total += index)
    return total;
};
console.log(`Number of categories: ${countLiElements()}`);


// second part of task.
liEl.forEach((item) => {
    const title = item.firstElementChild;
    const ulEl = item.lastElementChild;
    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${ulEl.children.length}`);
})