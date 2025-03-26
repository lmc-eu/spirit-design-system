import React from 'react';
import Box from '../Box';

const BoxWithRadius = () => (
  <>
    <p>For demo purposes, the boxes have custom padding.</p>
    <Box padding="space-800" backgroundColor="secondary">
      Without radius
    </Box>
    <Box padding="space-800" backgroundColor="secondary" borderRadius="300">
      With custom radius
    </Box>
    <Box padding="space-800" backgroundColor="secondary" borderRadius="full">
      With full radius
    </Box>
  </>
);

export default BoxWithRadius;
