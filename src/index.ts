import './index.scss';

const MaxWidth = 224;
const base64List: string[] = [];
const image = new Image();
const container = document.querySelector('#container') as HTMLInputElement;
const fileUploader = document.querySelector('#uploader') as HTMLInputElement;

fileUploader.addEventListener('change', () => {
  const reader = new FileReader();
  const files = fileUploader.files;
  if (files.length === 0) {
    return;
  }
  reader.readAsDataURL(files[0]);
  reader.onload = function () {
    image.src = this.result as string;
    image.onload = () => {
      setBeforeImage();
      createValidImage();
      cutterImage();
    };
  };
});

function setBeforeImage(): void {
  const dom = document.querySelector('#before-image') as HTMLImageElement;
  dom.src = image.src;
}

/** Copy image to a canvas with valid size */
function createValidImage(): void {
  const { width: imageWidth, height: imageHeight } = image;
  const canvas = document.querySelector('#valid-canvas') as HTMLCanvasElement;
  // Calculate the size of the image by 32 times. idk how to calculate it, my girlfriend told me that...
  const maxHeight = imageHeight % 32 === 0 ? imageHeight : 32 * (~~(imageHeight / 32) + 1);
  canvas.width = MaxWidth;
  canvas.height = maxHeight;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(image, 0, 0, imageWidth, imageHeight, 0, 0, MaxWidth, maxHeight);
}

function cutterImage(): void {
  document.querySelector('.after').innerHTML = ''; // Clear images
  const canvas = document.querySelector('#valid-canvas') as HTMLCanvasElement;
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
  container.style.display = 'flex';
}

/**
 * Create images one by one
 * @param index The index of image
 * @param ctx Canvas's context
 */
function createImgaeUnit(row: number, column: number, ctx: CanvasRenderingContext2D): void {
  const x = (column % 7) * 32;
  const y = row * 32;
  const imageData = ctx.getImageData(x, y, 32, 32);
  const base64 = getImageDataBase64(imageData);
  const image = document.createElement('img');
  image.src = base64;
  base64List.push(base64);
  const rightSection = document.querySelector('.after');
  rightSection.appendChild(image);
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
