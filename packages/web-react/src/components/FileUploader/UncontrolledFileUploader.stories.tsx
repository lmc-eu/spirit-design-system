import React, { createRef, FormEvent, MutableRefObject, useState } from 'react';
import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import { ValidationStates } from '../../constants';
import {
  FileQueueMapType,
  SpiritFileUploaderAttachmentProps,
  SpiritUncontrolledFileUploaderProps,
  ValidationState,
} from '../../types';
import { Button } from '../Button';
import FileUploaderAttachment from './FileUploaderAttachment';
import UncontrolledFileUploader from './UncontrolledFileUploader';
import ReadMe from './README.md';

const meta: Meta<typeof UncontrolledFileUploader> = {
  title: 'Components/FileUploader',
  component: UncontrolledFileUploader,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
  argTypes: {
    helperText: {
      control: 'text',
    },
    iconName: {
      control: 'text',
      table: {
        defaultValue: { summary: 'upload' },
      },
    },
    id: {
      control: 'text',
    },
    inputId: {
      control: 'text',
    },
    inputLabel: {
      control: 'text',
    },
    inputName: {
      control: 'text',
    },
    isDisabled: {
      control: 'boolean',
      table: {
        defaultValue: { summary: false },
      },
    },
    isFluid: {
      control: 'boolean',
      table: {
        defaultValue: { summary: false },
      },
    },
    isLabelHidden: {
      control: 'boolean',
      table: {
        defaultValue: { summary: false },
      },
    },
    isMultiple: {
      control: 'boolean',
      table: {
        defaultValue: { summary: false },
      },
    },
    isRequired: {
      control: 'boolean',
      table: {
        defaultValue: { summary: false },
      },
    },
    labelText: {
      control: 'text',
    },
    linkText: {
      control: 'text',
    },
    listId: {
      control: 'text',
    },
    maxFileSize: {
      control: 'number',
      table: {
        defaultValue: { summary: 1000000 },
      },
    },
    maxUploadedFiles: {
      control: 'number',
      table: {
        defaultValue: { summary: 10 },
      },
    },
    queueLimitBehavior: {
      control: 'select',
      options: ['hide', 'disable', 'none'],
      table: {
        defaultValue: { summary: 'none' },
      },
    },
    validationState: {
      control: 'select',
      options: [...Object.values(ValidationStates), undefined],
      table: {
        defaultValue: { summary: undefined },
      },
    },
    validationText: {
      control: 'object',
      description:
        'The validation text. Only visible if validationState is set. Use a string `"foo"` for single validation text or an array for multiple validation texts `["foo", "bar"]`.',
    },
  },
  args: {
    id: 'fileUploaderUncontrolled',
    inputId: 'fileUploaderUncontrolledInput',
    inputName: 'attachments',
    inputLabel: 'Input label',
    listId: 'fileUploaderUncontrolledList',
    linkText: 'Upload your file(s)',
    labelText: 'or drag and drop here',
    helperText: 'Max file size is 10 MB',
    isDisabled: false,
    isFluid: false,
    isLabelHidden: false,
    isMultiple: true,
    isRequired: false,
  },
};

export default meta;
type Story = StoryObj<typeof UncontrolledFileUploader>;

const UncontrolledFileUploaderWithHooks = (args: SpiritUncontrolledFileUploaderProps) => {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [validationText, setValidationText] = useState<string | undefined>(undefined);
  const [validationState, setValidationState] = useState<ValidationState | undefined>(undefined);
  const [queue, setQueue] = useState<FileQueueMapType>(new Map());

  const inputReference = createRef() as MutableRefObject<HTMLInputElement>;
  const dropZoneReference = createRef() as MutableRefObject<HTMLDivElement>;

  const attachmentComponent = ({ id, ...props }: SpiritFileUploaderAttachmentProps) => (
    <FileUploaderAttachment key={id} id={id} {...props} />
  );

  const changeHandler = (fileQueue: FileQueueMapType) => {
    setQueue(fileQueue);
    console.log('change handler:', fileQueue);
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const master = new Map(queue);

    setSubmitting(true);
    console.log('inputReference:', inputReference);
    console.log('dropZoneReference:', dropZoneReference);

    setTimeout(() => {
      console.info('form data:', master, event);
      setSubmitting(false);
      setSubmitted(true);

      queue.clear();
      setQueue(new Map(queue));
    }, 2500);
  };

  const errorHandler = (error: string | Error) => {
    console.error(error);
    setValidationState('danger');
    setValidationText(String(error));

    setTimeout(() => {
      setValidationState(undefined);
      setValidationText(undefined);
    }, 5000);
  };

  const resetStateHandler = () => {
    setValidationState(undefined);
    setValidationText(undefined);
    setSubmitted(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <p>
        <small>
          When you open your console in a browser, you can see the changes as you send or add/remove items from the
          queue.
        </small>
      </p>
      <UncontrolledFileUploader
        {...args}
        attachmentComponent={attachmentComponent}
        inputProps={{
          inputRef: inputReference,
          dropZoneRef: dropZoneReference,
        }}
        onChange={changeHandler}
        onInputError={errorHandler}
        validationState={validationState}
        validationText={validationText}
      />
      <div className="pt-400">
        <Button type="submit" color="primary" isDisabled={submitting || submitted}>
          Submit form to show data
        </Button>
        {submitted && (
          <Button color="secondary" onClick={resetStateHandler} UNSAFE_style={{ marginLeft: '.5rem' }}>
            Reset state
          </Button>
        )}
      </div>
    </form>
  );
};

export const UncontrolledFileUploaderPlayground: Story = {
  name: 'UncontrolledFileUploader',
  render: (args) => <UncontrolledFileUploaderWithHooks {...args} />,
};
