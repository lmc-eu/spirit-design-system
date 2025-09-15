import { FileUploader, Modal } from '@lmc-eu/spirit-web/js';

window.addEventListener('DOMContentLoaded', () => {
  let file: { name: unknown } | undefined;
  const ModalElement = document.getElementById('example_modal_data');
  const ModalInstance = new Modal(ModalElement);
  const Content = ModalElement.querySelector('[data-example-content]');
  const CancelButton = ModalElement.querySelector('[data-element="cancel"]');
  const FileUploaderElement = document.getElementById('example_customMetaData');
  const FileUploaderInstance = FileUploader.getInstance(FileUploaderElement);
  let toggleMetaData = false; // allow toggling meta data between two different values when clicking on edit button

  const isFileImage = (file: { type: string }) => file.type.split('/')[0] === 'image';

  // callbacks

  const updateQueueCallback = (key: unknown, file: { name: unknown }, meta: unknown) => {
    const attachmentElement = document.querySelector('#FileUploaderListWithMetaData');
    const fileName = FileUploaderInstance.getUpdatedFileName(file.name);
    const metaInput = attachmentElement?.querySelector(`input[name="attachments_${fileName}_meta"]`);

    // If we have metadata, we check if the input exists and if so we update its value else we create a new one
    if (meta) {
      if (metaInput) {
        (metaInput as HTMLInputElement).value = JSON.stringify(meta);
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

  const callbackOnDismiss = (key: unknown) => {
    document.querySelector(`input[name="attachments_${key}_meta"]`)?.remove();
  };

  // custom functions

  const customAddToQueue = (file: { name: unknown } | Blob | undefined, meta: undefined) => {
    // @ts-expect-error -- TS2345: Argument of type 'Blob | { name: unknown; }' is not assignable to parameter of type '{ type: string; }'.
    if (isFileImage(file)) {
      const reader = new FileReader();

      // @ts-expect-error -- TS2345: Argument of type 'Blob | { name: unknown; }' is not assignable to parameter of type 'Blob'.
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const base64data = reader.result;
        // @ts-expect-error -- TS2345: Argument of type 'string | ArrayBuffer' is not assignable to parameter of type 'string'.
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

  const customEdit = (event: CustomEvent) => {
    // @ts-expect-error -- TS2339: Property 'closest' does not exist on type 'EventTarget'.
    const key = event.target.closest('li').id;
    const newMeta = toggleMetaData
      ? { x: 30, y: 30, cropWidth: 150, cropHeight: 150, originalWidth: 560, originalHeight: 330 }
      : { x: 22, y: 0, cropWidth: 110, cropHeight: 100, originalWidth: 560, originalHeight: 330 };
    toggleMetaData = !toggleMetaData;
    const file = FileUploaderInstance.getFileFromQueue(key).file;
    FileUploaderInstance.updateQueue(key, file, newMeta, updateQueueCallback);
  };

  // modal functions

  const removeFromQueue = () => {
    FileUploaderInstance.removeFromQueue(FileUploaderInstance.getUpdatedFileName(file.name));
    cleanup();
  };

  const cleanup = () => {
    ModalInstance.hide(null);
    Content.innerHTML = '';
    file = undefined;
  };

  CancelButton.addEventListener('click', removeFromQueue);

  FileUploaderElement.addEventListener('queuedFile.fileUploader', (event: CustomEvent) => {
    // @ts-expect-error - TS2339: Property 'currentFile' does not exist on type 'CustomEvent'.
    file = event.currentFile;

    customAddToQueue(file, undefined);
  });

  FileUploaderElement.addEventListener('unqueuedFile.fileUploader', (event: CustomEvent) => {
    // @ts-expect-error - TS2339: Property 'currentFile' does not exist on type 'CustomEvent'.
    callbackOnDismiss(event.currentFile);
  });

  FileUploaderElement.addEventListener('editFile.fileUploader', (event: CustomEvent) => {
    // @ts-expect-error - TS2339: Property 'currentFile' does not exist on type 'CustomEvent'.
    customEdit(event.currentFile);
  });
});
