// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment, import/extensions, import/no-unresolved
// @ts-ignore: No declaration file
import icons from '@lmc-eu/spirit-icons/dist/icons';
import { IconsProvider } from '../../../context';
import DocsSection from '../../../../docs/DocsSections';
import Tag from './Tag';
import TagColors from './TagColors';
import TagSizes from './TagSizes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IconsProvider value={icons}>
      <DocsSection title="Default">
        <Tag {...Tag.args} />
      </DocsSection>
      <DocsSection title="Colors">
        <TagColors />
      </DocsSection>
      <DocsSection title="Sizes">
        <TagSizes />
      </DocsSection>
    </IconsProvider>
  </React.StrictMode>,
);
