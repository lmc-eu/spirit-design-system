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

  const findInQueueHandler = (key: string) => queue.get(key) || null;

  const updateQueueHandler = (key: string, file: File) => {
    setQueue((prev) => {
      const newState = new Map(prev);
      newState.set(key, file);

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
