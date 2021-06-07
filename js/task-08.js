const mainContainer = document.getElementById('controls');
const inputEl = document.querySelector("[type='number']");
const renderButton = document.querySelector("[data-action='render']");
const destroyButton = document.querySelector("[data-action='destroy']");

// renderButton.addEventListener('click', onButtonRender);
// destroyButton.addEventListener('click', onButtonDestroy);

inputEl.addEventListener('input', onInputChange);
function onInputChange(event) {
  let amount = event.target.value;
  return amount;
};
console.log(mainContainer.input);
console.log(`Amount is ${amount}`);

// function createBoxes(amount) {
//   onButtonRender(event) {

//   };
//   onButtonDestroy(event) {
    
//   };
  
// };

