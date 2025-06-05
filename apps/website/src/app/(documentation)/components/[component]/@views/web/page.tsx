import { Container, TabPane } from '@lmc-eu/spirit-web-react';
import { ucFirst } from '@local/lib/helpers';
import React from 'react';

interface WebTabPageProps {
  params: Promise<{ component: string }>;
}

const WebTabPage = async ({ params }: WebTabPageProps) => {
  const { component } = await params;
  const { default: ReadMe } = await import(`@lmc-eu/spirit-web/src/scss/components/${ucFirst(component)}/README.md`);

  return (
    <TabPane id="web">
      <Container>
        <ReadMe />
      </Container>
    </TabPane>
  );
};

export default WebTabPage;
