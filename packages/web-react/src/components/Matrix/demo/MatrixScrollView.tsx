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
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.',
  ],
];

const MatrixScrollView = () => (
  <ScrollView direction="horizontal">
    <Matrix cols={3}>
      {columns.map((column, index) => (
        <MatrixItemFactory key={`scroll-view-${column}`} hasStack itemKey={`scroll-view-${index}`} items={column} />
      ))}
    </Matrix>
  </ScrollView>
);

export default MatrixScrollView;
