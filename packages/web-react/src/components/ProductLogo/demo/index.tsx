import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSection';
import ProductLogoDefault from './ProductLogoDefault';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Default">
      <ProductLogoDefault />
    </DocsSection>
  </React.StrictMode>,
);
