const inputEl = document.getElementById('name-input');
const textEl = document.getElementById('name-output');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  textEl.textContent = event.currentTarget.value.trim() || 'незнакомец';
};
  