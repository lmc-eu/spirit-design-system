// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment, import/extensions, import/no-unresolved
// @ts-ignore: No declaration file -- @see https://jira.almacareer.tech/browse/DS-561
import icons from '@lmc-eu/spirit-icons/icons';
import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSection';
import { IconsProvider } from '../../../context';
import TextAreaAutoResize from './TextAreaAutoResize';
import TextAreaDefault from './TextAreaDefault';
import TextAreaDisabled from './TextAreaDisabled';
import TextAreaFluid from './TextAreaFluid';
import TextAreaHelperText from './TextAreaHelperText';
import TextAreaHiddenLabel from './TextAreaHiddenLabel';
import TextAreaInline from './TextAreaInline';
import TextAreaRequired from './TextAreaRequired';
import TextAreaSizes from './TextAreaSizes';
import TextAreaValidation from './TextAreaValidation';
import TextAreaValidationWithIcon from './TextAreaValidationWithIcon';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IconsProvider value={icons}>
      <DocsSection title="Default">
        <TextAreaDefault />
      </DocsSection>
      <DocsSection title="Sizes">
        <TextAreaSizes />
      </DocsSection>
      <DocsSection title="Required">
        <TextAreaRequired />
      </DocsSection>
      <DocsSection title="Hidden Label">
        <TextAreaHiddenLabel />
      </DocsSection>
      <DocsSection title="Helper Text">
        <TextAreaHelperText />
      </DocsSection>
      <DocsSection title="Disabled">
        <TextAreaDisabled />
      </DocsSection>
      <DocsSection title="Validation State with Validation Text">
        <TextAreaValidation />
      </DocsSection>
      <DocsSection title="Validation Text with Icon">
        <TextAreaValidationWithIcon />
      </DocsSection>
      <DocsSection title="Fluid">
        <TextAreaFluid />
      </DocsSection>
      <DocsSection title="Inline">
        <TextAreaInline />
      </DocsSection>
      <DocsSection title="AutoResize">
        <TextAreaAutoResize />
      </DocsSection>
    </IconsProvider>
  </React.StrictMode>,
);
