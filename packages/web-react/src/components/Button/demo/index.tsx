// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment, import/extensions, import/no-unresolved
// @ts-ignore: No declaration file
import icons from '@lmc-eu/spirit-icons/dist/icons';
import { IconsProvider } from '../../../context';
import DocsSection from '../../../../docs/DocsSections';
import Button from './Button';
import ButtonLinkColors from './ButtonLinkColors';
import ButtonDisabled from './ButtonDisabled';
import ButtonLoading from './ButtonLoading';
import ButtonSquare from './ButtonSquare';
import ButtonBlock from './ButtonBlock';
import ButtonSize from './ButtonSize';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IconsProvider value={icons}>
      <DocsSection title="Default">
        <Button {...Button.args} />
      </DocsSection>
      <DocsSection title="Link Colors">
        <ButtonLinkColors />
      </DocsSection>
      <DocsSection title="Disabled">
        <ButtonDisabled />
      </DocsSection>
      <DocsSection title="Loading">
        <ButtonLoading />
      </DocsSection>
      <DocsSection title="Square">
        <ButtonSquare />
      </DocsSection>
      <DocsSection title="Block">
        <ButtonBlock />
      </DocsSection>
      <DocsSection title="Size">
        <ButtonSize />
      </DocsSection>
    </IconsProvider>
  </React.StrictMode>,
);
