import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import { LayoutContainer } from '../Container.stories';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Default">
      <LayoutContainer {...LayoutContainer.args} />
    </DocsSection>
  </React.StrictMode>,
);
