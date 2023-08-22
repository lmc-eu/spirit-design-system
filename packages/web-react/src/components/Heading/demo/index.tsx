import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import Heading from './Heading';
import HeadingSizes from './HeadingSizes';
import HeadingLinks from './HeadingLinks';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Default">
      <Heading {...Heading.args} />
    </DocsSection>
    <DocsSection title="Sizes">
      <HeadingSizes />
    </DocsSection>
    <DocsSection title="Links">
      <HeadingLinks />
    </DocsSection>
  </React.StrictMode>,
);
