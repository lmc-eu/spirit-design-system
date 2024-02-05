import classNames from 'classnames';
import { AlignmentX, AlignmentY } from '../../constants';
import { AlignmentXDictionaryType, AlignmentYDictionaryType } from '../../types';
import { useClassNamePrefix } from '../../hooks';

export interface ModalStylesProps {
  footerAlignment?: AlignmentXDictionaryType;
  isDockedOnMobile?: boolean;
  isExpandedOnMobile?: boolean;
  isScrollable?: boolean;
  modalAlignment?: AlignmentYDictionaryType;
}

export interface ModalStylesReturn {
  /** className props */
  classProps: {
    root: string;
    dialog: string;
    title: string;
    header: string;
    body: string;
    footer: {
      root: string;
      description: string;
      actions: string;
    };
  };
}

export function useModalStyleProps({
  footerAlignment = AlignmentX.RIGHT,
  isDockedOnMobile = false,
  isExpandedOnMobile = false,
  isScrollable = true,
  modalAlignment = AlignmentY.CENTER,
}: ModalStylesProps = {}): ModalStylesReturn {
  const modalClass = useClassNamePrefix('Modal');
  const modalAlignClasses = {
    top: `${modalClass}--top`,
    center: `${modalClass}--center`,
    bottom: `${modalClass}--bottom`,
  };
  const modalDialogClass = `${modalClass}Dialog`;
  const modalDialogDockedOnMobileClass = `${modalDialogClass}--dockOnMobile`;
  const modalDialogExpandedOnMobileClass = `${modalDialogClass}--expandOnMobile`;
  const modalDialogNonScrollableClass = `${modalDialogClass}--nonScrollable`;
  const modalHeaderClass = `${modalClass}Header`;
  const modalTitleClass = `${modalHeaderClass}__title`;
  const modalBodyClass = `${modalClass}Body`;
  const modalFooterClass = `${modalClass}Footer`;
  const modalFooterDescriptionClass = `${modalFooterClass}__description`;
  const modalFooterActionsClass = `${modalFooterClass}__actions`;
  const footerAlignClasses = {
    left: `${modalFooterClass}--left`,
    center: `${modalFooterClass}--center`,
    right: `${modalFooterClass}--right`,
  };
  const classProps = {
    root: classNames(modalClass, { [modalAlignClasses[modalAlignment]]: modalAlignment }),
    dialog: classNames(modalDialogClass, {
      [modalDialogDockedOnMobileClass]: isDockedOnMobile,
      [modalDialogExpandedOnMobileClass]: isExpandedOnMobile,
      [modalDialogNonScrollableClass]: !isScrollable,
    }),
    title: modalTitleClass,
    header: modalHeaderClass,
    body: modalBodyClass,
    footer: {
      root: classNames(modalFooterClass, { [footerAlignClasses[footerAlignment]]: footerAlignment }),
      description: modalFooterDescriptionClass,
      actions: modalFooterActionsClass,
    },
  };

  return {
    classProps,
  };
}
