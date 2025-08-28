import React from 'react';
import DocsBox from '../../../../docs/DocsBox';
import DocsSection from '../../../../docs/DocsSection';
import { ContainerTokenSizes } from '../../../constants';
import Container from '../Container';

const ContainerSizes = () => {
  const sizes = Object.values(ContainerTokenSizes);

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
