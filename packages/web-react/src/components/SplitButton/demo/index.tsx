// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
// @ts-ignore: No declaration file -- @see https://jira.almacareer.tech/browse/DS-561
import icons from '@lmc-eu/spirit-icons/icons';
import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSection';
import { IconsProvider } from '../../../context';
import SplitButtonDefault from './SplitButtonDefault';
import SplitButtonDisabled from './SplitButtonDisabled';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IconsProvider value={icons}>
      <DocsSection title="Default">
        <SplitButtonDefault />
      </DocsSection>
      <DocsSection title="Disabled">
        <SplitButtonDisabled />
      </DocsSection>
    </IconsProvider>
  </React.StrictMode>,
);
