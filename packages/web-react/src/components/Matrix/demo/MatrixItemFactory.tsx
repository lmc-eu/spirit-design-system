import React from 'react';
import DocsBox from '../../../../docs/DocsBox';

type MatrixItemFactoryProps = {
  items: number;
  label: string;
};

const MatrixItemFactory = ({ items, label }: MatrixItemFactoryProps) => (
  <>
    {Array.from({ length: items }, (_, index) => (
      <DocsBox key={`${label}-${index}`}>
        {label} {index + 1}
      </DocsBox>
    ))}
  </>
);

export default MatrixItemFactory;
