import { type ElementType } from 'react';
import { SizesExtended } from '../../constants';
import {
  type Responsive,
  type SizeExtendedDictionaryType,
  type SpaceToken,
  type SpiritSectionProps,
} from '../../types';

export interface UseSectionSizeProps {
  modifiedProps: Partial<SpiritSectionProps<ElementType>>;
}

const sizePaddingMapping: Record<SizeExtendedDictionaryType<never>, { paddingY: Responsive<SpaceToken> }> = {
  [SizesExtended.XSMALL]: { paddingY: { mobile: 'space-900', tablet: 'space-1000' } },
  [SizesExtended.SMALL]: { paddingY: { mobile: 'space-1000', tablet: 'space-1100' } },
  [SizesExtended.MEDIUM]: { paddingY: { mobile: 'space-1100', tablet: 'space-1300' } },
  [SizesExtended.LARGE]: { paddingY: { mobile: 'space-1200', tablet: 'space-1400' } },
  [SizesExtended.XLARGE]: { paddingY: { mobile: 'space-1400', tablet: 'space-1600' } },
};

export const useSectionSizeProps = (props: Partial<SpiritSectionProps<ElementType>> = {}): UseSectionSizeProps => {
  const { size } = props;

  const modifiedProps = size ? { ...sizePaddingMapping[size], ...props } : { ...props };

  return {
    modifiedProps,
  };
};
