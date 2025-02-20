// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment, import/extensions, import/no-unresolved
// @ts-ignore: No declaration file -- @see https://jira.almacareer.tech/browse/DS-561
import icons from '@lmc-eu/spirit-icons/icons';
import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSection';
import { IconsProvider } from '../../../context';
import ToggleDefault from './ToggleDefault';
import ToggleDisabled from './ToggleDisabled';
import ToggleFluid from './ToggleFluid';
import ToggleHelperText from './ToggleHelperText';
import ToggleHiddenLabel from './ToggleHiddenLabel';
import ToggleIndicators from './ToggleIndicators';
import ToggleRequired from './ToggleRequired';
import ToggleValidation from './ToggleValidation';
import ToggleValidationWithIcon from './ToggleValidationWithIcon';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IconsProvider value={icons}>
      <DocsSection title="Default" stackAlignment="stretch">
        <ToggleDefault />
      </DocsSection>
      <DocsSection title="Indicators" stackAlignment="stretch">
        <ToggleIndicators />
      </DocsSection>
      <DocsSection title="Required" stackAlignment="stretch">
        <ToggleRequired />
      </DocsSection>
      <DocsSection title="Hidden Label" stackAlignment="stretch">
        <ToggleHiddenLabel />
      </DocsSection>
      <DocsSection title="Fluid" stackAlignment="stretch">
        <ToggleFluid />
      </DocsSection>
      <DocsSection title="Disabled" stackAlignment="stretch">
        <ToggleDisabled />
      </DocsSection>
      <DocsSection title="Helper Text" stackAlignment="stretch">
        <ToggleHelperText />
      </DocsSection>
      <DocsSection title="Validation State with Validation Text" stackAlignment="stretch">
        <ToggleValidation />
      </DocsSection>
      <DocsSection title="Validation Text with Icon" stackAlignment="stretch">
        <ToggleValidationWithIcon />
      </DocsSection>
    </IconsProvider>
  </React.StrictMode>,
);
