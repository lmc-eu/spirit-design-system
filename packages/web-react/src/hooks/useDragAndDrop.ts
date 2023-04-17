import { DragEvent, useState } from 'react';
import { DragAndDropHandlingProps } from '../types';

export interface UseDragAndDropProps<E = HTMLElement> extends Partial<DragAndDropHandlingProps<E>> {}

export interface UseDragAndDropReturn<E = HTMLElement> extends DragAndDropHandlingProps<E> {
  isDragging: boolean;
}

export const useDragAndDrop = <E = HTMLElement>(props?: UseDragAndDropProps<E>): UseDragAndDropReturn<E> => {
  const [isDragging, setDragging] = useState(false);

  const onDragOverHandler = (event: DragEvent<E>) => {
    event.preventDefault();
    if (props?.onDragOver) {
      props.onDragOver(event);
    }
  };

  const onDragEnterHandler = (event: DragEvent<E>) => {
    setDragging(true);
    if (props?.onDragEnter) {
      props.onDragEnter(event);
    }
  };

  const onDragLeaveHandler = (event: DragEvent<E>) => {
    setDragging(false);
    if (props?.onDragLeave) {
      props.onDragLeave(event);
    }
  };

  const onDropHandler = (event: DragEvent<E>) => {
    event.preventDefault();
    if (props?.onDrop) {
      props.onDrop(event);
    }
    setDragging(false);
  };

  return {
    isDragging,
    onDragOver: onDragOverHandler,
    onDragEnter: onDragEnterHandler,
    onDragLeave: onDragLeaveHandler,
    onDrop: onDropHandler,
  };
};
