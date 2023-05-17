import { ChangeEvent, DragEvent, useEffect, useState } from 'react';
import { DragAndDropHandlingProps, FileQueueMapType, FileUploaderQueueLimitBehaviorType } from '../../types';
import { useDragAndDrop } from '../../hooks';
import { useFileUploaderContext } from './FileUploaderContext';

export interface UseFileUploaderInputProps {
  accept?: string;
  queueLimitBehavior?: FileUploaderQueueLimitBehaviorType;
  isMultiple?: boolean;
  maxFileSize: number;
  maxUploadedFiles: number;
  onError?: (error: string | Error) => void;
}

export interface UseFileUploaderInputReturn extends DragAndDropHandlingProps<HTMLDivElement> {
  isDragging: boolean;
  isDropZoneHidden: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const useFileUploaderInput = (props: UseFileUploaderInputProps): UseFileUploaderInputReturn => {
  const { maxFileSize, maxUploadedFiles, queueLimitBehavior, isMultiple, onError, accept } = props;

  const [dropZoneHidden, setDropZoneHidden] = useState(false);

  const { fileQueue, addToQueue, clearQueue, errorMessages } = useFileUploaderContext();

  const getUpdatedFileName = (name: string): string => `file__${name.replace(/\./g, '_').replace(/\s/g, '_')}`;

  const checkAllowedFileSize = (file: File) => {
    if (file.size > maxFileSize) {
      throw new Error(`${errorMessages?.errorMaxFileSize} "${file.name}"`);
    }
  };

  const checkFileDuplicity = (file: File) => {
    if (isMultiple && fileQueue.has(getUpdatedFileName(file.name))) {
      throw new Error(`${errorMessages?.errorFileDuplicity} "${file.name}"`);
    }
  };

  const checkQueueSize = () => {
    if (fileQueue.size >= maxUploadedFiles) {
      throw new Error(errorMessages?.errorMaxUploadedFiles);
    }
  };

  const checkAllowedFileType = (file: File) => {
    const fileExtension = file.name.split('.').pop()?.toLowerCase() as string;
    const fileType = file.type;
    const shouldValidate = accept && !(accept === '' || accept === '*' || accept === '*/*');
    let isTypeSupported;

    if (!shouldValidate) {
      isTypeSupported = true;
    } else {
      const acceptArray = accept.replace(/ /g, '').split(',');
      const acceptExtensions = acceptArray.filter((exp) => exp.match(/\./g));
      const acceptTypes = acceptArray.filter((exp) => exp.match(/\//g));

      acceptExtensions.forEach((acceptExtension) => {
        const expression = acceptExtension.replace('.', '').replace('*', '');

        if (fileExtension.match(expression)) {
          isTypeSupported = true;
        }
      });

      acceptTypes.forEach((acceptType) => {
        const expression = acceptType.replace('*', '');

        if (fileType.match(expression)) {
          isTypeSupported = true;
        }
      });
    }

    if (!isTypeSupported) {
      throw new Error(`${errorMessages?.errorFileNotSupported} "${file.name}"`);
    }
  };

  const updateDropZoneVisibility = (queue: FileQueueMapType) => {
    console.log('queueLimitBehavior', queueLimitBehavior);
    if (!queueLimitBehavior) {
      return;
    }

    setDropZoneHidden(queue.size >= maxUploadedFiles);
  };

  const clearQueueHandler = () => {
    if (!isMultiple) {
      clearQueue();
    }
  };

  const fileProcessHandler = (file: File) => {
    try {
      clearQueueHandler();
      checkFileDuplicity(file);
      checkAllowedFileSize(file);
      checkAllowedFileType(file);
      checkQueueSize();
      addToQueue(getUpdatedFileName(file.name), file);
    } catch (error) {
      if (onError) {
        onError(error);
      } else {
        // We want to show error message in console
        /* eslint-disable-next-line no-console */
        console.warn(error);
      }
    }
  };

  const onDropHandler = (event: DragEvent<HTMLDivElement>) => {
    const transferItems = Array.from(event.dataTransfer.items);
    const transferFiles = Array.from(event.dataTransfer.files);

    let counter = 0;
    let overLimit;
    counter += fileQueue.size;

    if (event.dataTransfer.items) {
      transferItems.forEach((item) => {
        if (item.kind === 'file') {
          const file = item.getAsFile();
          if (file && counter < maxUploadedFiles) {
            fileProcessHandler(file);
            counter += 1;
          } else {
            overLimit = true;
          }
        }
      });
    } else {
      transferFiles.forEach((file) => {
        if (counter < maxUploadedFiles) {
          fileProcessHandler(file);
          counter += 1;
        } else {
          overLimit = true;
        }
      });
    }

    if (overLimit && onError && errorMessages?.errorMaxUploadedFiles) {
      onError(new Error(errorMessages?.errorMaxUploadedFiles));
    }
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const filesArray = Array.prototype.slice.call(files);

    let counter = 0;
    let overLimit;
    counter += fileQueue.size;

    filesArray.forEach((file: File) => {
      if (counter < maxUploadedFiles) {
        fileProcessHandler(file);
        counter += 1;
      } else {
        overLimit = true;
      }
    });

    if (overLimit && onError && errorMessages?.errorMaxUploadedFiles) {
      onError(new Error(errorMessages?.errorMaxUploadedFiles));
    }

    event.target.blur();
  };

  useEffect(() => {
    updateDropZoneVisibility(fileQueue);
    // We only want a dependency for fileQueue
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fileQueue]);

  const dragAndDropProps = useDragAndDrop({
    onDrop: onDropHandler,
  });

  return {
    isDropZoneHidden: dropZoneHidden,
    onChange: onChangeHandler,
    ...dragAndDropProps,
  };
};
