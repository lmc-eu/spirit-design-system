'use client';

import classNames from 'classnames';
import React from 'react';
import { FillVariants } from '../../constants';
import { useStyleProps } from '../../hooks';
import { SpiritSegmentedControlProps } from '../../types/segmentedControl';
import { VisuallyHidden } from '../VisuallyHidden';
import { SegmentedControlProvider } from './SegmentedControlContext';
import { useSegmentedControlStyleProps } from './useSegmentedControlStyleProps';

const defaultProps: Partial<SpiritSegmentedControlProps> = {
  hasMultipleSelection: false,
  isFluid: false,
  variant: FillVariants.OUTLINE,
};

const SegmentedControl = (props: SpiritSegmentedControlProps) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { children, hasMultipleSelection, id, label, name, ...restProps } = propsWithDefaults;
  const { classProps, props: modifiedProps } = useSegmentedControlStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  const childrenArray = React.Children.toArray(children);

  const firstItem = childrenArray.find(
    (child) => React.isValidElement(child) && 'props' in child && child.props.value,
  ) as React.ReactElement | undefined;

  const [selectedValue, setSelectedValue] = React.useState(() => {
    if (hasMultipleSelection) {
      return firstItem?.props.value ? [firstItem.props.value] : [];
    }

    return firstItem?.props.value || '';
  });

  const handleSetSelectedValue = (value: string) => {
    if (hasMultipleSelection) {
      setSelectedValue((prev: string[]) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]));
    } else {
      setSelectedValue(value);
    }
  };

  const contextValue = {
    hasMultipleSelection,
    name,
    selectedValue,
    setSelectedValue: handleSetSelectedValue,
  };

  return (
    <SegmentedControlProvider value={contextValue}>
      <fieldset {...otherProps} {...styleProps} className={classNames(classProps.root, styleProps.className)}>
        <VisuallyHidden elementType="legend">{label}</VisuallyHidden>
        {childrenArray}
      </fieldset>
    </SegmentedControlProvider>
  );
};

SegmentedControl.spiritComponent = 'SegmentedControl';

export default SegmentedControl;
