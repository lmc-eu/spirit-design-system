import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks/useClassNamePrefix';
import { ItemStyleProps } from '../../types';

export interface ItemStyles {
  /** className props */
  classProps: {
    helperText: string;
    icon: {
      root: string;
      start: string;
      end: string;
    };
    label: string;
    root: string;
  };
  /** props to be passed to the element */
  props: ItemStyleProps;
}

export function useItemStyleProps<P extends ItemStyleProps>(props: P): ItemStyles {
  const { isDisabled, isSelected, ...restProps } = props;
  const itemClass = useClassNamePrefix('Item');
  const itemRootDisabledClass = `${itemClass}--disabled`;
  const itemRootSelectedClass = `${itemClass}--selected`;
  const itemHelperTextClass = `${itemClass}__helperText`;
  const itemLabelClass = `${itemClass}__label`;
  const itemIconClass = `${itemClass}__icon`;
  const itemIconStartClass = `${itemIconClass}--start`;
  const itemIconEndClass = `${itemIconClass}--end`;

  const rootStyles = classNames(itemClass, {
    [itemRootDisabledClass]: isDisabled,
    [itemRootSelectedClass]: isSelected,
  });

  return {
    classProps: {
      helperText: itemHelperTextClass,
      icon: {
        root: itemIconClass,
        start: itemIconStartClass,
        end: itemIconEndClass,
      },
      label: itemLabelClass,
      root: rootStyles,
    },
    props: restProps,
  };
}
