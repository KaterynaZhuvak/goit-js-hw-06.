// first part of task.
const liEl = document.querySelectorAll('.item');

const countLiElements = () => {
    let total = 0;
    liEl.forEach((item, index) => total += index)
    return total;
};
console.log(`Number of categories: ${countLiElements()}`);

// second part of task.
const count = (i) => {
    const ulEl = liEl[i].lastElementChild;
    const title = liEl[i].firstElementChild;
    const liEL = ulEl.children;
    console.log(`Category: ${title.textContent}`);
        console.log(`Elements: ${liEL.length}`);
};

count(0);
count(1);
count(2);
