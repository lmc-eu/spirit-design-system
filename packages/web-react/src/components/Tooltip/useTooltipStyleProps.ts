import { useMemo } from 'react';
import classNames from 'classnames';
import { TooltipProps } from '../../types';
import { useClassNamePrefix } from '../../hooks';

type omittedProps = 'id' | 'onToggle';

export interface UseTooltipStyleProps extends TooltipProps {}

export interface UseTooltipStylePropsReturn {
  classProps: {
    rootClassName: string;
    popoverClassName: string;
    arrowClassName: string;
    closeButtonClassName: string;
  };
  props: Omit<TooltipProps, omittedProps>;
}

export const useTooltipStyleProps = (props: Omit<UseTooltipStyleProps, omittedProps>): UseTooltipStylePropsReturn => {
  const { isDismissible, isOpen, ...modifiedProps } = props;
  const tooltipClass = useClassNamePrefix('Tooltip');
  const tooltipPopoverClass = `${tooltipClass}Popover`;
  const arrowClass = `${tooltipPopoverClass}__arrow`;
  const closeButtonClass = `${tooltipPopoverClass}__close`;
  const rootDismissibleClass = `${tooltipPopoverClass}--dismissible`;
  const rootHiddenClass = 'is-hidden';

  const isHiddenClass = useMemo(() => isOpen === false, [isOpen]);

  const tooltipPopoverClassName = classNames(tooltipPopoverClass, {
    [rootDismissibleClass]: isDismissible,
    [rootHiddenClass]: isHiddenClass,
  });

  return {
    classProps: {
      rootClassName: tooltipClass,
      popoverClassName: tooltipPopoverClassName,
      arrowClassName: arrowClass,
      closeButtonClassName: closeButtonClass,
    },
    props: modifiedProps,
  };
};
