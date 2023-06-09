import React from 'react';
import { ComponentStory } from '@storybook/react';
import { SpiritFileUploaderProps } from '../../../types';
import FileUploader from '../FileUploader';
import FileUploaderInput from '../FileUploaderInput';

const Story: ComponentStory<typeof FileUploader> = ({ id, ...args }: SpiritFileUploaderProps) => {
  return (
    <>
      <p>
        <small>These samples are static and only show validation states</small>
      </p>
      <div>
        <FileUploader id="fileUploaderExampleSuccess" {...args}>
          <FileUploaderInput
            id={`${id}_success`}
            name="attachments"
            label="Label"
            linkText="Upload your file(s)"
            labelText="or drag and drop here"
            helperText="Max file size is 10 MB"
            isRequired
            validationState="success"
            validationText="Validation message"
          />
          {/* FileUploaderList */}
        </FileUploader>
        <span className="mr-500" />
        <FileUploader id="fileUploaderExampleWarning" {...args}>
          <FileUploaderInput
            id={`${id}_warning`}
            name="attachments"
            label="Label"
            linkText="Upload your file(s)"
            labelText="or drag and drop here"
            helperText="Max file size is 10 MB"
            isRequired
            validationState="warning"
            validationText="Validation message"
          />
          {/* FileUploaderList */}
        </FileUploader>
        <span className="mr-500" />
        <FileUploader id="fileUploaderExampleDanger" {...args}>
          <FileUploaderInput
            id={`${id}_danger`}
            name="attachments"
            label="Label"
            linkText="Upload your file(s)"
            labelText="or drag and drop here"
            helperText="Max file size is 10 MB"
            isRequired
            validationState="danger"
            validationText="Validation message"
          />
          {/* FileUploaderList */}
        </FileUploader>
      </div>
      <div style={{ paddingTop: '1rem' }}>
        <FileUploader id="fileUploaderExampleErrorMultiple" {...args}>
          <FileUploaderInput
            id={`${id}_errorMultiple`}
            name="attachments"
            label="Label"
            linkText="Upload your file(s)"
            labelText="or drag and drop here"
            helperText="Max file size is 10 MB"
            isRequired
            validationState="danger"
            validationText={['First validation message', 'Second validation message']}
          />
          {/* FileUploaderList */}
        </FileUploader>
      </div>
    </>
  );
};

Story.args = {
  id: 'FileUploaderValidationStateExample',
};

export default Story;
