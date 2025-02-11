import React from 'react';
import DocsBox from '../../../../docs/DocsBox';
import DocsSection from '../../../../docs/DocsSections';
import { SizesExtended } from '../../../constants';
import Container from '../Container';

const ContainerSizes = () => {
  const sizes = Object.values(SizesExtended);

  return (
    <>
      {sizes.map((size) => (
        <DocsSection title={`Size ${size}`} stackAlignment="stretch" key={size} container="heading-only">
          <Container size={size}>
            <DocsBox>Container of {size} size</DocsBox>
          </Container>
        </DocsSection>
      ))}
    </>
  );
};

export default ContainerSizes;
