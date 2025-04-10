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
  isFluid: false,
  isMultiselect: false,
  variant: FillVariants.OUTLINE,
};

const SegmentedControl = (props: SpiritSegmentedControlProps) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { children, isMultiselect, label, name, onSelectionChange, selectedValue, setSelectedValue, ...restProps } =
    propsWithDefaults;
  const { classProps, props: modifiedProps } = useSegmentedControlStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  const contextValue = {
    isMultiselect,
    name,
    selectedValue,
    setSelectedValue,
    onSelectionChange,
  };

  return (
    <SegmentedControlProvider value={contextValue}>
      <fieldset {...otherProps} {...styleProps} className={classNames(classProps.root, styleProps.className)}>
        <VisuallyHidden elementType="legend">{label}</VisuallyHidden>
        {children}
      </fieldset>
    </SegmentedControlProvider>
  );
};

SegmentedControl.spiritComponent = 'SegmentedControl';

export default SegmentedControl;
