import classNames from 'classnames';
import { AlignmentXDictionaryType } from '../../types';
import { useClassNamePrefix } from '../../hooks';

export interface ModalComposedStylesProps {
  footerAlignment?: AlignmentXDictionaryType;
  isExpandedOnMobile?: boolean;
}

export interface ModalComposedStylesReturn {
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

export function useModalComposedStyleProps(
  { footerAlignment = 'right', isExpandedOnMobile }: ModalComposedStylesProps = {
    footerAlignment: 'right',
    isExpandedOnMobile: false,
  },
): ModalComposedStylesReturn {
  const modalClass = useClassNamePrefix('Modal');
  const modalComposedClass = `${modalClass}--composed`;
  const modalDialogClass = `${modalClass}Dialog`;
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
    root: classNames(modalClass, modalComposedClass),
    dialog: classNames(modalDialogClass, { [modalDialogExpandedOnMobileClass]: isExpandedOnMobile }),
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
