import React, {
  useRef,
  MutableRefObject,
  Children,
  cloneElement,
  forwardRef,
  ReactElement,
  ReactNode,
  ForwardedRef,
} from 'react';
import { DialogProps } from '../../types';
import { useDialog } from './useDialog';
import { useCancelEvent, useClickOutside } from '../../hooks';

// @TODO: Type 'MutableRefObject<ForwardedRef<HTMLDialogElement | null>>' is not assignable to type 'MutableRefObject<HTMLDialogElement | null>'.
// Solved using `as MutableRefObject<HTMLDialogElement | null>` but I do not like it

const Dialog = (props: DialogProps, ref: ForwardedRef<HTMLDialogElement | null>): JSX.Element => {
  const { children, isOpen, onClose, ...restProps } = props;
  const dialogElementRef: MutableRefObject<ForwardedRef<HTMLDialogElement | null>> = useRef(ref);
  const contentElementRef: MutableRefObject<HTMLElement | null> = useRef(null);

  // handles toggling based on state
  const { closeDialog } = useDialog(dialogElementRef as MutableRefObject<HTMLDialogElement | null>, isOpen);
  // handles closing by clicking outside the dialog
  useClickOutside({
    ref: contentElementRef,
    callback: (event: Event) => {
      closeDialog();
      onClose(event);
    },
  });
  // handles closing using Escape key
  useCancelEvent(dialogElementRef as MutableRefObject<HTMLDialogElement | null>, onClose);

  return (
    <dialog ref={dialogElementRef as MutableRefObject<HTMLDialogElement | null>} {...restProps}>
      {Children.map<ReactNode, ReactNode>(children, (child) =>
        cloneElement(child as ReactElement, {
          ref: (clonedElementRef: HTMLElement) => {
            // Add reference only to `Modal__content` element
            // @TODO: remove this on https://github.com/lmc-eu/spirit-design-system/pull/532
            if (clonedElementRef?.className?.includes('content')) {
              contentElementRef.current = clonedElementRef;
            }
          },
        }),
      )}
    </dialog>
  );
};

export default forwardRef(Dialog);
