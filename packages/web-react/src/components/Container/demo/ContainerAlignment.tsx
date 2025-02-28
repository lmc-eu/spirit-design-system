import React from 'react';
import DocsBox from '../../../../docs/DocsBox';
import { TextAlignments } from '../../../constants';
import Container from '../Container';

const ContainerAlignment = () => (
  <>
    <Container>
      <DocsBox>Container</DocsBox>
    </Container>
    <Container textAlignment={TextAlignments.CENTER}>
      <DocsBox>Container</DocsBox>
    </Container>
    <Container textAlignment={TextAlignments.RIGHT}>
      <DocsBox>Container</DocsBox>
    </Container>
  </>
);

export default ContainerAlignment;
