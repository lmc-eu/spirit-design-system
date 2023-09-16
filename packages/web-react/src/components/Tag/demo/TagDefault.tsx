import React from 'react';
import DocsSection from '../../../../docs/DocsSections';
import { EmotionColors, SizesExtended } from '../../../constants';
import { Grid } from '../../Grid';
import { Tag } from '../Tag';

const TagDefault = () => {
  const sizes = Object.values(SizesExtended);
  const emotionColors = Object.values(EmotionColors);
  const colors = ['neutral', ...emotionColors];

  return (
    <Grid cols={1} tablet={3} desktop={5}>
      {sizes.map((size) => (
        <DocsSection key={size} title={`Size ${size}`}>
          {colors.map((color) => (
            <>
              <Tag color={color} size={size} isSubtle>
                Tag {color}
              </Tag>
              <Tag color={color} size={size}>
                Tag {color}
              </Tag>
            </>
          ))}
        </DocsSection>
      ))}
    </Grid>
  );
};

export default TagDefault;
