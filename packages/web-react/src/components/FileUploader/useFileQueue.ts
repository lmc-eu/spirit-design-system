import { useState } from 'react';
import { FileUploaderHandlingProps } from '../../types';

export interface FileQueueReturn extends FileUploaderHandlingProps {}

export const useFileQueue = (): FileQueueReturn => {
  const [queue, setQueue] = useState<Map<string, File>>(new Map());

  const onDismissHandler = (name: string) => {
    setQueue((prev) => {
      const newState = new Map(prev);
      newState.delete(name);

      return newState;
    });

    return queue;
  };

  const addToQueueHandler = (key: string, file: File) => {
    setQueue((prev) => new Map(prev.set(key, file)));

    return queue;
  };

  const clearQueueHandler = () => {
    setQueue((prev) => {
      prev.clear();

      return new Map(prev);
    });
  };

  return {
    fileQueue: queue,
    onDismiss: onDismissHandler,
    addToQueue: addToQueueHandler,
    clearQueue: clearQueueHandler,
  };
};
