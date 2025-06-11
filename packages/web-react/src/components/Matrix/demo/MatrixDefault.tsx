import React from 'react';
import Matrix from '../Matrix';
import MatrixItemFactory from './MatrixItemFactory';

const MatrixDefault = () => (
  <Matrix>
    <MatrixItemFactory itemKey="default" items={['Item 1', 'Item 2', 'Item 3']} />
  </Matrix>
);

export default MatrixDefault;
