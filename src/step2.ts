const minusBtn = document.querySelector('#minus');
const plusBtn = document.querySelector('#plus');
const linesValue = document.querySelector('#lines');
let lines = 7;

minusBtn.addEventListener('click', () => {
  console.log('minusBtn');
  if(lines === 1) {
    alert('At least one line is required');
  }else {
    linesValue.innerHTML = `${--lines}`;
  }
});

plusBtn.addEventListener('click', () => {
  console.log('plusBtn');
  linesValue.innerHTML = `${++lines}`;
});
