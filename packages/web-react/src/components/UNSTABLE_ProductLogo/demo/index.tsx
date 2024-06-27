import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import ProductLogoDefault from './ProductLogoDefault';
import ProductLogoInverted from './ProductLogoInverted';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Default">
      <ProductLogoDefault />
    </DocsSection>

    <DocsSection title="Inverted">
      <ProductLogoInverted />
    </DocsSection>
  </React.StrictMode>,
);
