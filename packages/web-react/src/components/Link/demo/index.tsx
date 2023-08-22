import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import Link from './Link';
import LinkColors from './LinkColors';
import LinkDisabled from './DisabledLink';
import UnderlinedLink from './UnderlinedLink';
import LinkDisabledUnderlined from './DisabledUnderlinedLink';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Default">
      <Link {...Link.args} />
    </DocsSection>
    <DocsSection title="Colors">
      <LinkColors />
    </DocsSection>
    <DocsSection title="Disabled">
      <LinkDisabled />
    </DocsSection>
    <DocsSection title="Underlined">
      <UnderlinedLink />
    </DocsSection>
    <DocsSection title="Underlined disabled">
      <LinkDisabledUnderlined />
    </DocsSection>
  </React.StrictMode>,
);
