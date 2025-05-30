import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSection';
import ContainerAlignment from './ContainerAlignment';
import ContainerDefault from './ContainerDefault';
import ContainerFluid from './ContainerFluid';
import ContainerSizes from './ContainerSizes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Default" stackAlignment="stretch" container="heading-only">
      <ContainerDefault />
    </DocsSection>
    <DocsSection title="Fluid" stackAlignment="stretch" container="heading-only">
      <ContainerFluid />
    </DocsSection>
    <ContainerSizes />
    <DocsSection title="Text Alignment" stackAlignment="stretch" container="heading-only">
      <ContainerAlignment />
    </DocsSection>
  </React.StrictMode>,
);
