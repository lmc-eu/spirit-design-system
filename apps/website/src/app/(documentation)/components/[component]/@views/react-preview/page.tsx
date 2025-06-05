import { Container, TabPane } from '@lmc-eu/spirit-web-react';
import { ucFirst } from '@local/lib/helpers';
import React from 'react';

interface ReactPreviewTabProps {
  params: Promise<{ component: string }>;
}

const ReactPreviewTabPage = async ({ params }: ReactPreviewTabProps) => {
  const { component } = await params;
  const { default: Preview } = await import(`@lmc-eu/spirit-web-react/src/components/${ucFirst(component)}/preview`);

  return (
    <TabPane id="react-preview">
      <Container>
        <Preview />
      </Container>
    </TabPane>
  );
};

export default ReactPreviewTabPage;
