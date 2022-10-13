import { useClassNamePrefix } from '../../hooks';

export interface ModalStylePropsReturn {
  modalClassName: string;
  modalBodyClassName: string;
  modalCloseButtonClassName: string;
  modalContentClassName: string;
  modalDialogClassName: string;
  modalFooterClassName: string;
  modalHeaderClassName: string;
}

export const useModalStyleProps = (): ModalStylePropsReturn => {
  const modalClassName = useClassNamePrefix('Modal');
  const modalBodyClassName = useClassNamePrefix('Modal__body');
  const modalCloseButtonClassName = useClassNamePrefix('Modal__close');
  const modalContentClassName = useClassNamePrefix('Modal__content');
  const modalDialogClassName = useClassNamePrefix('Modal__dialog');
  const modalFooterClassName = useClassNamePrefix('Modal__footer');
  const modalHeaderClassName = useClassNamePrefix('Modal__header');

  return {
    modalClassName,
    modalBodyClassName,
    modalCloseButtonClassName,
    modalContentClassName,
    modalDialogClassName,
    modalFooterClassName,
    modalHeaderClassName,
  };
};
