import React from 'react';
import Box from '../Box';

const BoxWithBackgroundGradient = () => (
  <>
    <p>For demo purposes, the boxes have custom padding.</p>
    <Box padding="space-800" backgroundGradient="primary">
      Primary Background Gradient
    </Box>
    <Box padding="space-800" backgroundGradient="secondary">
      Secondary Background Gradient
    </Box>
    <Box padding="space-800" backgroundGradient={{ mobile: 'primary', tablet: 'secondary', desktop: 'secondary' }}>
      Responsive Background Gradient
    </Box>
  </>
);

export default BoxWithBackgroundGradient;
