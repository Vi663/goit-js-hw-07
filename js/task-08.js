const mainContainer = document.getElementById('controls');
const divContainer = document.getElementById('boxes');
const inputEl = document.querySelector("[type='number']");
const renderButton = document.querySelector("[data-action='render']");
const destroyButton = document.querySelector("[data-action='destroy']");

// destroyButton.addEventListener('click', onButtonDestroy);
let quantity = 5;
// const amount = inputEl.currentTarget.value;
function onInputChange(event) {
  const amount = event.currentTarget.value;
  console.log(`Amount is ${amount}`);
  quantity === amount;
};

inputEl.addEventListener('input', onInputChange);
console.log(quantity);
function createBoxes(amount){
  
  renderButton.addEventListener('click', function () {
    for (let i; i === quantity; i += 1) {
      const newEl = document.createElement('div');
      newEl.classList.add('container');
      newEl.style.backgroundColor = red;
      newEl.width = 30;
      mainContainer.append(newEl);
    }
  
  });
};





// function createBoxes(amount) {
//   onButtonRender(event) {

//   };
//   onButtonDestroy(event) {
    
//   };
  
// };

