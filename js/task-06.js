
const inputEl = document.getElementById("validation-input");
const inputLength = Number(inputEl.getAttribute('data-length'));
inputEl.addEventListener('blur', onInnputBlur);

function onInnputBlur(event) {
  if (event.target.value.length === inputLength) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
  console.log(event.target.value.length);
  console.log(typeof inputEl);
};
console.log(inputLength);

