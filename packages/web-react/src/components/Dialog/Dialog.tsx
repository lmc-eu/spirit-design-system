import React, { useRef, MutableRefObject, Children, cloneElement, forwardRef, ReactElement, ForwardedRef } from 'react';
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

  /**
   * Make sure that there is only one child wrapped in dialog element.
   * Otherwise we cannot distinguish between dialog content and dialog backdrop, which is dialog element itself.
   * useClickOutside hook uses refs to dialog and content elements to find out whether it was clicked on backdrop
   * and dialog should be closed.
   *
   * @see https://reactjs.org/docs/react-api.html#reactchildren
   * @throws Error
   */
  const child = Children.only(children);

  return (
    <dialog ref={dialogElementRef as MutableRefObject<HTMLDialogElement | null>} {...restProps}>
      {cloneElement(child as ReactElement, {
        ref: (clonedElementRef: HTMLElement) => {
          contentElementRef.current = clonedElementRef;
        },
      })}
    </dialog>
  );
};

export default forwardRef(Dialog);
