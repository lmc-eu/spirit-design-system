'use client';

import classNames from 'classnames';
import React from 'react';
import { FillVariants } from '../../constants';
import { useStyleProps } from '../../hooks';
import { SpiritUncontrolledSegmentedControlProps } from '../../types/segmentedControl';
import { VisuallyHidden } from '../VisuallyHidden';
import { SegmentedControlProvider } from './SegmentedControlContext';
import { useSegmentedControl } from './useSegmentedControl';
import { useSegmentedControlStyleProps } from './useSegmentedControlStyleProps';

const defaultProps: Partial<SpiritUncontrolledSegmentedControlProps> = {
  isFluid: false,
  isMultiselect: false,
  variant: FillVariants.OUTLINE,
};

const UncontrolledSegmentedControl = (props: SpiritUncontrolledSegmentedControlProps) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { children, defaultSelectedValue, isMultiselect, label, name, onSelectionChange, ...restProps } =
    propsWithDefaults;
  const { selectedValue, setSelectedValue } = useSegmentedControl({
    defaultSelectedValue,
    isMultiselect,
  });
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

UncontrolledSegmentedControl.spiritComponent = 'UncontrolledSegmentedControl';

export default UncontrolledSegmentedControl;
