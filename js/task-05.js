const inputEl = document.getElementById('name-input');
const textEl = document.getElementById('name-output');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value.length >= 1) {
    textEl.textContent = event.currentTarget.value;
    console.log(event.currentTarget.value);
  } else {
  textEl.textContent = 'незнакомец';
  }
  
  return textEl.textContent
};
  