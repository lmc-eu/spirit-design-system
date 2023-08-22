// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment, import/extensions, import/no-unresolved
// @ts-ignore: No declaration file
import icons from '@lmc-eu/spirit-icons/dist/icons';
import { IconsProvider } from '../../../context';
import DocsSection from '../../../../docs/DocsSections';
import FileUploader from './FileUploader';
import FileUploaderAccept from './FileUploaderAccept';
import FileUploaderWithImagePreview from './FileUploaderWithImagePreview';
import FileUploaderDismissible from './FileUploaderDismissible';
import FileUploaderFluid from './FileUploaderFluid';
import FileUploaderValidationState from './FileUploaderValidationState';
import FileUploaderUncontrolled from './FileUploaderUncontrolled';
import FormWithFileUploader from './FormWithFileUploader';
import FormWithUncontrolledFileUploader from './FormWithUncontrolledFileUploader';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IconsProvider value={icons}>
      <DocsSection title="Default">
        <FileUploader id="fileUploaderExample" />
      </DocsSection>
      <DocsSection title="Accept">
        <FileUploaderAccept />
      </DocsSection>
      <DocsSection title="With Image Preview">
        <FileUploaderWithImagePreview />
      </DocsSection>
      <DocsSection title="Dismissible">
        <FileUploaderDismissible id="fileUploaderDismissibleExample" />
      </DocsSection>
      <DocsSection title="Fluid">
        <FileUploaderFluid id="fileUploaderFluidExample" />
      </DocsSection>
      <DocsSection title="ValidationState">
        <FileUploaderValidationState />
      </DocsSection>
      <DocsSection title="Uncontrolled">
        <FileUploaderUncontrolled {...FileUploaderUncontrolled.args} />
      </DocsSection>
      <DocsSection title="Form With FileUploader">
        <FormWithFileUploader />
      </DocsSection>
      <DocsSection title="Form With Uncontrolled FileUploader">
        <FormWithUncontrolledFileUploader />
      </DocsSection>
    </IconsProvider>
  </React.StrictMode>,
);
