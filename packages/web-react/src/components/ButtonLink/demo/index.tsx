// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment, import/extensions, import/no-unresolved
// @ts-ignore: No declaration file -- @see https://jira.almacareer.tech/browse/DS-561
import icons from '@alma-oss/spirit-icons/icons';
import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSection';
import { IconsProvider } from '../../../context';
import ButtonLinkDefault from './ButtonLinkDefault';
import ButtonLinkDisabled from './ButtonLinkDisabled';
import ButtonLinkFluid from './ButtonLinkFluid';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IconsProvider value={icons}>
      <DocsSection title="Default" stackAlignment="stretch">
        <ButtonLinkDefault />
      </DocsSection>
      <DocsSection title="Disabled" stackAlignment="stretch">
        <ButtonLinkDisabled />
      </DocsSection>
      <DocsSection title="Fluid" stackAlignment="stretch">
        <ButtonLinkFluid />
      </DocsSection>
    </IconsProvider>
  </React.StrictMode>,
);
