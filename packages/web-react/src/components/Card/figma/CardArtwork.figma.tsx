import figma from '@figma/code-connect';
import React from 'react';
import { IconBox } from '../../IconBox';
import CardArtwork from '../CardArtwork';

figma.connect(CardArtwork, '<FIGMA_FILE_ID>?node-id=37173%3A2084', {
  props: {
    type: figma.enum('Type', {
      Iconbox: <IconBox color="01" iconName="add" shape="rounded" isSubtle />,
      Illustration: 'Replace with illustration',
    }),
  },
  example: ({ type, ...props }) => <CardArtwork {...props}>{type}</CardArtwork>,
});
