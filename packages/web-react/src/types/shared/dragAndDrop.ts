import { DragEvent } from 'react';

export interface DragAndDropHandlingProps<E = HTMLElement> {
  onDragEnter: (event: DragEvent<E>) => void;
  onDragLeave: (event: DragEvent<E>) => void;
  onDragOver: (event: DragEvent<E>) => void;
  onDrop: (event: DragEvent<E>) => void;
}
