import { Container, TabPane } from '@lmc-eu/spirit-web-react';
import { ucFirst } from '@local/lib/helpers';
import React from 'react';

interface ReactTabProps {
  params: Promise<{ component: string }>;
}

const ReactTabPage = async ({ params }: ReactTabProps) => {
  const { component } = await params;
  const { default: ReadMe } = await import(`@lmc-eu/spirit-web-react/src/components/${ucFirst(component)}/README.md`);

  return (
    <TabPane id="react">
      <Container>
        <ReadMe />
      </Container>
    </TabPane>
  );
};

export default ReactTabPage;
