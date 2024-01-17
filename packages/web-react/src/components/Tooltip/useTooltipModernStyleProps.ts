import { useMemo } from 'react';
import classNames from 'classnames';
import { TooltipModernProps, TooltipProps } from '../../types';
import { useClassNamePrefix } from '../../hooks';

export interface UseTooltipModernStyleProps extends TooltipModernProps {}

export interface UseTooltipModernStylePropsReturn {
  classProps: {
    rootClassName: string;
    wrapperClassName: string;
    arrowClassName: string;
    closeButtonClassName: string;
  };
  props: TooltipProps;
}

export const useTooltipModernStyleProps = (
  props: Omit<UseTooltipModernStyleProps, 'id' | 'onToggle'>,
): UseTooltipModernStylePropsReturn => {
  const { isDismissible, isOpen, ...modifiedProps } = props;

  const tooltipClass = useClassNamePrefix('Tooltip');
  const tooltipWrapperClass = `${tooltipClass}Wrapper`;
  const arrowClass = `${tooltipClass}__arrow`;
  const closeButtonClass = `${tooltipClass}__close`;
  const rootDismissibleClass = `${tooltipClass}--dismissible`;
  const rootHiddenClass = 'is-hidden';

  const isHiddenClass = useMemo(() => isOpen === false, [isOpen]);

  const tooltipClassName = classNames(tooltipClass, {
    [rootDismissibleClass]: isDismissible,
    [rootHiddenClass]: isHiddenClass,
  });
  const arrowClassName = arrowClass;
  const closeButtonClassName = closeButtonClass;

  return {
    classProps: {
      rootClassName: tooltipClassName,
      wrapperClassName: tooltipWrapperClass,
      arrowClassName,
      closeButtonClassName,
    },
    props: modifiedProps,
  };
};
