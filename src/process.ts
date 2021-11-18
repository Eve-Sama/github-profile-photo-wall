/**
 * This file is used to convert a image to images contains x lines with y columns.
 */

import { columns, lines } from './step2';

const unitSize = 32; // 每个小单元的图片大小是32px * 32px
let base64List: string[] = [];

let globalImage: HTMLImageElement;
/** Copy image to a canvas with valid size */
function createValidImage(image?: HTMLImageElement): void {
  globalImage = image || globalImage;
  const { width: imageWidth, height: imageHeight } = globalImage;
  const canvas = document.createElement('canvas');
  const maxHeight = lines * unitSize;
  // Calculate the size of the image by 32 times.
  const MaxWidth = unitSize * columns;
  canvas.width = MaxWidth;
  canvas.height = maxHeight;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(globalImage, 0, 0, imageWidth, imageHeight, 0, 0, MaxWidth, maxHeight);
  cutterImage(canvas);
}

function cutterImage(canvas: HTMLCanvasElement): void {
  document.querySelector('#result').innerHTML = ''; // Clear images
  const ctx = canvas.getContext('2d');
  const nums = lines * columns;
  base64List = [];
  Array(nums)
    .fill(undefined)
    .forEach((_, index) => {
      // Current image unit's position which start with 0
      const line = Math.floor(index / columns);
      const column = index % columns;
      createImgaeUnit(line, column, ctx);
      // 是最后一列的话, 需要加入换行标签
      if (column + 1 === columns) {
        const br = document.createElement('br');
        const resultSectionElm = document.querySelector('#result');
        resultSectionElm.appendChild(br);
      }
    });
}

/**
 * Create images one by one
 */
function createImgaeUnit(line: number, column: number, ctx: CanvasRenderingContext2D): void {
  const x = (column % columns) * unitSize;
  const y = line * unitSize;
  const imageData = ctx.getImageData(x, y, unitSize, unitSize);
  const base64 = getImageDataBase64(imageData);
  const image = document.createElement('img');
  image.src = base64;
  base64List.push(base64);
  const resultSectionElm = document.querySelector('#result');
  resultSectionElm.appendChild(image);
}

/**
 * Convert ImageData to base64
 * @param data ImageData, which created by ctx
 */
function getImageDataBase64(data: ImageData): string {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = unitSize;
  canvas.height = unitSize;
  ctx.putImageData(data, 0, 0);
  return canvas.toDataURL();
}

// function getLinesAndColumns(): { lines: number; columns: number } {
//   const linesValueElm = document.querySelector('#lines');
//   const columnsValueElm = document.querySelector('#columns');
//   const lines = parseInt(linesValueElm.innerHTML);
//   const columns = parseInt(columnsValueElm.innerHTML);
//   return { lines, columns };
// }

export { createValidImage, base64List };
