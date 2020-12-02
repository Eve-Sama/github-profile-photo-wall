import { base64List, createValidImage } from './process';
import { base64ToBlob } from './utils';
import * as JSZip from 'jszip';
import { saveAs } from 'file-saver';

const minusBtnElm = document.querySelector('#minus');
const plusBtnElm = document.querySelector('#plus');
const linesValueElm = document.querySelector('#lines');
const downloadElm = document.querySelector('#download');

let lines = 7;

minusBtnElm.addEventListener('click', () => {
  if (lines === 1) {
    alert('At least one line is required');
  } else {
    linesValueElm.innerHTML = `${--lines}`;
    createValidImage();
  }
});

plusBtnElm.addEventListener('click', () => {
  linesValueElm.innerHTML = `${++lines}`;
  createValidImage();
});

downloadElm.addEventListener('click', () => {
  var zip = new JSZip();
  base64List.forEach((value, index) => zip.file(`image-${index + 1}.png`, base64ToBlob(value), { base64: true }));
  zip.generateAsync({ type: 'blob' }).then(content => saveAs(content, 'image-cutter-result.zip'));
});


export { lines };
