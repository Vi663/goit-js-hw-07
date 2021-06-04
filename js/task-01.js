const itemEl = document.querySelectorAll(".item");
const mainList = document.getElementById('categories');
const cathegoriesQuantity = itemEl.length;
console.log(`There are ${cathegoriesQuantity} cathegories in this list`);

const ulEl = mainList.querySelectorAll('ul');
const array = [...ulEl];

array.forEach(function (el) {
  const heading = el.previousElementSibling.textContent;
  const elQuantity = el.children.length;
  console.log(`categorie: ${heading} has ${elQuantity} elements`);

});
  
  // const amountOfCategories = ulEl.length;
  // console.log(amountOfCategories);

