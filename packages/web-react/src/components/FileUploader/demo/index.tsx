// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment, import/extensions, import/no-unresolved
// @ts-ignore: No declaration file
import icons from '@lmc-eu/spirit-icons/dist/icons';
import DocsSection from '../../../../docs/DocsSections';
import { IconsProvider } from '../../../context';
import FileUploaderDefault from './FileUploaderDefault';
import FileUploaderInputMultiple from './FileUploaderInputMultiple';
import FileUploaderMultipleWithValidation from './FileUploaderMultipleWithValidation';
import FileUploaderInputMultipleWithFileQueueBehaviorControl from './FileUploaderInputMultipleWithFileQueueBehaviorControl';
import FileUploaderInputValidationStates from './FileUploaderInputValidationStates';
import FileUploaderInputDisabled from './FileUploaderInputDisabled';
import FileUploaderAttachment from './FileUploaderAttachment';
import FileUploaderAttachmentWithImagePreview from './FileUploaderAttachmentWithImagePreview';
import FileUploaderAttachmentWithCustomAction from './FileUploaderAttachmentWithCustomAction';
import FileUploaderInputWithAttachment from './FileUploaderInputWithAttachment';
import FileUploaderDraggingNotAvailable from './FileUploaderDraggingNotAvailable';
import FileUploaderFluidWidth from './FileUploaderFluidWidth';
import FileUploaderExampleOfJSControlledForm from './FileUploaderExampleOfJSControlledForm';
import FileUploaderMetaData from './FileUploaderMetaData';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IconsProvider value={icons}>
      <DocsSection title="Input">
        <FileUploaderDefault />
      </DocsSection>
      <DocsSection title="Input Multiple">
        <FileUploaderInputMultiple />
      </DocsSection>
      <DocsSection title="Input Multiple with Validation">
        <FileUploaderMultipleWithValidation />
      </DocsSection>
      <DocsSection title="Input Multiple with File Queue Behavior Control">
        <FileUploaderInputMultipleWithFileQueueBehaviorControl />
      </DocsSection>
      <DocsSection title="Input Validation States">
        <FileUploaderInputValidationStates />
      </DocsSection>
      <DocsSection title="Input Disabled">
        <FileUploaderInputDisabled />
      </DocsSection>
      <DocsSection title="Attachment" tag="Visual demo only">
        <FileUploaderAttachment />
      </DocsSection>
      <DocsSection title="Attachment with Image Preview">
        <FileUploaderAttachmentWithImagePreview />
      </DocsSection>
      <DocsSection title="Attachment with Custom Actions">
        <FileUploaderAttachmentWithCustomAction />
      </DocsSection>
      <DocsSection title="FileUploader with Meta Data">
        <FileUploaderMetaData />
      </DocsSection>
      <DocsSection title="Input with Attachment" tag="Visual demo only">
        <FileUploaderInputWithAttachment />
      </DocsSection>
      <DocsSection title="Dragging not Available" tag="Visual demo only">
        <FileUploaderDraggingNotAvailable />
      </DocsSection>
      <DocsSection title="Fluid Width" tag="Visual demo only">
        <FileUploaderFluidWidth />
      </DocsSection>
      <DocsSection title="Example of JS-Controlled Form">
        <FileUploaderExampleOfJSControlledForm />
      </DocsSection>
    </IconsProvider>
  </React.StrictMode>,
);
