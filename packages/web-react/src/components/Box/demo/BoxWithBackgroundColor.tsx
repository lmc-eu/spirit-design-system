import React from 'react';
import Box from '../Box';

const BoxWithBackgroundColor = () => (
  <>
    <p>For demo purposes, the boxes are bordered.</p>
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
