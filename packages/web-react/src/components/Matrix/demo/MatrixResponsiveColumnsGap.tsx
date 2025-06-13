import React from 'react';
import { ScrollView } from '../../ScrollView';
import Matrix from '../Matrix';
import MatrixItemFactory from './MatrixItemFactory';

const columns = [
  [
    'Stack 1',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.',
    'Lorem ipsum',
  ],
  [
    'Stack 2',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.',
  ],
  [
    'Stack 3',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.',
    'Lorem ipsum',
  ],
  [
    'Stack 4',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.',
  ],
];

const MatrixResponsiveColumnsGap = () => (
  <ScrollView direction="horizontal" data-spirit-toggle="scrollView">
    <Matrix
      cols={{ mobile: 1, tablet: 2 }}
      itemRows={3}
      rows={{ mobile: 4, tablet: 2 }}
      spacingX={{ tablet: 'space-1200' }}
      spacingY="space-1200"
    >
      {columns.map((column) => (
        <MatrixItemFactory key={`responsive-cols-${column}`} items={column} hasStack />
      ))}
    </Matrix>
  </ScrollView>
);

export default MatrixResponsiveColumnsGap;
