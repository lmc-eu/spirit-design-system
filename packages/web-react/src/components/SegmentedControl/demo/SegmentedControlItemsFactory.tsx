import React, { FunctionComponent, useState } from 'react';
import { FillVariants } from '../../../constants';
import { FillVariantDictionaryType } from '../../../types';
import { Icon } from '../../Icon';
import { UNSTABLE_Truncate } from '../../UNSTABLE_Truncate';
import { VisuallyHidden } from '../../VisuallyHidden';
import SegmentedControl from '../SegmentedControl';
import SegmentedControlItem from '../SegmentedControlItem';

type SegmentedControlItemsFactoryProps = {
  contentVariant?: 'label-only' | 'icon-only' | 'label-icon';
  isMultiselect?: boolean;
  isFluid?: boolean;
  label?: string;
  name?: string;
  variant?: FillVariantDictionaryType;
};

const SegmentedControlItemsFactory: FunctionComponent<SegmentedControlItemsFactoryProps> = ({
  contentVariant = 'label-only',
  isMultiselect = false,
  isFluid = false,
  name = '',
  label,
  variant = FillVariants.OUTLINE,
}) => {
  const items = ['value-1', 'value-2', 'value-3'];
  const [selectedValue, setSelectedValue] = useState<string | string[]>(isMultiselect ? ['value-1'] : 'value-1');

  return (
    <SegmentedControl
      label={label ?? `Label for ${name}`}
      name={name}
      variant={variant}
      isMultiselect={isMultiselect}
      isFluid={isFluid}
      selectedValue={selectedValue}
      setSelectedValue={setSelectedValue}
    >
      {items.map((value, index) => (
        <SegmentedControlItem key={value} id={`segmentedControl-${name}-${index + 1}`} value={value}>
          {contentVariant !== 'label-only' && (
            <>
              <Icon name="file" boxSize={20} />
              <VisuallyHidden>Label</VisuallyHidden>
            </>
          )}
          {contentVariant !== 'icon-only' && <UNSTABLE_Truncate lines={1}>Label</UNSTABLE_Truncate>}
        </SegmentedControlItem>
      ))}
    </SegmentedControl>
  );
};

export default SegmentedControlItemsFactory;
