'use client';

import { cssVariablePrefix } from '@lmc-eu/spirit-design-tokens';
import classNames from 'classnames';
import React from 'react';
import { FillVariants } from '../../constants';
import { useStyleProps } from '../../hooks';
import { SpiritSegmentedControlProps } from '../../types/segmentedControl';
import { VisuallyHidden } from '../VisuallyHidden';
import { SegmentedControlProvider } from './SegmentedControlContext';
import { useSegmentedControl } from './useSegmentedControl';
import { useSegmentedControlStyleProps } from './useSegmentedControlStyleProps';

const defaultProps: Partial<SpiritSegmentedControlProps> = {
  hasMultipleSelection: false,
  isFluid: false,
  variant: FillVariants.OUTLINE,
};

const SegmentedControl = (props: SpiritSegmentedControlProps) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { children, hasMultipleSelection = false, label, name, ...restProps } = propsWithDefaults;
  const { classProps, props: modifiedProps } = useSegmentedControlStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  const { selectedValue, setSelectedValue, highlightedPosition } = useSegmentedControl({
    children,
    hasMultipleSelection,
  });

  const contextValue = {
    hasMultipleSelection,
    name,
    selectedValue,
    setSelectedValue,
  };

  return (
    <SegmentedControlProvider value={contextValue}>
      <fieldset
        {...otherProps}
        {...styleProps}
        className={classNames(classProps.root, styleProps.className)}
        style={{
          ...(styleProps.style || {}),
          ...(highlightedPosition !== undefined
            ? {
                [`--${cssVariablePrefix}segmented-control-highlight-pos`]: highlightedPosition,
              }
            : {}),
        }}
      >
        <VisuallyHidden elementType="legend">{label}</VisuallyHidden>
        {children}
      </fieldset>
    </SegmentedControlProvider>
  );
};

SegmentedControl.spiritComponent = 'SegmentedControl';

export default SegmentedControl;
