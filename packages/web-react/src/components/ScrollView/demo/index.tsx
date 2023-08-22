import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import ScrollView from './ScrollView';
import ScrollViewHorizontal from './ScrollViewHorizontal';
import ScrollViewScrollbarDisabled from './ScrollViewScrollbarDisabled';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Default">
      <ScrollView {...ScrollView.args} />
    </DocsSection>
    <DocsSection title="Horizontal">
      <ScrollViewHorizontal {...ScrollViewHorizontal.args} />
    </DocsSection>
    <DocsSection title="Scrollbar Disabled">
      <ScrollViewScrollbarDisabled {...ScrollViewScrollbarDisabled.args} />
    </DocsSection>
  </React.StrictMode>,
);
