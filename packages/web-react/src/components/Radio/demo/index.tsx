// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment, import/extensions, import/no-unresolved
// @ts-ignore: No declaration file
import icons from '@lmc-eu/spirit-icons/dist/icons';
import { IconsProvider } from '../../../context';
import DocsSection from '../../../../docs/DocsSections';
import Radio from './Radio';
import RadioValidationState from './RadioValidationState';
import RadioHelperText from './RadioHelperText';
import RadioDisabled from './RadioDisabled';
import RadioItem from './RadioItem';
import RadioList from './RadioList';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IconsProvider value={icons}>
      <DocsSection title="Default">
        <Radio label="Field label" />
      </DocsSection>
      <DocsSection title="Validation State">
        <RadioValidationState />
      </DocsSection>
      <DocsSection title="Helper Text">
        <RadioHelperText {...RadioHelperText.args} />
      </DocsSection>
      <DocsSection title="Disabled">
        <RadioDisabled />
      </DocsSection>
      <DocsSection title="Item">
        <RadioItem />
      </DocsSection>
      <DocsSection title="List">
        <RadioList />
      </DocsSection>
    </IconsProvider>
  </React.StrictMode>,
);
