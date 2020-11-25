import { base64List, createValidImage } from './process';
import { base64ToBlob } from './utils';
import * as JSZip from 'jszip';
import { saveAs } from 'file-saver';

const minusBtn = document.querySelector('#minus');
const plusBtn = document.querySelector('#plus');
const linesValue = document.querySelector('#lines');
const download = document.querySelector('#download');

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

download.addEventListener('click', () => {
  var zip = new JSZip();
  base64List.forEach((value, index) => zip.file(`image-${index + 1}.png`, base64ToBlob(value), { base64: true }));
  zip.generateAsync({ type: 'blob' }).then(content => saveAs(content, 'image-cutter-result.zip'));
});

export { lines };
