import React from 'react';
import { BorderStyles } from '../../../constants';
import Box from '../Box';

const BoxWithBorder = () => (
  <>
    <Box elementType="fieldset" marginBottom="space-500" borderWidth="0">
      <legend>For demo purposes the box has custom padding</legend>
    </Box>
    <Box padding="space-800" borderWidth="100">
      Without radius
    </Box>
    <Box padding="space-800" borderWidth="100" borderRadius="300">
      With custom radius
    </Box>
    <Box padding="space-800" borderWidth="100" borderRadius="full">
      With full radius
    </Box>
    <Box padding="space-800" borderWidth="200" borderRadius="300">
      With thicker border
    </Box>
    <Box padding="space-800" borderWidth="100" borderRadius="300" borderColor="focus">
      With focus color
    </Box>
    <Box padding="space-800" borderWidth="100" borderStyle={BorderStyles.DASHED}>
      With dashed border style
    </Box>
  </>
);

export default BoxWithBorder;
