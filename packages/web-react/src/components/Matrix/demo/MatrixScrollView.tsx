import React from 'react';
import DocsBox from '../../../../docs/DocsBox';
import { ScrollView } from '../../ScrollView';
import { Stack } from '../../Stack';
import { Matrix } from '../index';

const MatrixScrollView = () => (
  <ScrollView direction="horizontal" data-spirit-toggle="scrollView">
    <Matrix cols={3}>
      <Stack hasSpacing>
        <DocsBox UNSAFE_className="docs-Box--multiline">Stack 1</DocsBox>
        <DocsBox UNSAFE_className="docs-Box--multiline">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.
        </DocsBox>
        <DocsBox UNSAFE_className="docs-Box--multiline">Lorem ipsum</DocsBox>
      </Stack>
      <Stack hasSpacing>
        <DocsBox UNSAFE_className="docs-Box--multiline">Stack 2</DocsBox>
        <DocsBox UNSAFE_className="docs-Box--multiline">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </DocsBox>
        <DocsBox UNSAFE_className="docs-Box--multiline">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.
        </DocsBox>
      </Stack>
      <Stack hasSpacing>
        <DocsBox UNSAFE_className="docs-Box--multiline">Stack 3</DocsBox>
        <DocsBox UNSAFE_className="docs-Box--multiline">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.
        </DocsBox>
        <DocsBox UNSAFE_className="docs-Box--multiline">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.
        </DocsBox>
      </Stack>
    </Matrix>
  </ScrollView>
);

export default MatrixScrollView;
