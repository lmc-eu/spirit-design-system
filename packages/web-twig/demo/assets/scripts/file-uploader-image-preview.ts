import { FileUploader, Modal } from '@lmc-eu/spirit-web/js';

window.addEventListener('DOMContentLoaded', () => {
  let file: { name: unknown; type?: string } | undefined;
  const ModalElement = document.getElementById('example_image_preview');
  const ModalInstance = new Modal(ModalElement);
  const Content = ModalElement.querySelector('[data-example-content]');
  const cancelButton = ModalElement.querySelector('[data-element="cancel"]');
  const FileUploaderElement = document.getElementById('example_customImagePreview');
  const FileUploaderInstance = FileUploader.getInstance(FileUploaderElement);

  const isFileImage = (fileEl: { type: string }) => fileEl.type.split('/')[0] === 'image';

  const showModalPreview = (fileEl: { type: string; name: string }) => {
    if (isFileImage(fileEl)) {
      const reader = new FileReader();

      // @ts-expect-error -- TS2345: Argument of type '{ type: string; name: string; }' is not assignable to parameter of type 'Blob'.
      reader.readAsDataURL(fileEl);
      reader.onloadend = () => {
        const base64data = reader.result;
        // @ts-expect-error -- TS2345: Argument of type 'string | ArrayBuffer' is not assignable to parameter of type 'string'.
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
    ModalInstance.hide(null);
    Content.innerHTML = '';
    file = undefined;
  };

  cancelButton.addEventListener('click', removeFromQueue);

  FileUploaderElement.addEventListener('queuedFile.fileUploader', (event) => {
    // @ts-expect-error -- TS2339: Property 'currentFile' does not exist on type 'CustomEvent<any>'.
    file = event.currentFile;
    // @ts-expect-error -- TS2345: Argument of type '{ name: unknown; type?: string; }' is not assignable to parameter of type '{ type: string; name: string; }'.
    showModalPreview(file);
  });
});
