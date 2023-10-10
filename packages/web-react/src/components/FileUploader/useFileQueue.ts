import { useState } from 'react';
import { FileMetadata, FileQueueValueType, FileUploaderHandlingProps } from '../../types';

export interface FileQueueReturn extends FileUploaderHandlingProps {}

export const useFileQueue = (): FileQueueReturn => {
  const [queue, setQueue] = useState<Map<string, FileQueueValueType>>(new Map());

  const onDismissHandler = (name: string) => {
    setQueue((prev) => {
      const newState = new Map(prev);
      newState.delete(name);

      return newState;
    });

    return queue;
  };

  const addToQueueHandler = (key: string, file: File, meta?: FileMetadata) => {
    setQueue((prev) => {
      const newValue: FileQueueValueType = { file };
      if (meta != null) {
        newValue.meta = meta;
      }

      return new Map(prev.set(key, newValue));
    });

    return queue;
  };

  const findInQueueHandler = (key: string) => queue.get(key) || null;

  const updateQueueHandler = (key: string, file: File, meta?: FileMetadata) => {
    setQueue((prev) => {
      const newState = new Map(prev);
      const newValue: FileQueueValueType = { file };

      if (meta != null) {
        newValue.meta = meta;
      }

      newState.set(key, newValue);

      return newState;
    });

    return queue;
  };

  const clearQueueHandler = () => {
    setQueue((prev) => {
      prev.clear();

      return new Map(prev);
    });
  };

  return {
    addToQueue: addToQueueHandler,
    clearQueue: clearQueueHandler,
    fileQueue: queue,
    findInQueue: findInQueueHandler,
    onDismiss: onDismissHandler,
    updateQueue: updateQueueHandler,
  };
};
