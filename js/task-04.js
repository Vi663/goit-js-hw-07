const encreaseBtn = document.querySelector("[data-action='increment']");
const decreaseBtn = document.querySelector("[data-action='decrement']");

const counterValue = document.getElementById('value');
let initialValue = 0;

encreaseBtn.addEventListener('click', function(){
  initialValue += 1;
  counterValue.innerHTML = initialValue;
});
decreaseBtn.addEventListener('click', function(){
  initialValue -= 1;
  counterValue.innerHTML = initialValue;
});

