import figma from '@figma/code-connect';
import React from 'react';
import { SkeletonShape, SkeletonText } from '..';

const SKELETON_NODE_URL = '<FIGMA_FILE_ID>?node-id=27632%3A5746';

figma.connect(SkeletonText, SKELETON_NODE_URL, {
  props: {},
  variant: {
    Type: 'Rectangle',
  },
  example: (props) => <SkeletonText {...props} />,
});

figma.connect(SkeletonShape, SKELETON_NODE_URL, {
  props: {},
  variant: {
    Type: 'Circle',
  },
  example: (props) => <SkeletonShape width={58} height={58} borderRadius="full" {...props} />,
});

figma.connect(SkeletonShape, SKELETON_NODE_URL, {
  props: {},
  variant: {
    Type: 'Square',
  },
  example: (props) => <SkeletonShape width={58} height={58} {...props} />,
});
