import React from 'react';
import { DemoColorTypes } from '../../../../docs';
import { Intensity, Sizes } from '../../../constants';
import type {
  AccentColorNamesType,
  BackgroundAccentColorsType,
  BackgroundColorsDictionaryType,
  BackgroundEmotionColorsType,
  BackgroundNeutralColorsType,
  BoxBackgroundColorsType,
  EmotionColorNamesType,
  IntensityDictionaryType,
  NeutralColorsDictionaryType,
  TextAccentColorsType,
  TextEmotionColorsType,
  TextNeutralColorsType,
} from '../../../types';
import { Box } from '../../Box';
import { Flex } from '../../Flex';
import { Icon } from '../../Icon';
import ControlButton from '../ControlButton';

type DemoColorType = (typeof DemoColorTypes)[keyof typeof DemoColorTypes];

type ControlButtonDemoFactoryProps = {
  color: BackgroundColorsDictionaryType | NeutralColorsDictionaryType | EmotionColorNamesType | AccentColorNamesType;
  colorType: DemoColorType;
};

const ControlButtonDemoFactory = ({ color, colorType }: ControlButtonDemoFactoryProps) => {
  const sizes = Object.values(Sizes);

  const getBackgroundColor = (intensity: IntensityDictionaryType): BoxBackgroundColorsType | undefined => {
    switch (colorType) {
      case 'basic':
        return color as BackgroundColorsDictionaryType;
      case 'neutral':
        return `${color}-${intensity}` as BackgroundNeutralColorsType;
      case 'emotion':
        return `emotion-${color}-${intensity}` as BackgroundEmotionColorsType;
      case 'accent':
        return `accent-${color}-${intensity}` as BackgroundAccentColorsType;
      default:
        return undefined;
    }
  };

  const getTextColor = (
    intensity: IntensityDictionaryType,
  ): TextNeutralColorsType | TextEmotionColorsType | TextAccentColorsType | undefined => {
    switch (colorType) {
      case 'basic':
        return undefined;
      case 'neutral':
        return `${color}-${intensity}` as TextNeutralColorsType;
      case 'emotion':
        return `emotion-${color}-${intensity}` as TextEmotionColorsType;
      case 'accent':
        return `accent-${color}-${intensity}` as TextAccentColorsType;
      default:
        return undefined;
    }
  };

  const renderRow = (intensity?: IntensityDictionaryType) => {
    const backgroundColor = intensity ? getBackgroundColor(intensity) : getBackgroundColor(Intensity.BASIC);
    const textColor = intensity
      ? getTextColor(intensity === Intensity.BASIC ? Intensity.SUBTLE : Intensity.BASIC)
      : undefined;

    return (
      <Box
        key={intensity || 'default'}
        alignmentX={{ mobile: 'center', tablet: 'left' }}
        alignmentY="center"
        backgroundColor={backgroundColor}
        elementType={Flex}
        padding="space-800"
        textColor={textColor}
      >
        {sizes.map((size) => (
          <React.Fragment key={`${size}-subtle`}>
            <ControlButton size={size} isSymmetrical isSubtle aria-label="Close dialog">
              <Icon name="close" />
            </ControlButton>
          </React.Fragment>
        ))}
        {sizes.map((size) => (
          <React.Fragment key={`${size}-bordered`}>
            <ControlButton size={size} isSymmetrical aria-label="Close dialog">
              <Icon name="close" />
            </ControlButton>
          </React.Fragment>
        ))}
      </Box>
    );
  };

  if (colorType === DemoColorTypes.BASIC) {
    return renderRow();
  }

  return (
    <>
      {renderRow(Intensity.BASIC)}
      {renderRow(Intensity.SUBTLE)}
    </>
  );
};

export default ControlButtonDemoFactory;
