# FileUploader

FileUploader allows users to pick one or more files to upload.

**FileUploader itself actually does not upload anything to the server.**

FileUploader is a composition of a few subcomponents:

- [FileUploader](#fileuploader-1)
  - [FileUploaderInput](#fileuploaderinput)
  - [FileUploaderList](#fileuploaderlist)
    - [FileUploaderAttachment](#fileuploaderattachment)

## JavaScript Plugin

For full functionality, you need to provide Spirit JavaScript:

```html
<script src="node_modules/@lmc-eu/spirit-web/js/cjs/spirit-web.min.js" async></script>
```

Check the [component's docs in the web package][web-js-api] to see the full documentation of the plugin.

Please consult the [main README][web-readme] for how to include JavaScript plugins.

Or, feel free to write the controlling script yourself.

## FileUploader

This is the main wrapper for the whole composition. It provides proper spacing for its subcomponents (and holds the
instance of the `FileUploader` JS class):

```twig
<FileUploader data-toggle="fileUploader">
  <!-- FileUploaderInput -->
  <!-- FileUploaderList -->
</FileUploader>
```

### Fluid Width

By adding the `isFluid` attribute, FileUploader can take up all the available horizontal space:

```twig
<FileUploader isFluid data-toggle="fileUploader">
  <!-- FileUploaderInput -->
  <!-- FileUploaderList -->
</div>
```

### API

| Prop name | Type      | Default | Required | Description                                                |
| --------- | --------- | ------- | -------- | ---------------------------------------------------------- |
| `isFluid` | `boolean` | `false` | no       | If true, the element spans to the full width of its parent |

On top of the API options, you can add `data-*` or `aria-*` attributes to
further extend component's descriptiveness and accessibility. Also, UNSAFE styling props are available,
see the [Escape hatches][escape-hatches] section in README to learn how and when to use them.
These attributes will be passed to the topmost HTML element of the component.

## FileUploaderInput

FileUploaderInput is a file picker built around the native HTML [file `input`][mdn-input-file].

If supported by the device, FileUploaderInput automatically turns on the drag-and-drop functionality.

```twig
<FileUploaderInput
    helperText="Max file size is 10 MB"
    id="example-input"
    label="Label"
    name="example-input"
/>
```

### Maximum File Size (JavaScript)

The maximum size of the uploaded file that is validated by the JavaScript plugin can be adjusted. The default value is
10 MB. To increase the limit for example to 20 MB, add the `maxFileSize` attribute:

```twig
<FileUploaderInput maxFileSize={20000000} />
```

### Maximum number of files in queue (JavaScript)

Counter of the maximum number of uploaded files. The default value is 10, but any value can be set with
the `maxUploadedFiles` attribute:

```twig
<FileUploaderInput maxUploadedFiles={2} />
```

### Input behavior when the queue is filled (JavaScript)

You can set the input/drop zone to be hidden or disabled when the file queue limit is reached.
When you set `queueLimitBehavior` together with the desired limit for the queue:

```twig
<FileUploaderInput maxUploadedFiles={2} queueLimitBehavior="hide" />
```

### Uploading Multiple Files

To pick more than one file, just add the [`multiple`][mdn-multiple] attribute that will be transferred to the native
HTML input:

```twig
<FileUploaderInput
  id="example-input"
  label="Label"
  multiple
/>
```

### Allowed File Types

Use the [`accept`][mdn-accept] HTML attribute to restrict what file types can be uploaded. For example, to accept
Microsoft Word documents:

```twig
<FileUploaderInput
  accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  id="example-input"
  label="Label"
/>
```

### Required Input

To mark the input as required, simply add the `isRequired` attribute:

```twig
<FileUploaderInput
  id="example-input"
  isRequired
  label="Label"
/>
```

### Validation States

Just like any other form component in Spirit, FileUploader implements the
[Validation state dictionary][dictionary-validation].

Validation states can be presented either by adding the `validationState` attribute, or by adding a JS interaction class
on the native HTML input when controlled by JavaScript (`has-success`, `has-warning`, `has-danger`).

When validated on server:

```twig
<FileUploaderInput
  id="example-validation-success"
  label="Label"
  validationState="success"
  validationText="Success validation message"
/>
```

### API

| Prop name               | Type                                           | Default                 | Required | Description                                                           |
| ----------------------- | ---------------------------------------------- | ----------------------- | -------- | --------------------------------------------------------------------- |
| `dragAndDropText`       | `string`                                       | `or drag and drop here` | no       | Text shown in the drop zone if drag-and-drop is enabled on the device |
| `helperText`            | `string`                                       | `null`                  | no\*\*   | Custom helper text                                                    |
| `iconName`              | `string`                                       | `upload`                | no       | Icon used in the drop zone                                            |
| `id`                    | `string`                                       | —                       | yes      | Input and label identification                                        |
| `isLabelHidden`         | `bool`                                         | `false`                 | no       | If true, label is hidden                                              |
| `isRequired`            | `bool`                                         | `false`                 | no       | If true, input is required                                            |
| `label`                 | `string`                                       | `null`                  | no\*     | Label text                                                            |
| `maxFileSize`           | `number`                                       | `1000000`               | no       | The maximum size of the uploaded file                                 |
| `maxUploadedFiles`      | `number`                                       | `10`                    | no       | Maximum file upload queue size                                        |
| `name`                  | `string`                                       | `null`                  | no       | Input name                                                            |
| `pickAFileText`         | `string`                                       | `Upload your file`      | no       | Text shown in the drop zone                                           |
| `queueLimitBehavior`    | `'hide', 'disable', 'none'`                    | `none`                  | no       | Input behavior when the file queue is filled                          |
| `UNSAFE_helperText`     | `string`                                       | `null`                  | no\*\*   | Unescaped custom helper text                                          |
| `UNSAFE_label`          | `string`                                       | `null`                  | no\*     | Unescaped label text (allows HTML)                                    |
| `UNSAFE_validationText` | `string`, `string[]`                           | `null`                  | no\*\*   | Unescaped validation text                                             |
| `validationState`       | [Validation dictionary][dictionary-validation] | `null`                  | no       | Type of validation state                                              |
| `validationText`        | `string`, `string[]`                           | `null`                  | no\*\*   | Validation text                                                       |

\*: To keep the component accessible, a label is always required. You can use the `label` for simple text or `UNSAFE_label` for HTML content.
\*\*: Props with and without `UNSAFE_` prefix are mutually exclusive.

On top of the API options, you can add `data-*` or `aria-*` attributes to
further extend component's descriptiveness and accessibility. Also, UNSAFE styling props are available,
see the [Escape hatches][escape-hatches] section in README to learn how and when to use them.
These attributes will be passed to the topmost HTML element of the component.

## FileUploaderList

FileUploaderList is a simple wrapper which provides an accessible title and the list semantics for the selected files.

```twig
<FileUploaderList>
  <!-- Attachments, typically inserted by the JavaScript plugin -->
</FileUploaderList>
```

### API

| Prop name     | Type     | Default                     | Required | Description                     |
| ------------- | -------- | --------------------------- | -------- | ------------------------------- |
| `headingId`   | `string` | `file-uploader-attachments` | no       | List and heading identification |
| `headingText` | `string` | `Attachments`               | no       | List title                      |

On top of the API options, you can add `data-*` or `aria-*` attributes to
further extend component's descriptiveness and accessibility. Also, UNSAFE styling props are available,
see the [Escape hatches][escape-hatches] section in README to learn how and when to use them.
These attributes will be passed to the topmost HTML element of the component.

## FileUploaderAttachment

FileUploaderAttachment represents the files to be uploaded. It is expected to be a direct descendant of
FileUploaderList, so in the background, it uses `<li>` as the root element.

Long file names are automatically truncated.

```twig
<FileUploaderAttachment fileName="My resume.docx" />
```

While you may insert FileUploaderAttachment into your FileUploaderList, in typical use cases it will live inside a
[`<template>`][mdn-template] tag in the parent FileUploader. The `<template>` tag must be inserted inside the main
wrapper element that has the `data-toggle="fileUploader"` attribute. Our JavaScript FileUploader plugin will then pick
up the template and apply it on any attachments the user wants to upload.

```twig
<FileUploader data-toggle="fileUploader">
  <template data-spirit-snippet="item">
    <FileUploaderAttachment />
  </template>
  <!-- FileUploaderInput -->
  <!-- FileUploaderList -->
</FileUploader>
```

### API

| Prop name    | Type     | Default  | Required | Description               |
| ------------ | -------- | -------- | -------- | ------------------------- |
| `fileName`   | `string` | `null`   | no       | File name                 |
| `iconName`   | `string` | `file`   | no       | Icon shown along the file |
| `removeText` | `string` | `Remove` | no       | Remove button text        |

On top of the API options, you can add `data-*` or `aria-*` attributes to
further extend component's descriptiveness and accessibility. Also, UNSAFE styling props are available,
see the [Escape hatches][escape-hatches] section in README to learn how and when to use them.
These attributes will be passed to the topmost HTML element of the component.

## Composition

This is how all subcomponents build up the complete FileUploader:

```twig
<FileUploader data-toggle="fileUploader">
    <template data-spirit-snippet="item">
        <FileUploaderAttachment />
    </template>
    <FileUploaderInput
        helperText="Max file size is 10 MB"
        id="example-input"
        label="Label"
        name="example-input"
    />
    <FileUploaderList />
</FileUploader>
```

[web-js-api]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/FileUploader/README.md#javascript-plugin-api
[web-readme]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md
[mdn-input-file]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file
[mdn-multiple]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#multiple
[mdn-accept]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept
[mdn-template]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template
[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
[escape-hatches]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/README.md#escape-hatches
