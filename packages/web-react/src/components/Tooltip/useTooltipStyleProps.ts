import { useMemo } from 'react';
import classNames from 'classnames';
import { SpiritTooltipProps, TooltipProps } from '../../types';
import { useClassNamePrefix, useDeprecationMessage } from '../../hooks';
import { kebabCaseToCamelCase } from '../../utils';

export interface UseTooltipStyleProps extends SpiritTooltipProps {}

export interface UseTooltipStylePropsReturn {
  classProps: {
    rootClassName: string;
    wrapperClassName: string;
    arrowClassName: string;
    closeButtonClassName: string;
  };
  props: TooltipProps;
}

const deprecatedPlacements = {
  'top-left': 'top-start',
  'top-right': 'top-end',
  'right-top': 'right-start',
  'right-bottom': 'right-end',
  'bottom-left': 'bottom-start',
  'bottom-right': 'bottom-end',
  'left-top': 'left-start',
  'left-bottom': 'left-end',
};

export const useTooltipStyleProps = (props: UseTooltipStyleProps): UseTooltipStylePropsReturn => {
  const { placement = 'bottom', isDismissible, open, ...modifiedProps } = props;

  useDeprecationMessage({
    method: 'property',
    trigger: placement !== 'off' && !!deprecatedPlacements[placement as keyof typeof deprecatedPlacements],
    componentName: 'Tooltip',
    propertyProps: {
      deprecatedValue: placement,
      newValue: deprecatedPlacements[placement as keyof typeof deprecatedPlacements],
      propertyName: 'placement',
    },
  });

  const tooltipClass = useClassNamePrefix('Tooltip');
  const tooltipWrapperClass = `${tooltipClass}Wrapper`;
  const arrowClass = `${tooltipClass}__arrow`;
  const closeButtonClass = `${tooltipClass}__close`;
  const rootDismissibleClass = `${tooltipClass}--dismissible`;
  const rootPlacementClass = placement !== 'off' ? `${tooltipClass}--${kebabCaseToCamelCase(placement)}` : null;
  const rootHiddenClass = 'is-hidden';

  const isHiddenClass = useMemo(() => open === false, [open]);

  const tooltipClassName = classNames(tooltipClass, rootPlacementClass, {
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
