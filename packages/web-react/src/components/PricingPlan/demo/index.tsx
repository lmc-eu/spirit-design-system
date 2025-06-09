import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSection';
import PricingPlanDefault from './PricingPlanDefault';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Default" hasStack={false}>
      <PricingPlanDefault />
    </DocsSection>
  </React.StrictMode>,
);
