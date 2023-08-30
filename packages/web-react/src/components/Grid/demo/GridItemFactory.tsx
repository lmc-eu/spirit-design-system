import React from 'react';
import DocsBox from '../../../../docs/DocsBox';

type GridItemFactoryProps = {
  items: number;
  label: string;
};

const GridItemFactory = ({ items, label }: GridItemFactoryProps) => {
  return (
    <>
      {Array.from({ length: items }, (_, index) => (
        <DocsBox key={`${label}-${index}`} size="small">
          {label}
        </DocsBox>
      ))}
    </>
  );
};

export default GridItemFactory;
