import { createValidImage } from './process';

const minusBtn = document.querySelector('#minus');
const plusBtn = document.querySelector('#plus');
const linesValue = document.querySelector('#lines');
let lines = 7;

minusBtn.addEventListener('click', () => {
  if (lines === 1) {
    alert('At least one line is required');
  } else {
    linesValue.innerHTML = `${--lines}`;
    createValidImage();
  }
});

plusBtn.addEventListener('click', () => {
  linesValue.innerHTML = `${++lines}`;
  createValidImage();
});

export { lines };
