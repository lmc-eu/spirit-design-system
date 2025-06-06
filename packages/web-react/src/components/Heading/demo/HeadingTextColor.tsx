import React from 'react';
import DocsStack from '../../../../docs/DocsStack';
import { TextColors } from '../../../constants';
import { HeadingColorsType } from '../../../types';
import { getAccentTextColors, getEmotionTextColors } from '../../../utils/colorObjectGenerators';
import { Grid } from '../../Grid';
import Text from '../../Text/Text';
import Heading from '../Heading';

const colorList = {
  text: Object.values(TextColors),
  accent: Object.values(getAccentTextColors()),
  emotion: Object.values(getEmotionTextColors()),
};

const HeadingTextColor = () => (
  <>
    <Text>For demo purposes, the heading has custom size, background and padding.</Text>
    <Grid cols={{ mobile: 1, desktop: 3 }} alignmentY="top" spacingY="space-1100">
      {Object.entries(colorList).map(([key, colors]: [string, HeadingColorsType[]]) => (
        <DocsStack key={`heading-${key}`} stackAlignment="start">
          <h3>{`${key.charAt(0).toUpperCase()}${key.slice(1)} `} colors</h3>

          {colors?.map((color) => {
            const bgColor = color?.replace(/basic|subtle/, (match) => (match === 'basic' ? 'subtle' : 'basic'));
            const boxClass = key !== 'text' ? `bg-${bgColor} p-800` : 'mb-800';

            return (
              <div key={`heading-item-${color}`} className={boxClass}>
                <Heading elementType="h2" textColor={color} size="xsmall">
                  Heading {color}
                </Heading>
              </div>
            );
          })}
        </DocsStack>
      ))}
    </Grid>
  </>
);

export default HeadingTextColor;
