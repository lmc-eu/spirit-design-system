import React from 'react';
import Box from '../Box';

const BoxWithBackgroundColor = () => (
  <>
    <Box elementType="fieldset" marginBottom="space-500" borderWidth="0">
      <legend>For demo purposes the box is bordered</legend>
    </Box>
    <Box padding="space-800" borderWidth="100">
      Primary Background
    </Box>
    <Box padding="space-800" borderWidth="100" backgroundColor="secondary">
      Secondary Background
    </Box>
    <Box padding="space-800" borderWidth="100" backgroundColor="tertiary">
      Tertiary Background
    </Box>
  </>
);

export default BoxWithBackgroundColor;
