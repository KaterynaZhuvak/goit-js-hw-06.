// first part of task.
const liEl = document.querySelectorAll('.item');
 
console.log(`Number of categories: ${liEl.length}`);

// second part of task.
liEl.forEach((item) => {
    const title = item.firstElementChild;
    const ulEl = item.lastElementChild;
    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${ulEl.children.length}`);
})