import { base64List, createValidImage } from './process';
import { base64ToBlob } from './utils';
import * as JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { showStep1 } from './slide';


let lines = 8;
let columns = 8;

// #region 为行列增减添加事件
const lineMinusBtnElm = document.querySelector('#line-minus');
const linePlusBtnElm = document.querySelector('#line-plus');
const columnMinusBtnElm = document.querySelector('#column-minus');
const columnPlusBtnElm = document.querySelector('#column-plus');
const linesValueElm = document.querySelector('#lines');
const columnsValueElm = document.querySelector('#columns');
lineMinusBtnElm.addEventListener('click', () => {
  if (lines === 1) {
    alert('At least one line is required');
  } else {
    linesValueElm.innerHTML = `${--lines}`;
    createValidImage();
  }
});
columnMinusBtnElm.addEventListener('click', () => {
  if (columns === 1) {
    alert('At least one line is required');
  } else {
    columnsValueElm.innerHTML = `${--columns}`;
    createValidImage();
  }
});

linePlusBtnElm.addEventListener('click', () => {
  linesValueElm.innerHTML = `${++lines}`;
  createValidImage();
});
columnPlusBtnElm.addEventListener('click', () => {
  columnsValueElm.innerHTML = `${++columns}`;
  createValidImage();
});
// #endregion

const downloadElm = document.querySelector('#download');
const backElm = document.querySelector('#back');
downloadElm.addEventListener('click', () => {
  var zip = new JSZip();
  base64List.forEach((value, index) => zip.file(`image-${index + 1}.png`, base64ToBlob(value), { base64: true }));
  zip.generateAsync({ type: 'blob' }).then(content => saveAs(content, 'image-cutter-result.zip'));
});

backElm.addEventListener('click', () => {
  showStep1();
});

export { lines, columns };
