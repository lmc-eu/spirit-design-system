import React from 'react';
import DocsStack from '../../../../docs/DocsStack';
import { getAccentTextColors, getEmotionTextColors } from '../../../utils/colorObjectGenerators';
import { Grid } from '../../Grid';
import Box from '../Box';

const accentColorsObject = getAccentTextColors();
const emotionColorsObject = getEmotionTextColors();

const BoxWithBorder = () => (
  <>
    <p>For demo purposes, the boxes have custom padding.</p>
    <Grid cols={{ desktop: 3, tablet: 1, mobile: 1 }} gap="space-600">
      <div>
        <DocsStack stackAlignment="start">
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
          {Object.values(accentColorsObject).map((borderColor) => (
            <Box key={`accent-border-${borderColor}`} padding="space-800" borderColor={borderColor} borderWidth="100">
              With {borderColor} border color
            </Box>
          ))}
        </DocsStack>
      </div>
      <div>
        <DocsStack stackAlignment="start">
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
