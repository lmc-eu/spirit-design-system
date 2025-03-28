import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSection';
import PartnerLogoDefault from './PartnerLogoDefault';
import PartnerLogoFluid from './PartnerLogoFluid';
import PartnerLogoSafeAreaDisabled from './PartnerLogoSafeAreaDisabled';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Default" hasStack={false}>
      <PartnerLogoDefault />
    </DocsSection>
    <DocsSection title="Disabled safe area" hasStack={false}>
      <PartnerLogoSafeAreaDisabled />
    </DocsSection>
    <DocsSection title="Fluid Size" hasStack={false}>
      <PartnerLogoFluid />
    </DocsSection>
  </React.StrictMode>,
);
