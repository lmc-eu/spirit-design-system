import React from 'react';
import DocsBox from '../../../../docs/DocsBox';
import { Stack } from '../../Stack';

type MatrixItemFactoryProps = {
  hasStack?: boolean;
  items: string[];
};

const MatrixItemFactory = ({ items, hasStack }: MatrixItemFactoryProps) => {
  const Wrapper = hasStack ? Stack : React.Fragment;

  return (
    <Wrapper {...(hasStack ? { hasSpacing: true } : {})}>
      {items.map((item) => (
        <DocsBox key={`docs-box-${item}`} isMultiline>
          {item}
        </DocsBox>
      ))}
    </Wrapper>
  );
};
export default MatrixItemFactory;
