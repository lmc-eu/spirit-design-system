// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment, import/extensions, import/no-unresolved
// @ts-ignore: No declaration file -- @see https://jira.almacareer.tech/browse/DS-561
import icons from '@lmc-eu/spirit-icons/icons';
import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import { IconsProvider } from '../../../context';
import RadioDefault from './RadioDefault';
import RadioDisabled from './RadioDisabled';
import RadioHelperText from './RadioHelperText';
import RadioHiddenLabel from './RadioHiddenLabel';
import RadioItem from './RadioItem';
import RadioLongLabelText from './RadioLongLabelText';
import RadioValidation from './RadioValidation';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IconsProvider value={icons}>
      <DocsSection title="Default">
        <RadioDefault />
      </DocsSection>
      <DocsSection title="With Long Label Text">
        <RadioLongLabelText />
      </DocsSection>
      <DocsSection title="Hidden Label">
        <RadioHiddenLabel />
      </DocsSection>
      <DocsSection title="Helper Text">
        <RadioHelperText />
      </DocsSection>
      <DocsSection title="Disabled">
        <RadioDisabled />
      </DocsSection>
      <DocsSection title="Validation State">
        <RadioValidation />
      </DocsSection>
      <DocsSection title="Item">
        <RadioItem />
      </DocsSection>
    </IconsProvider>
  </React.StrictMode>,
);
