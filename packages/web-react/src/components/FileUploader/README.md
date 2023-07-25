# FileUploader

The FileUploader implementation is used to select files either by selecting files from the device itself,
or by drag and drop if the device supports it. React package extends [web package][FileUploader].

## Usage

### Basic

```javascript
const { fileQueue, addToQueue, clearQueue, onDismiss } = useFileQueue();

<FileUploader
  id="fileUploaderExample"
  onDismiss={onDismiss}
  fileQueue={fileQueue}
  addToQueue={addToQueue}
  clearQueue={clearQueue}
>
  <FileUploaderInput
    id="fileUploaderExampleInput"
    name="attachments"
    label="Label"
    linkText="Upload your file(s)"
    labelText="or drag and drop here"
    helperText="Max file size is 10 MB"
  />
  <FileUploaderList
    id="fileUploaderExampleList"
    label="Attachments"
    inputName="attachments"
    attachmentComponent={(props) => <FileUploaderAttachment key={props.id} {...props} />}
  />
</FileUploader>;
```

### Multiple and Queue Limit

```javascript
const { fileQueue, addToQueue, clearQueue, onDismiss } = useFileQueue();

<FileUploader
  id="fileUploaderExample"
  onDismiss={onDismiss}
  fileQueue={fileQueue}
  addToQueue={addToQueue}
  clearQueue={clearQueue}
>
  <FileUploaderInput
    id="fileUploaderExampleInput"
    name="attachments"
    label="Label"
    linkText="Upload your file(s)"
    labelText="or drag and drop here"
    helperText="Max file size is 10 MB"
    validationText="Validation message"
    maxUploadedFiles={5}
    isMultiple
  />
  <FileUploaderList
    id="fileUploaderExampleList"
    label="Attachments"
    inputName="attachments"
    attachmentComponent={(props) => <FileUploaderAttachment key={props.id} {...props} />}
  />
</FileUploader>;
```

### List with image previews

```javascript
<FileUploaderList
  id="fileUploaderExampleList"
  label="Attachments"
  inputName="attachments"
  attachmentComponent={attachmentComponent}
  hasImagePreview
/>
```

### Editable Attachment

```javascript
<FileUploaderAttachment key={id} id={id} onEdit={(event, file) => console.log(event, file)} {...props} />
```

### Validation State

```javascript
<FileUploader>
  <FileUploaderInput isRequired validationState="success" validationText="Validation message" />
  <FileUploaderList />
</FileUploader>
<FileUploader>
  <FileUploaderInput isRequired validationState="success" validationText={["Validation message", "Second validation message"]} />
  <FileUploaderList />
</FileUploader>
```

### Input behavior when the queue is filled

FileUploaderInput will disappear or disable after reaching the limit for files in the queue.

```javascript
<FileUploader>
  <FileUploaderInput
    isRequired
    validationState="success"
    validationText="Validation message"
    maxUploadedFiles={3}
    queueLimitBehavior="hide"
  />
  <FileUploaderList />
</FileUploader>
```

### Error Callback

```javascript
<FileUploader>
  <FileUploaderInput onError={(error) => console.error('My error log', error)} />
  <FileUploaderList />
</FileUploader>
```

### Uncontrolled

```javascript
<UncontrolledFileUploader
  attachmentComponent={(props) => <FileUploaderAttachment key={props.id} {...props} />}
  id="fileUploaderUncontrolled"
  inputId="fileUploaderUncontrolledInput"
  inputName="attachments"
  inputProps={{
    accept: '*',
  }}
  listId="fileUploaderUncontrolledList"
  listProps={{
    label: 'Attachments',
  }}
  onInputError={(error) => console.error('My error log', error)}
/>
```

### Controlled Example with Form Submit

```javascript
const [submitting, setSubmitting] = useState < boolean > false;
const [submitted, setSubmitted] = useState < boolean > false;
const [validationText, setValidationText] = (useState < string) | (undefined > undefined);
const [validationState, setValidationState] = (useState < ValidationState) | (undefined > undefined);

const { fileQueue, addToQueue, clearQueue, onDismiss } = useFileQueue();

const submitHandler = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const master = new Map(fileQueue);

  setSubmitting(true);

  // Callback after submit
  setSubmitting(false);
  setSubmitted(true);
  clearQueue();
};

const errorHandler = (error: string | Error) => {
  setValidationState('error');
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

<form onSubmit={submitHandler}>
  <FileUploader
    id="fileUploaderFormExample"
    onDismiss={onDismiss}
    fileQueue={fileQueue}
    addToQueue={addToQueue}
    clearQueue={clearQueue}
  >
    <FileUploaderInput
      id="fileUploaderFormExampleInput"
      name="attachments"
      label="Label"
      linkText="Upload your file(s)"
      labelText="or drag and drop here"
      helperText="Max file size is 10 MB"
      validationText={validationText}
      validationState={validationState}
      maxUploadedFiles={2}
      onError={errorHandler}
      isMultiple
    />
    <FileUploaderList
      id="fileUploaderFormExampleList"
      label="Attachments"
      inputName="attachments"
      attachmentComponent={(props) => <FileUploaderAttachment key={props.id} {...props} />}
    />
  </FileUploader>
  <div style={{ paddingTop: '1rem' }}>
    <Button type="submit" color="primary" isDisabled={submitting || submitted}>
      Submit form
    </Button>
    {submitted && (
      <Button color="secondary" onClick={resetStateHandler} UNSAFE_style={{ marginLeft: '.5rem' }}>
        Reset state
      </Button>
    )}
  </div>
</form>;
```

### Uncontrolled Example with Form Submit

```javascript
const [submitting, setSubmitting] = useState < boolean > false;
const [submitted, setSubmitted] = useState < boolean > false;
const [validationText, setValidationText] = (useState < string) | (undefined > undefined);
const [validationState, setValidationState] = (useState < ValidationState) | (undefined > undefined);
const [queue, setQueue] = useState < FileQueueMapType > new Map();

const attachmentComponent = ({ id, ...props }: SpiritFileUploaderAttachmentProps) => (
  <FileUploaderAttachment key={id} id={id} {...props} />
);

const changeHandler = (fileQueue: FileQueueMapType) => {
  setQueue(fileQueue);
};

const submitHandler = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const master = new Map(queue);

  setSubmitting(true);

  // Callback after submit
  setSubmitting(false);
  setSubmitted(true);

  queue.clear();
  setQueue(new Map(queue));
};

const errorHandler = (error: string | Error) => {
  setValidationState('error');
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

<form onSubmit={submitHandler}>
  <UncontrolledFileUploader
    attachmentComponent={attachmentComponent}
    id="fileUploaderUncontrolled"
    inputId="fileUploaderUncontrolledInput"
    inputName="attachments"
    inputLabel="Input label"
    listId="fileUploaderUncontrolledList"
    linkText="Upload your file(s)"
    labelText="or drag and drop here"
    helperText="Max file size is 10 MB"
    onChange={changeHandler}
    onInputError={errorHandler}
    validationState={validationState}
    validationText={validationText}
    isMultiple
  />
  <div style={{ paddingTop: '1rem' }}>
    <Button type="submit" color="primary" isDisabled={submitting || submitted}>
      Submit form to show data
    </Button>
    {submitted && (
      <Button color="secondary" onClick={resetStateHandler} UNSAFE_style={{ marginLeft: '.5rem' }}>
        Reset state
      </Button>
    )}
  </div>
</form>;
```

## FileUploader Props

| Prop name                             | Type                                            | Default | Required | Description                                                         |
| ------------------------------------- | ----------------------------------------------- | ------- | -------- | ------------------------------------------------------------------- |
| `id`                                  | `string`                                        | -       | ✔        | FileUploader id                                                     |
| `addToQueue`                          | `(key: string, file: File) => FileQueueMapType` | -       | ✔        | Callback to add an item to the queue                                |
| `clearQueue`                          | `() => void`                                    | -       | ✔        | Callback to clear the queue                                         |
| `fileQueue`                           | `FileQueueMapType`                              | -       | ✔        | Queue of items to upload                                            |
| `onDismiss`                           | `(key: string) => FileQueueMapType`             | -       | ✔        | A callback to delete a particular item from the queue               |
| `findInQueue`                         | `(key: string) => FileQueueMapType`             | -       | ✔        | A callback to find a particular item in the queue                   |
| `updateQueue`                         | `(key: string, file: File) => FileQueueMapType` | -       | ✔        | A callback to update a particular item in the queue                 |
| `isFluid`                             | `boolean`                                       | -       | ✕        | When the field is supposed to be fluid                              |
| `errorMessages.errorMaxFileSize`      | `string`                                        | -       | ✕        | Translation for the error message: Maximum file size                |
| `errorMessages.errorMaxUploadedFiles` | `string`                                        | -       | ✕        | Translation for the error message: Maximum number of uploaded files |
| `errorMessages.errorFileDuplicity`    | `string`                                        | -       | ✕        | Translation for the error message: Duplicate file in queue          |
| `UNSAFE_className`                    | `string`                                        | -       | ✕        | FileUploader custom class name                                      |
| `UNSAFE_style`                        | `CSSProperties`                                 | -       | ✕        | FileUploader custom style                                           |

The rest of the properties are created from the default `<div>` element. [More about the element][DivElementDocs]

## FileUploaderInput Props

| Prop name            | Type                                 | Default  | Required | Description                                                                                                                                                     |
| -------------------- | ------------------------------------ | -------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accept`             | `string`                             | -        | ✕        | The accept attribute takes as its value a comma-separated list of one or more file types, or unique file type specifiers, describing which file types to allow. |
| `id`                 | `string`                             | -        | ✔        | FileUploaderInput id                                                                                                                                            |
| `inputRef`           | `MutableRefObject<HTMLInputElement>` | -        | ✕        | Input element reference                                                                                                                                         |
| `dropZoneRef`        | `MutableRefObject<HTMLDivElement>`   | -        | ✕        | Drop zone element reference                                                                                                                                     |
| `helperText`         | `string`                             | -        | ✕        | Custom helper text                                                                                                                                              |
| `labelText`          | `string`                             | -        | ✕        | Label for input in Drop zone                                                                                                                                    |
| `linkText`           | `string`                             | -        | ✕        | Link text in input in Drop zone                                                                                                                                 |
| `iconName`           | `string`                             | `upload` | ✕        | Icon used in the drop zone                                                                                                                                      |
| `isDisabled`         | `boolean`                            | -        | ✕        | Whether is field disabled                                                                                                                                       |
| `isRequired`         | `boolean`                            | -        | ✕        | Whether is field required                                                                                                                                       |
| `validationState`    | `ValidationState`                    | -        | ✕        | Validation state                                                                                                                                                |
| `validationText`     | `string`, `string[]`                 | -        | ✕        | Validation status text                                                                                                                                          |
| `maxFileSize`        | `number`                             | 1000000  | ✕        | The maximum size of the uploaded file in bytes                                                                                                                  |
| `maxUploadedFiles`   | `number`                             | 10       | ✕        | Maximum file upload queue size                                                                                                                                  |
| `isLabelHidden`      | `boolean`                            | -        | ✕        | Whether is input label hidden                                                                                                                                   |
| `isMultiple`         | `boolean`                            | -        | ✕        | When multiple files can be selected at once                                                                                                                     |
| `queueLimitBehavior` | `'hide', 'disable', 'none'`          | `none`   | ✕        | Input behavior when the file queue is filled                                                                                                                    |
| `label`              | `string`                             | -        | ✕        | Field label                                                                                                                                                     |
| `name`               | `string`                             | -        | ✔        | Field name, will be used for each attachment in the queue                                                                                                       |
| `onError`            | `FileUploaderErrorCallbackType`      | -        | ✕        | Callback on error condition                                                                                                                                     |
| `UNSAFE_className`   | `string`                             | -        | ✕        | FileUploaderInput custom class name                                                                                                                             |
| `UNSAFE_style`       | `CSSProperties`                      | -        | ✕        | FileUploaderInput custom style                                                                                                                                  |

The rest of the properties are created from the default `<input>` element. [More about the element][InputElementDocs]

## FileUploaderList Props

| Prop name             | Type            | Default | Required | Description                                   |
| --------------------- | --------------- | ------- | -------- | --------------------------------------------- |
| `attachmentComponent` | `string`        | -       | ✔        | A component for rendering a single attachment |
| `hasImagePreview`     | `boolean`       | false   | ✕        | Show image preview in the list                |
| `id`                  | `string`        | -       | ✔        | FileUploaderList id                           |
| `inputName`           | `string`        | -       | ✔        | The name of the input field                   |
| `label`               | `string`        | -       | ✕        | Label for the list                            |
| `UNSAFE_className`    | `string`        | -       | ✕        | FileUploaderList custom class name            |
| `UNSAFE_style`        | `CSSProperties` | -       | ✕        | FileUploaderList custom style                 |

The rest of the properties are created from the default `<ul>` element. [More about the element][ListElementDocs]

## FileUploaderAttachment Props

| Prop name          | Type                                 | Default  | Required | Description                               |
| ------------------ | ------------------------------------ | -------- | -------- | ----------------------------------------- |
| `buttonLabel`      | `string`                             | `Remove` | ✕        | Dismiss button label                      |
| `editButtonLabel`  | `string`                             | `Edit`   | ✕        | Edit button label                         |
| `file`             | `File`                               | -        | ✔        | Attachment file object                    |
| `iconName`         | `string`                             | `file`   | ✕        | Icon shown along the file                 |
| `id`               | `string`                             | -        | ✔        | FileUploaderAttachment id                 |
| `label`            | `string`                             | -        | ✔        | File name                                 |
| `name`             | `string`                             | -        | ✔        | Input field name                          |
| `onDismiss`        | `(key: string) => FileQueueMapType`  | -        | ✔        | Callback to delete an item from the queue |
| `onEdit`           | `(event: Event, file: File) => void` | -        | ✕        | Show and add function to edit button      |
| `onError`          | `FileUploaderErrorCallbackType`      | -        | ✕        | Callback on error condition               |
| `UNSAFE_className` | `string`                             | -        | ✕        | FileUploaderAttachment custom class name  |
| `UNSAFE_style`     | `CSSProperties`                      | -        | ✕        | FileUploaderAttachment custom style       |

The rest of the properties are created from the default `<li>` element. [More about the element][ListItemElementDocs]

## AttachmentActionButton Props

| Prop name          | Type                                   | Default | Required | Description                               |
| ------------------ | -------------------------------------- | ------- | -------- | ----------------------------------------- |
| `onClick`          | `MouseEventHandler<HTMLButtonElement>` | -       | ✕        | Button click handler                      |
| `UNSAFE_className` | `string`                               | -       | ✕        | AttachmentDismissButton custom class name |
| `UNSAFE_style`     | `CSSProperties`                        | -       | ✕        | AttachmentDismissButton custom style      |

The rest of the properties are created from the default `<button>` element. [More about the element][ButtonElementDocs]

## AttachmentDismissButton Props

| Prop name          | Type                                   | Default | Required | Description                               |
| ------------------ | -------------------------------------- | ------- | -------- | ----------------------------------------- |
| `onClick`          | `MouseEventHandler<HTMLButtonElement>` | -       | ✕        | Button click handler                      |
| `UNSAFE_className` | `string`                               | -       | ✕        | AttachmentDismissButton custom class name |
| `UNSAFE_style`     | `CSSProperties`                        | -       | ✕        | AttachmentDismissButton custom style      |

The rest of the properties are created from the default `<button>` element. [More about the element][ButtonElementDocs]

## UncontrolledFileUploader Props

The uncontrolled variant contains the composition `<FileUploaderInput>` and `<FileUploaderList>`
and a collection of props selected above for easier implementation. Other props are passed
via `inputProps` and `listProps`.
`UncontrolledFileUploaderBaseProps` extends `FileUploaderBaseProps`.

| Prop name             | Type                                    | Default  | Required | Description                                         |
| --------------------- | --------------------------------------- | -------- | -------- | --------------------------------------------------- |
| `iconName`            | `string`                                | `upload` | ✔        | Icon used in the UncontrolledFileUploader drop zone |
| `id`                  | `string`                                | -        | ✔        | UncontrolledFileUploader id                         |
| `inputId`             | `string`                                | -        | ✔        | FileUploaderInput id                                |
| `inputLabel`          | `string`                                | -        | ✔        | FileUploaderInput label                             |
| `inputName`           | `string`                                | -        | ✔        | FileUploaderInput name                              |
| `inputProps`          | `Partial<FileUploaderInputBaseProps>`   | -        | ✕        | Rest of FileUploaderInput props                     |
| `listId`              | `string`                                | -        | ✔        | FileUploaderList id                                 |
| `listProps`           | `Partial<FileUploaderListBaseProps>`    | -        | ✕        | Rest of FileUploaderList props                      |
| `helperText`          | `string`                                | -        | ✕        | Custom helper text                                  |
| `labelText`           | `string`                                | -        | ✕        | Label for input in Drop zone                        |
| `linkText`            | `string`                                | -        | ✕        | Link text in input in Drop zone                     |
| `attachmentComponent` | `string`                                | -        | ✔        | A component for rendering a single attachment       |
| `maxFileSize`         | `number`                                | 1000000  | ✕        | The maximum size of the uploaded file in bytes      |
| `maxUploadedFiles`    | `number`                                | 10       | ✕        | Maximum file upload queue size                      |
| `isLabelHidden`       | `boolean`                               | -        | ✕        | Whether is input label hidden                       |
| `isMultiple`          | `boolean`                               | -        | ✕        | When multiple files can be selected at once         |
| `isDisabled`          | `boolean`                               | -        | ✕        | Whether is field disabled                           |
| `queueLimitBehavior`  | `'hide', 'disable', 'none'`             | `none`   | ✕        | Input behavior when the file queue is filled        |
| `isRequired`          | `boolean`                               | -        | ✕        | Whether is field required                           |
| `isFluid`             | `boolean`                               | -        | ✕        | When the field is supposed to be fluid              |
| `onInputError`        | `FileUploaderErrorCallbackType`         | -        | ✕        | Callback on error condition                         |
| `onChange`            | `(fileQueue: FileQueueMapType) => void` | -        | ✕        | Callback on change in fileQueue                     |
| `validationState`     | `ValidationState`                       | -        | ✕        | Validation state                                    |
| `validationText`      | `string`, `string[]`                    | -        | ✕        | Validation status text                              |
| `UNSAFE_className`    | `string`                                | -        | ✕        | UncontrolledFileUploader custom class name          |
| `UNSAFE_style`        | `CSSProperties`                         | -        | ✕        | UncontrolledFileUploader custom style               |

For detailed information see [FileUploader] component.

[FileUploader]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/FileUploader/README.md
[ButtonElementDocs]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
[DivElementDocs]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div
[InputElementDocs]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
[ListElementDocs]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul
[ListItemElementDocs]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li
