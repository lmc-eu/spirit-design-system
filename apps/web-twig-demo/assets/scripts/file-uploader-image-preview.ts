// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions, no-unused-vars
import { FileUploader, Modal } from '@lmc-eu/spirit-web/src/js/index.esm';

window.addEventListener('DOMContentLoaded', () => {
  let file;
  const ModalElement = document.getElementById('example_image_preview');
  const ModalInstance = new Modal(ModalElement);
  const Content = ModalElement.querySelector('[data-example-content]');
  const cancelButton = ModalElement.querySelector('[data-element="cancel"]');
  const FileUploaderElement = document.getElementById('example_customImagePreview');
  const FileUploaderInstance = FileUploader.getInstance(FileUploaderElement);

  const isFileImage = (fileEl) => fileEl.type.split('/')[0] === 'image';

  const showModalPreview = (fileEl) => {
    if (isFileImage(fileEl)) {
      const reader = new FileReader();

      reader.readAsDataURL(fileEl);
      reader.onloadend = () => {
        const base64data = reader.result;
        localStorage.setItem('image', base64data);
        Content.innerHTML = `<img src="${base64data}" style="width: 100%; height: auto" alt="${fileEl.name}" />`;
        ModalInstance.show();
      };
    }
  };

  const removeFromQueue = () => {
    FileUploaderInstance.removeFromQueue(FileUploaderInstance.getUpdatedFileName(file.name));
    cleanup();
  };

  const cleanup = () => {
    ModalInstance.hide();
    Content.innerHTML = '';
    file = undefined;
  };

  cancelButton.addEventListener('click', removeFromQueue);

  FileUploaderElement.addEventListener('queuedFile.fileUploader', (event) => {
    file = event.currentFile;
    showModalPreview(file);
  });
});
