import './index.scss';

const MaxWidth = 224;

const image = new Image();
image.onload = () => {
  setBeforeImage();
  createValidImage();
  cutterImage();
};

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
  const canvas = document.querySelector('#valid-canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d');
  const nums = (canvas.height / 32) * 7;
  Array(nums)
    .fill(undefined)
    .forEach((_, index) => {
      // Start with 0
      const row = ~~(index / 7);
      const column = index % 7;
      createImgaeUnit(row, column, ctx);
    });
}

/**
 * Create images one by one
 * @param index The index of image
 * @param ctx Canvas's context
 */
function createImgaeUnit(row: number, column: number, ctx: CanvasRenderingContext2D): void {
  const x = (column % 7) * 32;
  const y = row * 32;
  console.log(`row ${row}, column = ${column} x = ${x}, y = ${y}`);
  const imageData = ctx.getImageData(x, y, 32, 32);
  const base64 = getImageDataBase64(imageData);
  const image = document.createElement('img');
  image.src = base64;
  const rightDom = document.querySelector('.after');
  rightDom.appendChild(image);
}

/**
 * Convert ImageData to base64
 * @param data ImageData, which created by ctx
 */
function getImageDataBase64(data: ImageData): string {
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext('2d');
  ctx.putImageData(data, 0, 0);
  return canvas.toDataURL();
}
