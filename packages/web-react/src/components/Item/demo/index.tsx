import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: No declaration file
// eslint-disable-next-line import/extensions, import/no-unresolved
import icons from '@lmc-eu/spirit-icons/dist/icons';
import DocsSection from '../../../../docs/DocsSections';
import { IconsProvider } from '../../../context';
import CheckboxItem from './CheckboxItem';
import ItemDefault from './ItemDefault';
import ItemDisabled from './ItemDisabled';
import ItemHelperText from './ItemHelperText';
import ItemIcon from './ItemIcon';
import ItemSelected from './ItemSelected';
import RadioItem from './RadioItem';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IconsProvider value={icons}>
      <DocsSection title="Default">
        <ItemDefault />
      </DocsSection>
      <DocsSection title="Selected">
        <ItemSelected />
      </DocsSection>
      <DocsSection title="Disabled">
        <ItemDisabled />
      </DocsSection>
      <DocsSection title="Helper Text">
        <ItemHelperText />
      </DocsSection>
      <DocsSection title="Icon">
        <ItemIcon />
      </DocsSection>
      <DocsSection title="Checkbox Item">
        <CheckboxItem />
      </DocsSection>
      <DocsSection title="Radio Item">
        <RadioItem />
      </DocsSection>
    </IconsProvider>
  </React.StrictMode>,
);
