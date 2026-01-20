import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSection';
import HiddenDefault from './HiddenDefault';
import HiddenFrom from './HiddenFrom';
import HiddenOn from './HiddenOn';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Default">
      <HiddenDefault />
    </DocsSection>

    <DocsSection title="Hidden on Specific Breakpoints">
      <HiddenOn />
    </DocsSection>

    <DocsSection title="Hidden from Breakpoint Onwards">
      <HiddenFrom />
    </DocsSection>
  </React.StrictMode>,
);
