import figma from '@figma/code-connect';
import React from 'react';
import { SkeletonShape, SkeletonText } from '..';

const SKELETON_NODE_URL = '<FIGMA_FILE_ID>?node-id=35661%3A27096';

figma.connect(SkeletonText, SKELETON_NODE_URL, {
  props: {
    variant: {
      Type: 'rectangle',
    },
  },
  example: (props) => <SkeletonText {...props} />,
});

figma.connect(SkeletonShape, SKELETON_NODE_URL, {
  props: {
    variant: {
      Type: 'circle',
    },
  },
  example: (props) => <SkeletonShape width={58} height={58} borderRadius="full" {...props} />,
});

figma.connect(SkeletonShape, SKELETON_NODE_URL, {
  props: {
    variant: {
      Type: 'square',
    },
  },
  example: (props) => <SkeletonShape width={58} height={58} {...props} />,
});
