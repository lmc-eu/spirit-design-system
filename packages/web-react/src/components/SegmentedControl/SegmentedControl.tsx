'use client';

import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritSegmentedControlProps } from '../../types/segmentedControl';
import { VisuallyHidden } from '../VisuallyHidden';
import { SegmentedControlProvider } from './SegmentedControlContext';
import { useSegmentedControlStyleProps } from './useSegmentedControlStyleProps';

const defaultProps: Partial<SpiritSegmentedControlProps> = {
  isFluid: false,
  variant: 'outline',
  id: '',
};

const SegmentedControl = (props: SpiritSegmentedControlProps) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { children, id, label, name, ...restProps } = propsWithDefaults;
  const { classProps, props: modifiedProps } = useSegmentedControlStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  const childrenArray = React.Children.toArray(children);

  const firstItem = childrenArray.find(
    (child) => React.isValidElement(child) && 'props' in child && child.props.value,
  ) as React.ReactElement | undefined;

  const [selectedValue, setSelectedValue] = React.useState(firstItem?.props.value);

  const contextValue = {
    id,
    name,
    selectedValue,
    setSelectedValue,
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
