// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: No declaration file -- @see https://jira.almacareer.tech/browse/DS-561
import icons from '@lmc-eu/spirit-icons/icons';
import DocsSection from '../../../../docs/DocsSections';
import { IconsProvider } from '../../../context';
import AlertCentered from './AlertCentered';
import AlertColors from './AlertColors';
import AlertIcons from './AlertIcons';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IconsProvider value={icons}>
      <DocsSection title="Alert Colors" stackAlignment="stretch">
        <AlertColors />
      </DocsSection>
      <DocsSection title="Alert Centered" stackAlignment="stretch">
        <AlertCentered />
      </DocsSection>
      <DocsSection title="Alert Icons" stackAlignment="stretch">
        <AlertIcons />
      </DocsSection>
      <div className="spirit-feature-alert-enable-bordered">
        <DocsSection title="Feature Flag: Bordered Alert" stackAlignment="stretch">
          <AlertColors />
        </DocsSection>
      </div>
    </IconsProvider>
  </React.StrictMode>,
);
