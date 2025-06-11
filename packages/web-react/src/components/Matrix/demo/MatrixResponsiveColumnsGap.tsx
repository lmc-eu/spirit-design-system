import React from 'react';
import DocsBox from '../../../../docs/DocsBox';
import { ScrollView } from '../../ScrollView';
import { Stack } from '../../Stack';
import { Matrix } from '../index';

const MatrixResponsiveColumnsGap = () => (
  <ScrollView direction="horizontal" data-spirit-toggle="scrollView">
    <Matrix
      cols={{ mobile: 1, tablet: 2 }}
      itemRows={3}
      rows={{ mobile: 4, tablet: 2 }}
      spacingX={{ tablet: 'space-1200' }}
      spacingY="space-1200"
    >
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

export default MatrixResponsiveColumnsGap;
