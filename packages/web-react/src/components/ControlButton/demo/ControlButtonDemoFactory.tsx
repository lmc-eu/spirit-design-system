import classNames from 'classnames';
import React from 'react';
import { Intensity, Sizes } from '../../../constants';
import type {
  AccentColorNamesType,
  BackgroundColorsDictionaryType,
  EmotionColorsDictionaryType,
  IntensityDictionaryType,
  NeutralColorsDictionaryType,
} from '../../../types';
import { Flex } from '../../Flex';
import { Icon } from '../../Icon';
import ControlButton from '../ControlButton';

type ColorType = 'basic' | 'neutral' | 'emotion' | 'accent';

type ControlButtonDemoFactoryProps = {
  color:
    | BackgroundColorsDictionaryType
    | NeutralColorsDictionaryType
    | EmotionColorsDictionaryType
    | AccentColorNamesType;
  colorType: ColorType;
};

const ControlButtonDemoFactory = ({ color, colorType }: ControlButtonDemoFactoryProps) => {
  const sizes = Object.values(Sizes);

  const getBackgroundClass = (intensity: IntensityDictionaryType) => {
    switch (colorType) {
      case 'basic':
        return `bg-${color}`;
      case 'neutral':
        return `bg-${color}-${intensity}`;
      case 'emotion':
        return `bg-emotion-${color}-${intensity}`;
      case 'accent':
        return `bg-accent-${color}-${intensity}`;
      default:
        return '';
    }
  };

  const getTextClass = (intensity: IntensityDictionaryType) => {
    switch (colorType) {
      case 'basic':
        return '';
      case 'neutral':
        return `text-${color}-${intensity === Intensity.BASIC ? Intensity.SUBTLE : Intensity.BASIC}`;
      case 'emotion':
        return `text-emotion-${color}-${intensity === Intensity.BASIC ? Intensity.SUBTLE : Intensity.BASIC}`;
      case 'accent':
        return `text-accent-${color}-${intensity === Intensity.BASIC ? Intensity.SUBTLE : Intensity.BASIC}`;
      default:
        return '';
    }
  };

  const renderRow = (intensity?: IntensityDictionaryType) => {
    const bgClass = intensity ? getBackgroundClass(intensity) : getBackgroundClass(Intensity.BASIC);
    const textClass = intensity ? getTextClass(intensity) : '';

    return (
      <Flex
        key={intensity || 'default'}
        alignmentX={{ mobile: 'center', tablet: 'left' }}
        alignmentY="center"
        UNSAFE_className={classNames(bgClass, textClass, 'p-800')}
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
      </Flex>
    );
  };

  if (colorType === 'basic') {
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
