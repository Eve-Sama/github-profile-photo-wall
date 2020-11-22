/**
 * This file is used to convert a image to images contains n lines with 7 columns.
 */

import { image } from './step1';
import { lines } from './step2';

const MaxWidth = 224; // 32px * 7(columns) = 224px
const base64List: string[] = [];

/** Copy image to a canvas with valid size */
function createValidImage(): void {
  const { width: imageWidth, height: imageHeight } = image;
  const canvas = document.createElement('canvas');
  const maxHeight = lines * 32;
  // Calculate the size of the image by 32 times.
  canvas.width = MaxWidth;
  canvas.height = maxHeight;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(image, 0, 0, imageWidth, imageHeight, 0, 0, MaxWidth, maxHeight);
  cutterImage(canvas);
}

function cutterImage(canvas: HTMLCanvasElement): void {
  document.querySelector('#result').innerHTML = ''; // Clear images
  const ctx = canvas.getContext('2d');
  const nums = (canvas.height / 32) * 7;
  Array(nums)
    .fill(undefined)
    .forEach((_, index) => {
      // Current image unit's position which start with 0
      const row = ~~(index / 7);
      const column = index % 7;
      createImgaeUnit(row, column, ctx);
    });
}

/**
 * Create images one by one
 */
function createImgaeUnit(row: number, column: number, ctx: CanvasRenderingContext2D): void {
  const x = (column % 7) * 32;
  const y = row * 32;
  const imageData = ctx.getImageData(x, y, 32, 32);
  const base64 = getImageDataBase64(imageData);
  const image = document.createElement('img');
  image.src = base64;
  base64List.push(base64);
  const resultSection = document.querySelector('#result');
  resultSection.appendChild(image);
}

/**
 * Convert ImageData to base64
 * @param data ImageData, which created by ctx
 */
function getImageDataBase64(data: ImageData): string {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = 32;
  canvas.height = 32;
  ctx.putImageData(data, 0, 0);
  return canvas.toDataURL();
}

export { createValidImage };
