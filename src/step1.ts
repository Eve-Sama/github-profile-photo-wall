import { createValidImage } from "./process";
import { showStep2 } from "./slide";

const image = new Image();
const fileUploaderElm = document.querySelector('#uploader') as HTMLInputElement;

fileUploaderElm.addEventListener('change', () => {
  const reader = new FileReader();
  const files = fileUploaderElm.files;
  if (files.length === 0) {
    return;
  }
  reader.readAsDataURL(files[0]);
  reader.onload = function () {
    image.src = this.result as string;
    image.onload = () => {
      showStep2();
      createValidImage();
    };
  };
});

export { image };
