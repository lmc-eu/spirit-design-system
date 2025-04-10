import React from 'react';
import { FillVariants } from '../../../constants';
import { FillVariantDictionaryType } from '../../../types';
import { Icon } from '../../Icon';
import SegmentedControl from '../SegmentedControl';
import SegmentedControlItem from '../SegmentedControlItem';

type SegmentedControlItemsFactoryProps = {
  contentVariant?: 'label-only' | 'icon-only' | 'label-icon';
  hasMultipleSelection?: boolean;
  isFluid?: boolean;
  label?: string;
  name?: string;
  variant?: FillVariantDictionaryType;
};

const SegmentedControlItemsFactory: React.FC<SegmentedControlItemsFactoryProps> = ({
  contentVariant = 'label-only',
  hasMultipleSelection = false,
  isFluid = false,
  name = '',
  label,
  variant = FillVariants.OUTLINE,
}) => {
  const items = ['value-1', 'value-2', 'value-3'];

  return (
    <SegmentedControl
      label={label ?? `Label for ${name}`}
      name={name}
      variant={variant}
      hasMultipleSelection={hasMultipleSelection}
      isFluid={isFluid}
    >
      {items.map((value, index) => (
        <SegmentedControlItem key={value} id={`segmentedControl-${name}-${index + 1}`} value={value}>
          {contentVariant !== 'label-only' && <Icon name="file" boxSize={20} />}
          {contentVariant !== 'icon-only' && <>Label</>}
        </SegmentedControlItem>
      ))}
    </SegmentedControl>
  );
};

export default SegmentedControlItemsFactory;
