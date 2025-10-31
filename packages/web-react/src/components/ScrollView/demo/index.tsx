// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment, import/extensions, import/no-unresolved
// @ts-ignore: No declaration file -- @see https://jira.almacareer.tech/browse/DS-561
import icons from '@lmc-eu/spirit-icons/icons';
import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSection';
import { IconsProvider } from '../../../context';
import ScrollViewDefault from './ScrollViewDefault';
import ScrollViewHiddenScrollbar from './ScrollViewHiddenScrollbar';
import ScrollViewHorizontal from './ScrollViewHorizontal';
import ScrollViewHorizontalBreakout from './ScrollViewHorizontalBreakout';
import ScrollViewHorizontalWithArrows from './ScrollViewHorizontalWithArrows';
import ScrollViewHorizontalWithArrowsAndHiddenScrollbar from './ScrollViewHorizontalWithArrowsAndHiddenScrollbar';
import ScrollViewOverflowDecorators from './ScrollViewOverflowDecorators';
import ScrollViewVerticalWithArrows from './ScrollViewVerticalWithArrows';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IconsProvider value={icons}>
      <DocsSection title="Vertical Scrolling">
        <ScrollViewDefault />
      </DocsSection>
      <DocsSection title="Horizontal Scrolling">
        <ScrollViewHorizontal />
      </DocsSection>
      <DocsSection title="Horizontal Scrolling with Container Breakout" hasStack={false}>
        <ScrollViewHorizontalBreakout />
      </DocsSection>
      <DocsSection title="Overflow Decorators">
        <ScrollViewOverflowDecorators />
      </DocsSection>
      <DocsSection title="Hidden Scrollbar">
        <ScrollViewHiddenScrollbar />
      </DocsSection>
      <DocsSection title="Vertical Scrolling with Arrows">
        <ScrollViewVerticalWithArrows />
      </DocsSection>
      <DocsSection title="Horizontal Scrolling with Arrows">
        <ScrollViewHorizontalWithArrows />
      </DocsSection>
      <DocsSection title="Horizontal Scrolling with Arrows and Hidden Scrollbar">
        <ScrollViewHorizontalWithArrowsAndHiddenScrollbar />
      </DocsSection>
    </IconsProvider>
  </React.StrictMode>,
);
