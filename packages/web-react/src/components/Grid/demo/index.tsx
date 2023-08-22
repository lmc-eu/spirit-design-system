import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import {
  EqualColumns,
  FiveColumns,
  FourColumns,
  ResponsiveColumns,
  SixColumns,
  ThreeColumns,
  TwoColumns,
} from '../Grid.stories';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Equal">
      <EqualColumns {...EqualColumns.args} />
    </DocsSection>
    <DocsSection title="Six Columns">
      <SixColumns {...SixColumns.args} />
    </DocsSection>
    <DocsSection title="Five Columns">
      <FiveColumns {...FiveColumns.args} />
    </DocsSection>
    <DocsSection title="Four Columns">
      <FourColumns {...FourColumns.args} />
    </DocsSection>
    <DocsSection title="Three Columns">
      <ThreeColumns {...ThreeColumns.args} />
    </DocsSection>
    <DocsSection title="Two Columns">
      <TwoColumns {...TwoColumns.args} />
    </DocsSection>
    <DocsSection title="Responsive Columns">
      <ResponsiveColumns {...ResponsiveColumns.args} />
    </DocsSection>
  </React.StrictMode>,
);
