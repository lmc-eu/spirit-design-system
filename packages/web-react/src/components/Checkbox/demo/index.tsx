// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment, import/extensions, import/no-unresolved
// @ts-ignore: No declaration file -- @see https://jira.almacareer.tech/browse/DS-561
import icons from '@lmc-eu/spirit-icons/icons';
import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import { IconsProvider } from '../../../context';
import CheckboxDefault from './CheckboxDefault';
import CheckboxDisabled from './CheckboxDisabled';
import CheckboxHelperText from './CheckboxHelperText';
import CheckboxHiddenLabel from './CheckboxHiddenLabel';
import CheckboxIndeterminate from './CheckboxIndeterminate';
import CheckboxItem from './CheckboxItem';
import CheckboxRequired from './CheckboxRequired';
import CheckboxValidation from './CheckboxValidation';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Default">
      <CheckboxDefault />
    </DocsSection>
    <DocsSection title="Indeterminate">
      <CheckboxIndeterminate />
    </DocsSection>
    <DocsSection title="Required">
      <CheckboxRequired />
    </DocsSection>
    <DocsSection title="Hidden Label">
      <CheckboxHiddenLabel />
    </DocsSection>
    <DocsSection title="Helper Text">
      <CheckboxHelperText />
    </DocsSection>
    <DocsSection title="Disabled">
      <CheckboxDisabled />
    </DocsSection>
    <IconsProvider value={icons}>
      <DocsSection title="Validation State with Validation Text">
        <CheckboxValidation />
      </DocsSection>
    </IconsProvider>
    <DocsSection title="Item">
      <CheckboxItem />
    </DocsSection>
  </React.StrictMode>,
);
