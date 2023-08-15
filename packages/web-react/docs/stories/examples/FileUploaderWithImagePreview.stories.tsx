import React, { useState, MouseEvent } from 'react';
import { SpiritFileUploaderAttachmentProps } from '../../../src/types';
import { useFileQueue } from '../../../src/components/FileUploader/useFileQueue';
import FileUploader from '../../../src/components/FileUploader/FileUploader';
import FileUploaderInput from '../../../src/components/FileUploader/FileUploaderInput';
import FileUploaderList from '../../../src/components/FileUploader/FileUploaderList';
import FileUploaderAttachment from '../../../src/components/FileUploader/FileUploaderAttachment';
import { Button, Modal, ModalBody, ModalDialog, ModalFooter } from '../../../src/components';

export default {
  title: 'Examples/Compositions',
};

export const FileUploaderWithModalImagePreview = (args) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [base64File, setBase64File] = useState<string>('');
  const [fileToPreview, setFileToPreview] = useState<File | null>(null);
  const { fileQueue, addToQueue, clearQueue, onDismiss, updateQueue } = useFileQueue();

  const imagePreview = (key: string, file: File) => {
    if (file.type.includes('image')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // FileReader.result contains the file content as a base64 encoded string
        setBase64File(reader.result as string);
      };
      reader.readAsDataURL(file);

      setFileToPreview(file);
      setIsModalOpen(true);

      return;
    }

    return addToQueue(key, file);
  };

  const resetCropImageState = () => {
    setIsModalOpen(false);
    setFileToPreview(null);
    setBase64File('');
  };

  const handleClose = () => {
    resetCropImageState();
  };

  const confirmPreview = () => {
    setIsModalOpen(false);
    addToQueue(fileToPreview?.name || '', fileToPreview as File);
  };

  const onEdit = (event: MouseEvent, file: File) => {
    imagePreview(file.name, file);
  };

  const attachmentComponent = ({ id, ...props }: SpiritFileUploaderAttachmentProps) => (
    <FileUploaderAttachment key={id} id={id} onEdit={onEdit} {...props} />
  );

  return (
    <>
      <FileUploader
        {...args}
        id="fileUploaderExample"
        onDismiss={onDismiss}
        fileQueue={fileQueue}
        addToQueue={imagePreview}
        clearQueue={clearQueue}
        updateQueue={updateQueue}
      >
        <FileUploaderInput
          id="fileUploaderExampleInput"
          name="attachments"
          label="Label"
          linkText="Upload your file(s)"
          labelText="or drag and drop here"
          helperText="Max file size is 10 MB"
          validationText="Validation message"
          /* eslint-disable-next-line no-console */
          onError={(error) => console.error('My error log', error)}
          maxUploadedFiles={1}
          accept=".png,image/jpeg"
        />
        <FileUploaderList
          id="fileUploaderExampleList"
          label="Attachments"
          inputName="attachments"
          attachmentComponent={attachmentComponent}
          hasImagePreview
        />
      </FileUploader>

      <Modal id="ModalExample" isOpen={isModalOpen} onClose={handleClose}>
        <ModalDialog>
          <ModalBody>
            <div className="pt-400 pt-tablet-600">
              <img src={base64File} style={{ width: '100%', height: 'auto' }} alt="fileToPreview" />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={confirmPreview}>
              Confirm
            </Button>
            <Button color="tertiary" onClick={handleClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalDialog>
      </Modal>
    </>
  );
};
