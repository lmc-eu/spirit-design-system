import React from 'react';
import DocsBox from '../../../../docs/DocsBox';
import { AlignmentX } from '../../../constants';
import Container from '../Container';

const ContainerAlignment = () => (
  <>
    <Container>
      <DocsBox>Container</DocsBox>
    </Container>
    <Container textAlignment={AlignmentX.CENTER}>
      <DocsBox>Container</DocsBox>
    </Container>
    <Container textAlignment={AlignmentX.RIGHT}>
      <DocsBox>Container</DocsBox>
    </Container>
  </>
);

export default ContainerAlignment;
