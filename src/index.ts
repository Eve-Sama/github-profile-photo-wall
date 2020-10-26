import './index.scss';

const MaxWidth = 224;

const image = new Image();
image.src = 'https://file.qingflow.com/uploads/file/0a3f4ded-b856-4685-9c35-48fbff5439d3.png';
image.onload = () => {
  setBeforeImage();
  createValidImage(image);
};

function setBeforeImage(): void {
  const dom = document.querySelector('#before-image') as HTMLImageElement;
  dom.src = image.src;
}

/** Copy image to a canvas with valid size */
function createValidImage(image: HTMLImageElement): void {
  const { width: imageWidth, height: imageHeight } = image;
  const canvas = document.querySelector('#valid-canvas') as HTMLCanvasElement;
  // Calculate the size of the image by 32 times. idk how to calculate it, my girlfriend told me that...
  const maxHeight = imageHeight % 32 === 0 ? imageHeight : 32 * (~~(imageHeight / 32) + 1);
  canvas.width = MaxWidth;
  canvas.height = maxHeight;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(image, 0, 0, imageWidth, imageHeight, 0, 0, MaxWidth, maxHeight);
}
