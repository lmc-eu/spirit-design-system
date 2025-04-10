import classNames from 'classnames';
import { FillVariants } from '../../constants';
import { useClassNamePrefix } from '../../hooks';
import { SpiritSegmentedControlProps } from '../../types/segmentedControl';

export interface UseSegmentedControlStylesProps extends Omit<SpiritSegmentedControlProps, 'name'> {}

export interface UseSegmentedControlStylesReturn {
  /** className props */
  classProps: {
    root: string;
    input: string;
    label: string;
  };
  /** props to be passed to the element */
  props: Omit<SpiritSegmentedControlProps, 'name'>;
}

export const useSegmentedControlStyleProps = (
  props: UseSegmentedControlStylesProps,
): UseSegmentedControlStylesReturn => {
  const { isFluid, variant = FillVariants.OUTLINE, ...restProps } = props;

  const segmentedControlClass = useClassNamePrefix('SegmentedControl');
  const segmentedControlVariantClass = `${segmentedControlClass}--${variant}`;
  const segmentedControlFluidClass = `${segmentedControlClass}--fluid`;
  const segmentedControlItemClass = `${segmentedControlClass}Item`;
  const segmentedControlItemInputClass = `${segmentedControlItemClass}__input`;
  const segmentedControlItemLabelClass = `${segmentedControlItemClass}__label`;

  const classProps = {
    root: classNames(segmentedControlClass, segmentedControlVariantClass, {
      [segmentedControlFluidClass]: isFluid,
    }),
    input: segmentedControlItemInputClass,
    label: segmentedControlItemLabelClass,
  };

  const filteredProps = Object.keys(restProps).reduce((acc, key) => {
    if (key !== 'isDefaultSelected') {
      acc[key] = restProps[key];
    }

    return acc;
  }, {} as UseSegmentedControlStylesProps);

  return {
    classProps,
    props: filteredProps,
  };
};
