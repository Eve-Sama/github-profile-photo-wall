import { showStep2 } from "./slide";

const image = new Image();
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
      // createValidImage();
      // cutterImage();
      showStep2();
    };
  };
});

export { image };
