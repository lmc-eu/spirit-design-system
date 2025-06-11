import React from 'react';
import { Matrix } from '../index';
import MatrixItemFactory from './MatrixItemFactory';

const MatrixDefault = () => (
  <Matrix>
    <MatrixItemFactory items={3} label="Item" />
  </Matrix>
);

export default MatrixDefault;
