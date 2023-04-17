const getAttachmentInput = (file: File, name: string, onError?: (error: string) => void) => {
  const attachmentInputElement = document.createElement('input');
  const dataContainer = new DataTransfer();

  if (file) {
    dataContainer.items?.add(file);
  } else {
    if (onError) {
      onError('File not found');
    } else {
      // We want to print an error in the console
      // eslint-disable-next-line no-console
      console.warn('File not found');
    }

    return;
  }

  attachmentInputElement.setAttribute('type', 'file');
  attachmentInputElement.setAttribute('name', `${name}[]`);
  attachmentInputElement.setAttribute('hidden', '');

  attachmentInputElement.files = dataContainer.files;

  return attachmentInputElement;
};

export { getAttachmentInput };
