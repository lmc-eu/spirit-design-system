// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment, import/extensions, import/no-unresolved
// @ts-ignore: No declaration file -- @see https://jira.almacareer.tech/browse/DS-561
import icons from '@lmc-eu/spirit-icons/icons';
import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import { IconsProvider } from '../../../context';
import TextFieldDefault from './TextFieldDefault';
import TextFieldDisabled from './TextFieldDisabled';
import TextFieldFluid from './TextFieldFluid';
import TextFieldHelperText from './TextFieldHelperText';
import TextFieldHiddenLabel from './TextFieldHiddenLabel';
import TextFieldInline from './TextFieldInline';
import TextFieldInputWidth from './TextFieldInputWidth';
import TextFieldPasswordToggle from './TextFieldPasswordToggle';
import TextFieldRequired from './TextFieldRequired';
import TextFieldValidation from './TextFieldValidation';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IconsProvider value={icons}>
      <DocsSection title="Default">
        <TextFieldDefault />
      </DocsSection>
      <DocsSection title="Required">
        <TextFieldRequired />
      </DocsSection>
      <DocsSection title="Hidden Label">
        <TextFieldHiddenLabel />
      </DocsSection>
      <DocsSection title="Helper Text">
        <TextFieldHelperText />
      </DocsSection>
      <DocsSection title="Disabled">
        <TextFieldDisabled />
      </DocsSection>
      <DocsSection title="Validation State with Validation Text">
        <TextFieldValidation />
      </DocsSection>
      <DocsSection title="Fluid">
        <TextFieldFluid />
      </DocsSection>
      <DocsSection title="Size">
        <TextFieldInputWidth />
      </DocsSection>
      <DocsSection title="Inline">
        <TextFieldInline />
      </DocsSection>
      <DocsSection title="Password Toggle">
        <TextFieldPasswordToggle />
      </DocsSection>
    </IconsProvider>
  </React.StrictMode>,
);
