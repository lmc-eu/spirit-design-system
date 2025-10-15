// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment, import/extensions, import/no-unresolved
// @ts-ignore: No declaration file -- @see https://jira.almacareer.tech/browse/DS-561
import icons from '@alma-oss/spirit-icons/icons';
import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSection';
import { IconsProvider } from '../../../context';
import TimelineColors from './TimelineColors';
import TimelineDefault from './TimelineDefault';
import TimelineDots from './TimelineDots';
import TimelineIcons from './TimelineIcons';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IconsProvider value={icons}>
      <DocsSection title="Basic Usage with Numbers">
        <TimelineDefault />
      </DocsSection>
      <DocsSection title="With Colored Numbers">
        <TimelineColors />
      </DocsSection>
      <DocsSection title="With Dots">
        <TimelineDots />
      </DocsSection>
      <DocsSection title="With Icon Component">
        <TimelineIcons />
      </DocsSection>
    </IconsProvider>
  </React.StrictMode>,
);
