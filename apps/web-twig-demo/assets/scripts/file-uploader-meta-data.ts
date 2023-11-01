// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions, no-unused-vars
import { FileUploader, Modal } from '@lmc-eu/spirit-web/src/js/index.esm';

window.addEventListener('DOMContentLoaded', () => {
  let file;
  const ModalElement = document.getElementById('example_modal_data');
  const ModalInstance = new Modal(ModalElement);
  const Content = ModalElement.querySelector('[data-example-content]');
  const CancelButton = ModalElement.querySelector('[data-element="cancel"]');
  const FileUploaderElement = document.getElementById('example_customMetaData');
  const FileUploaderInstance = FileUploader.getInstance(FileUploaderElement);
  let toggleMetaData = false; // allow toggling meta data between two different values when clicking on edit button

  const isFileImage = (file) => file.type.split('/')[0] === 'image';

  // callbacks

  const updateQueueCallback = (key, file, meta) => {
    const attachmentElement = document.querySelector('#FileUploaderListWithMetaData');
    const fileName = FileUploaderInstance.getUpdatedFileName(file.name);
    const metaInput = attachmentElement?.querySelector(`input[name="attachments_${fileName}_meta"]`);

    // If we have metadata, we check if the input exists and if so we update its value else we create a new one
    if (meta) {
      if (metaInput) {
        metaInput.value = JSON.stringify(meta);
      } else {
        const attachmentMetaInputElement = document.createElement('input');
        attachmentMetaInputElement.setAttribute('type', 'hidden');
        attachmentMetaInputElement.setAttribute('name', `attachments_${fileName}_meta`);
        attachmentMetaInputElement.setAttribute('value', JSON.stringify(meta));
        attachmentElement?.appendChild(attachmentMetaInputElement);
      }
    }

    // If we do not have metadata, we remove the input
    if (!meta) {
      metaInput && metaInput.remove();
    }
  };

  const callbackOnDismiss = (key) => {
    document.querySelector(`input[name="attachments_${key}_meta"]`)?.remove();
  };

  // custom functions

  const customAddToQueue = (file, meta) => {
    if (isFileImage(file)) {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const base64data = reader.result;
        localStorage.setItem('image', base64data);
        Content.innerHTML = `<img src="${base64data}" style="width: 100%; height: auto" alt="${file.name}" />`;
        ModalInstance.show();
      };
    }

    FileUploaderInstance.updateQueue(
      FileUploaderInstance.getUpdatedFileName(file.name),
      file,
      meta,
      updateQueueCallback,
    );
  };

  const customEdit = (event) => {
    const key = event.target.closest('li').id;
    const newMeta = toggleMetaData
      ? { x: 30, y: 30, cropWidth: 150, cropHeight: 150, originalWidth: 560, originalHeight: 330 }
      : { x: 22, y: 0, cropWidth: 110, cropHeight: 100, originalWidth: 560, originalHeight: 330 };
    toggleMetaData = !toggleMetaData;
    const file = FileUploaderInstance.getFileFromQueue(key).file;
    FileUploaderInstance.updateQueue(key, file, newMeta, updateQueueCallback);
  };
  moduleFunctions.customEdit = customEdit;

  // modal functions

  const removeFromQueue = () => {
    FileUploaderInstance.removeFromQueue(FileUploaderInstance.getUpdatedFileName(file.name));
    cleanup();
  };

  const cleanup = () => {
    ModalInstance.hide();
    Content.innerHTML = '';
    file = undefined;
  };

  CancelButton.addEventListener('click', removeFromQueue);

  FileUploaderElement.addEventListener('queuedFile.fileUploader', (event) => {
    file = event.currentFile;

    customAddToQueue(file);
  });

  FileUploaderElement.addEventListener('unqueuedFile.fileUploader', (event) => {
    callbackOnDismiss(event.currentFile);
  });

  FileUploaderElement.addEventListener('editFile.fileUploader', (event) => {
    customEdit(event.currentFile);
  });
});
