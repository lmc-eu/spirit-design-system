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

const MatrixColumnsWithScrollView = () => (
  <ScrollView direction="horizontal">
    <Matrix spacingX="space-1200" cols={4}>
      {columns.map((column, index) => (
        <MatrixItemFactory
          key={`cols-with-scroll-view-${column}`}
          hasStack
          itemKey={`cols-with-scroll-view-${index}`}
          items={column}
        />
      ))}
    </Matrix>
  </ScrollView>
);

export default MatrixColumnsWithScrollView;
