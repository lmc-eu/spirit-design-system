import figma from '@figma/code-connect';
import React from 'react';
import PartnerLogo from '../PartnerLogo';

figma.connect(PartnerLogo, '<FIGMA_FILE_ID>?node-id=19750%3A16047', {
  props: {
    size: figma.enum('Size', {
      Large: 'large',
      Small: 'small',
    }),
  },
  example: (props) => <PartnerLogo {...props}>Logo Placeholder</PartnerLogo>,
});
