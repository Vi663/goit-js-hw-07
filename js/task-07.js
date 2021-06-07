const inputEl = document.getElementById('font-size-control');
const textEl = document.getElementById('text');
inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  const fontSize = event.currentTarget.value;
  textEl.style.fontSize = `${fontSize}px`;
  console.log(textEl.style.fontSize);
};