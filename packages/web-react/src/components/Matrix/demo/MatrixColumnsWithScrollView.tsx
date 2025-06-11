import React from 'react';
import DocsBox from '../../../../docs/DocsBox';
import { ScrollView } from '../../ScrollView';
import { Stack } from '../../Stack';
import { Matrix } from '../index';

const MatrixColumnsWithScrollView = () => (
  <ScrollView direction="horizontal" data-spirit-toggle="scrollView">
    <Matrix spacingX="space-1200" cols={4}>
      <Stack hasSpacing>
        <DocsBox isMultiline>Stack 1</DocsBox>
        <DocsBox isMultiline>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.
        </DocsBox>
        <DocsBox isMultiline>Lorem ipsum</DocsBox>
      </Stack>
      <Stack hasSpacing>
        <DocsBox isMultiline>Stack 2</DocsBox>
        <DocsBox isMultiline>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</DocsBox>
        <DocsBox isMultiline>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.
        </DocsBox>
      </Stack>
      <Stack hasSpacing>
        <DocsBox isMultiline>Stack 3</DocsBox>
        <DocsBox isMultiline>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.
        </DocsBox>
        <DocsBox isMultiline>Lorem ipsum</DocsBox>
      </Stack>
      <Stack hasSpacing>
        <DocsBox isMultiline>Stack 4</DocsBox>
        <DocsBox isMultiline>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</DocsBox>
        <DocsBox isMultiline>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.
        </DocsBox>
      </Stack>
    </Matrix>
  </ScrollView>
);

export default MatrixColumnsWithScrollView;
