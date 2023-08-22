// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment, import/extensions, import/no-unresolved
// @ts-ignore: No declaration file
import icons from '@lmc-eu/spirit-icons/dist/icons';
import { IconsProvider } from '../../../context';
import DocsSection from '../../../../docs/DocsSections';
import TextField from './TextField';
import TextFieldDisabled from './TextFieldDisabled';
import TextFieldFluid from './TextFieldFluid';
import TextFieldInputWidth from './TextFieldInputWidth';
import TextFieldLabelHidden from './TextFieldLabelHidden';
import TextFieldPasswordToggle from './TextFieldPasswordToggle';
import TextFieldLabelRequired from './TextFieldRequired';
import TextFieldType from './TextFieldType';
import TextFieldValidationState from './TextFieldValidationState';
import TextFieldHelperText from './TextFieldHelperText';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IconsProvider value={icons}>
      <DocsSection title="Default">
        <TextField {...TextField.args} />
      </DocsSection>
      <DocsSection title="Disabled">
        <TextFieldDisabled />
      </DocsSection>
      <DocsSection title="Fluid">
        <TextFieldFluid />
      </DocsSection>
      <DocsSection title="Input Width">
        <TextFieldInputWidth />
      </DocsSection>
      <DocsSection title="Label Hidden">
        <TextFieldLabelHidden />
      </DocsSection>
      <DocsSection title="Password Toggle">
        <TextFieldPasswordToggle />
      </DocsSection>
      <DocsSection title="Required">
        <TextFieldLabelRequired />
      </DocsSection>
      <DocsSection title="Field Type">
        <TextFieldType />
      </DocsSection>
      <DocsSection title="Validation State">
        <TextFieldValidationState />
      </DocsSection>
      <DocsSection title="Helper Text">
        <TextFieldHelperText {...TextFieldHelperText.args} />
      </DocsSection>
    </IconsProvider>
  </React.StrictMode>,
);
