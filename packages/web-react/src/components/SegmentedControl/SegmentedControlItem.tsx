'use client';

import classNames from 'classnames';
import React, { forwardRef } from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritSegmentedControlItemProps } from '../../types/segmentedControl';
import { useSegmentedControlContext } from './SegmentedControlContext';
import { useSegmentedControlStyleProps } from './useSegmentedControlStyleProps';

const SegmentedControlItem = forwardRef<HTMLLabelElement, SpiritSegmentedControlItemProps>((props, ref) => {
  const { hasMultipleSelection, name, selectedValue, setSelectedValue } = useSegmentedControlContext();
  const { id, isDisabled = false, value, children, ...restProps } = props;
  const { classProps, props: modifiedProps } = useSegmentedControlStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  return (
    <>
      <input
        type={hasMultipleSelection ? 'checkbox' : 'radio'}
        name={name}
        id={id}
        value={value}
        checked={selectedValue?.includes(String(value))}
        onChange={() => setSelectedValue?.(String(value))}
        {...otherProps}
        {...styleProps}
        className={classNames(classProps.input, styleProps.className)}
        {...(isDisabled && { disabled: true })}
      />
      <label ref={ref} htmlFor={id} {...styleProps} className={classNames(classProps.label, styleProps.className)}>
        {children}
      </label>
    </>
  );
});

SegmentedControlItem.spiritComponent = 'SegmentedControlItem';

export default SegmentedControlItem;
