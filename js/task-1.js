const categories = document.querySelectorAll(`ul#categories .item`);

console.log(`Number of categories: ${categories.length}`);

const allCategories = categories.forEach((el) => {
console.log(`Category : ${el.firstElementChild.textContent}`);
console.log(`Elements : ${el.lastElementChild.children.length}`);
});