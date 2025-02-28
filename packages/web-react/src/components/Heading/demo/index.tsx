import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSection';
import HeadingAlignment from './HeadingAlignment';
import HeadingDefault from './HeadingDefault';
import HeadingEmphasis from './HeadingEmphasis';
import HeadingSizes from './HeadingSizes';
import HeadingTextColor from './HeadingTextColor';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Default">
      <HeadingDefault />
    </DocsSection>
    <DocsSection title="Sizes">
      <HeadingSizes />
    </DocsSection>
    <DocsSection title="Emphasis">
      <HeadingEmphasis />
    </DocsSection>
    <DocsSection title="Colors">
      <HeadingTextColor />
    </DocsSection>
    <DocsSection title="Alignment" stackAlignment="stretch">
      <HeadingAlignment />
    </DocsSection>
  </React.StrictMode>,
);
