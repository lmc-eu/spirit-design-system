import { Container, TabPane } from '@lmc-eu/spirit-web-react';
import { ucFirst } from '@local/lib/helpers';
import React from 'react';

interface WebPreviewTabProps {
  params: Promise<{ component: string }>;
}

const WebPreviewTabPage = async ({ params }: WebPreviewTabProps) => {
  const { component } = await params;
  const { default: Preview } = await import(
    `@lmc-eu/spirit-web/src/scss/components/${ucFirst(component)}/preview.html`
  );
  const htmlDoc = { __html: Preview };

  return (
    <TabPane id="web-preview">
      <Container>
        <div dangerouslySetInnerHTML={htmlDoc} />
      </Container>
    </TabPane>
  );
};

export default WebPreviewTabPage;
