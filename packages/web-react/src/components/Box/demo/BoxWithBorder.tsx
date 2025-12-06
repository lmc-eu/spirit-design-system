import React from 'react';
import DocsStack from '../../../../docs/DocsStack';
import { getAccentBorderColors, getEmotionBorderColors } from '../../../utils';
import { Grid } from '../../Grid';
import Box from '../Box';

const accentColorsObject = getAccentBorderColors();
const emotionColorsObject = getEmotionBorderColors();

const BoxWithBorder = () => (
  <>
    <p>For demo purposes, the boxes have custom padding.</p>
    <Grid cols={{ desktop: 3, tablet: 1, mobile: 1 }}>
      <div>
        <DocsStack stackAlignment="start">
          <h3>Border colors</h3>
          <Box padding="space-800" borderWidth="100">
            With solid border style
          </Box>
          <Box padding="space-800" borderWidth="100" borderStyle="dotted">
            With dotted border style
          </Box>
          <Box padding="space-800" borderWidth="100" borderStyle="dashed">
            With dashed border style
          </Box>
          <Box padding="space-800" borderWidth="200">
            With thicker border
          </Box>
        </DocsStack>
      </div>
      <div>
        <DocsStack stackAlignment="start">
          <h3>Accent colors</h3>
          {Object.values(accentColorsObject).map((borderColor) => (
            <Box key={`accent-border-${borderColor}`} padding="space-800" borderColor={borderColor} borderWidth="100">
              With {borderColor} border color
            </Box>
          ))}
        </DocsStack>
      </div>
      <div>
        <DocsStack stackAlignment="start">
          <h3>Emotion colors</h3>
          {Object.values(emotionColorsObject).map((borderColor) => (
            <Box key={`emotion-border-${borderColor}`} padding="space-800" borderColor={borderColor} borderWidth="100">
              With {borderColor} border color
            </Box>
          ))}
        </DocsStack>
      </div>
    </Grid>
  </>
);

export default BoxWithBorder;
