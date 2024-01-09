import classNames from 'classnames';
import { AlignmentXDictionaryType } from '../../types';
import { useClassNamePrefix } from '../../hooks';

export interface ModalStylesProps {
  footerAlignment?: AlignmentXDictionaryType;
  isDockedOnMobile?: boolean;
  isExpandedOnMobile?: boolean;
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

export function useModalStyleProps(
  { footerAlignment = 'right', isDockedOnMobile, isExpandedOnMobile }: ModalStylesProps = {
    footerAlignment: 'right',
    isDockedOnMobile: false,
    isExpandedOnMobile: false,
  },
): ModalStylesReturn {
  const modalClass = useClassNamePrefix('Modal');
  const modalDialogClass = `${modalClass}Dialog`;
  const modalDialogDockedOnMobileClass = `${modalDialogClass}--dockOnMobile`;
  const modalDialogExpandedOnMobileClass = `${modalDialogClass}--expandOnMobile`;
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
    root: modalClass,
    dialog: classNames(modalDialogClass, {
      [modalDialogDockedOnMobileClass]: isDockedOnMobile,
      [modalDialogExpandedOnMobileClass]: isExpandedOnMobile,
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
