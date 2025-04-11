'use client';

import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritSegmentedControlItemProps } from '../../types/segmentedControl';
import { useSegmentedControlContext } from './SegmentedControlContext';
import { useSegmentedControlStyleProps } from './useSegmentedControlStyleProps';

const SegmentedControlItem = (props: SpiritSegmentedControlItemProps) => {
  const { hasMultipleSelection, name, selectedValue, setSelectedValue } = useSegmentedControlContext();
  const { id, value, children, ...restProps } = props;
  const { classProps, props: modifiedProps } = useSegmentedControlStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  const isChecked = hasMultipleSelection
    ? Array.isArray(selectedValue) && selectedValue.includes(String(value))
    : selectedValue === value;

  const handleChange = () => {
    setSelectedValue?.(String(value));
  };

  return (
    <>
      <input
        type={hasMultipleSelection ? 'checkbox' : 'radio'}
        name={name}
        id={id}
        value={value}
        checked={isChecked}
        onChange={handleChange}
        {...otherProps}
        {...styleProps}
        className={classNames(classProps.input, styleProps.className)}
      />
      <label htmlFor={id} {...styleProps} className={classNames(classProps.label, styleProps.className)}>
        {children}
      </label>
    </>
  );
};

SegmentedControlItem.spiritComponent = 'SegmentedControlItem';

export default SegmentedControlItem;
