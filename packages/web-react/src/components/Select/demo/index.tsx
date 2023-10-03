// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment, import/extensions, import/no-unresolved
// @ts-ignore: No declaration file
import icons from '@lmc-eu/spirit-icons/dist/icons';
import DocsSection from '../../../../docs/DocsSections';
import { IconsProvider } from '../../../context';
import SelectSimple from './SelectSimple';
import SelectRequired from './SelectRequired';
import SelectHiddenLabel from './SelectHiddenLabel';
import SelectPlaceholder from './SelectPlaceholder';
import SelectHelperText from './SelectHelperText';
import SelectDisabled from './SelectDisabled';
import SelectValidation from './SelectValidation';
import SelectFluid from './SelectFluid';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IconsProvider value={icons}>
      <DocsSection title="Default">
        <SelectSimple />
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
      <DocsSection title="Fluid">
        <SelectFluid />
      </DocsSection>
    </IconsProvider>
  </React.StrictMode>,
);
