import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import PartnerLogoDefault from './PartnerLogoDefault';
import PartnerLogoSafeAreaDisabled from './PartnerLogoSafeAreaDisabled';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Default" hasStack={false}>
      <PartnerLogoDefault />
    </DocsSection>
    <DocsSection title="Disabled safe area" hasStack={false}>
      <PartnerLogoSafeAreaDisabled />
    </DocsSection>
  </React.StrictMode>,
);
