import React from 'react';
import Box from '../Box';

const BoxWithBackgroundColor = () => (
  <>
    <p>For demo purposes, the boxes have custom padding.</p>
    <Box padding="space-800">Primary Background</Box>
    <Box padding="space-800" backgroundColor="secondary">
      Secondary Background
    </Box>
    <Box padding="space-800" backgroundColor="tertiary">
      Tertiary Background
    </Box>
  </>
);

export default BoxWithBackgroundColor;
