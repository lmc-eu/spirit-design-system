import { warning } from '@lmc-eu/spirit-common/utilities';
import { FileMetadata } from '../../types/fileUploader';

const getAttachmentInput = (
  file: File,
  name: string,
  onError?: (error: string) => void,
): HTMLInputElement | undefined => {
  const attachmentInputElement = document.createElement('input');
  const dataContainer = new DataTransfer();

  if (file) {
    dataContainer.items?.add(file);
  } else {
    if (onError) {
      onError('File not found');
    } else {
      warning(false, 'File not found');
    }

    return;
  }

  attachmentInputElement.setAttribute('type', 'file');
  attachmentInputElement.setAttribute('name', `${name}[]`);
  attachmentInputElement.setAttribute('hidden', '');

  attachmentInputElement.files = dataContainer.files;

  return attachmentInputElement;
};

const getAttachmentMetaInput = (file: File, name: string, meta: FileMetadata): HTMLInputElement => {
  const attachmentInputElement = document.createElement('input');

  attachmentInputElement.setAttribute('type', 'text');
  attachmentInputElement.setAttribute('name', `${name}_meta`);
  attachmentInputElement.setAttribute('value', JSON.stringify(meta));
  attachmentInputElement.setAttribute('hidden', '');

  return attachmentInputElement;
};

const image2Base64Preview = (file: File, maxWidth: number, callback: (base64Preview: string) => void) => {
  const reader = new FileReader();

  reader.onload = (event) => {
    const image = new Image();
    image.onload = () => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = maxWidth;
      canvas.height = (image.height / image.width) * maxWidth;
      context?.drawImage(image, 0, 0, canvas.width, canvas.height);
      const compressedDataURL = canvas.toDataURL('image/jpeg', 0.8);
      callback(compressedDataURL);
    };

    if (event.target && event.target.result) {
      image.src = event.target.result.toString();
    }
  };

  reader.readAsDataURL(file);
};

const base64ToByteArray = (base64Image: string) => {
  const byteCharacters = atob(base64Image);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);

  return byteArray;
};

export { base64ToByteArray, getAttachmentInput, getAttachmentMetaInput, image2Base64Preview };
