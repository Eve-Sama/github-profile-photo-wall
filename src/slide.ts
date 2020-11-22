const step1Section = document.querySelector('#step-1') as HTMLInputElement;
const step2Section = document.querySelector('#step-2') as HTMLInputElement;

function showStep1(): void {
  step1Section.style.transform = 'translateX(0%)';
  step2Section.style.transform = 'translateX(0%)';
}

function showStep2(): void {
  step1Section.style.transform = 'translateX(-100%)';
  step2Section.style.transform = 'translateX(-100%)';
}

export { showStep1, showStep2 };
