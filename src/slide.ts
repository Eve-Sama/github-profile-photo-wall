const step1SectionElm = document.querySelector('#step-1') as HTMLInputElement;
const step2SectionElm = document.querySelector('#step-2') as HTMLInputElement;

function showStep2(): void {
  step1SectionElm.style.transform = 'translateX(-100%)';
  step2SectionElm.style.transform = 'translateX(-100%)';
}

export { showStep2 };
