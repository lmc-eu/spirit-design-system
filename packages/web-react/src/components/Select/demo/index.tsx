// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment, import/extensions, import/no-unresolved
// @ts-ignore: No declaration file -- @see https://jira.almacareer.tech/browse/DS-561
import icons from '@lmc-eu/spirit-icons/icons';
import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSection';
import { IconsProvider } from '../../../context';
import SelectDisabled from './SelectDisabled';
import SelectFluid from './SelectFluid';
import SelectHelperText from './SelectHelperText';
import SelectHiddenLabel from './SelectHiddenLabel';
import SelectPlaceholder from './SelectPlaceholder';
import SelectRequired from './SelectRequired';
import SelectSimple from './SelectSimple';
import SelectSizes from './SelectSizes';
import SelectValidation from './SelectValidation';
import SelectValidationWithIcon from './SelectValidationWithIcon';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IconsProvider value={icons}>
      <DocsSection title="Default">
        <SelectSimple />
      </DocsSection>
      <DocsSection title="Sizes">
        <SelectSizes />
      </DocsSection>
      <DocsSection title="Required with Placeholder">
        <SelectRequired />
      </DocsSection>
      <DocsSection title="Hidden Label">
        <SelectHiddenLabel />
      </DocsSection>
      <DocsSection title="Placeholder">
        <SelectPlaceholder />
      </DocsSection>
      <DocsSection title="Helper Text">
        <SelectHelperText />
      </DocsSection>
      <DocsSection title="Disabled">
        <SelectDisabled />
      </DocsSection>
      <DocsSection title="Validation State with Validation Text">
        <SelectValidation />
      </DocsSection>
      <DocsSection title="Validation Text with Icon">
        <SelectValidationWithIcon />
      </DocsSection>
      <DocsSection title="Fluid">
        <SelectFluid />
      </DocsSection>
    </IconsProvider>
  </React.StrictMode>,
);
