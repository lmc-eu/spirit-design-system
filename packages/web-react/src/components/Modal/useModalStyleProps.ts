import { useClassNamePrefix } from '../../hooks';

export interface ModalStyles {
  /** className props */
  classProps: {
    root: string;
    content: string;
    dialog: string;
    header: string;
    body: string;
    footer: string;
    backdrop: string;
  };
}

export function useModalStyleProps(): ModalStyles {
  const modalClass = useClassNamePrefix('Modal');
  const modalContentClass = `${modalClass}__content`;
  const modalDialogClass = `${modalClass}__dialog`;
  const modalHeaderClass = `${modalClass}__header`;
  const modalBodyClass = `${modalClass}__body`;
  const modalFooterClass = `${modalClass}__footer`;
  const modalBackdropClass = `${modalClass}__backdrop`;
  const classProps = {
    root: modalClass,
    content: modalContentClass,
    dialog: modalDialogClass,
    header: modalHeaderClass,
    body: modalBodyClass,
    footer: modalFooterClass,
    backdrop: modalBackdropClass,
  };

  return {
    classProps,
  };
}
