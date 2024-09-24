import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks';
import { ToastBarProps } from '../../types';

export const useToastBarStyleProps = (props: ToastBarProps) => {
  const { color, isDismissible, ...restProps } = props;

  const toastBarClass = useClassNamePrefix('ToastBar');
  const toastBarBoxClass = `${toastBarClass}__box`;
  const toastBarCloseClass = `${toastBarClass}__close`;
  const toastBarContainerClass = `${toastBarClass}__container`;
  const toastBarContentClass = `${toastBarClass}__content`;
  const toastBarLinkClass = `${toastBarClass}__link`;
  const toastBarLinkUnderlinedClass = useClassNamePrefix('link-underlined');
  const toastBarColorClass = `${toastBarClass}--${color || 'neutral'}`;
  const toastBarDismissibleClass = `${toastBarClass}--dismissible`;
  const toastBarRootClasses = classNames(toastBarClass, toastBarColorClass, isDismissible && toastBarDismissibleClass);
  const toastBarLinkClasses = classNames(toastBarLinkClass, toastBarLinkUnderlinedClass);

  return {
    classProps: {
      root: toastBarRootClasses,
      box: toastBarBoxClass,
      close: toastBarCloseClass,
      container: toastBarContainerClass,
      content: toastBarContentClass,
      link: toastBarLinkClasses,
    },
    props: restProps,
  };
};
