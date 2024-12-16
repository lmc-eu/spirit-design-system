# FileUploader

FileUploader allows users to pick one or more files to upload.

<!--lint ignore no-emphasis-as-heading-->

**FileUploader itself actually does not upload anything to the server.**

FileUploader is a composition of a few subcomponents:

- [FileUploader](#fileuploader)
  - [JavaScript Plugin](#javascript-plugin)
  - [FileUploader](#fileuploader-1)
    - [Fluid Width](#fluid-width)
    - [API](#api)
  - [FileUploaderInput](#fileuploaderinput)
    - [Selecting Multiple Files at Once](#selecting-multiple-files-at-once)
    - [Maximum File Size (JavaScript)](#maximum-file-size-javascript)
    - [Maximum Number of Files in Queue (JavaScript)](#maximum-number-of-files-in-queue-javascript)
    - [Input Behavior When the Queue is Filled (JavaScript)](#input-behavior-when-the-queue-is-filled-javascript)
    - [Allowed File Types](#allowed-file-types)
    - [Required Input](#required-input)
    - [Validation States](#validation-states)
    - [Disabled State](#disabled-state)
    - [API](#api-1)
  - [FileUploaderList](#fileuploaderlist)
    - [API](#api-2)
  - [FileUploaderAttachment](#fileuploaderattachment)
    - [API](#api-3)
  - [Composition](#composition)

## JavaScript Plugin

For full functionality, you need to provide Spirit JavaScript:

```twig
<script src="node_modules/@lmc-eu/spirit-web/js/cjs/spirit-web.min.js" async></script>
```

Please consult the [main README][web-readme] for how to include JavaScript plugins.

Or, feel free to write the controlling script yourself.

👉 Check the [component's docs in the web package][web-js-api] to see the full documentation and API of the plugin.

## FileUploader

This is the main wrapper for the whole composition. It provides proper spacing for its subcomponents (and holds the
instance of the `FileUploader` JS class):

```twig
<FileUploader data-spirit-toggle="fileUploader">
  <!-- FileUploaderInput -->
  <!-- FileUploaderList -->
</FileUploader>
```

### Fluid Width

By adding the `isFluid` attribute, FileUploader can take up all the available horizontal space:

```twig
<FileUploader isFluid data-spirit-toggle="fileUploader">
  <!-- FileUploaderInput -->
  <!-- FileUploaderList -->
</div>
```

### API

| Name      | Type   | Default | Required | Description                                                |
| --------- | ------ | ------- | -------- | ---------------------------------------------------------- |
| `isFluid` | `bool` | `false` | ✕        | If true, the element spans to the full width of its parent |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

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

### Selecting Multiple Files at Once

To pick more than one file, just add the [`multiple`][mdn-multiple] attribute that will be transferred to the native
HTML input:

```twig
<FileUploaderInput
  id="example-input"
  label="Label"
  multiple
/>
```

### Maximum File Size (JavaScript)

The maximum size of the uploaded file that is validated by the JavaScript plugin can be adjusted.
The default value is 10 MB.
To increase the limit for example to 20 MB, add the `maxFileSize` attribute.
The attribute value is given in **bytes**:

```twig
<FileUploaderInput maxFileSize={ 20971520 } />
```

👉 [Learn how file sizes are calculated][learn-about-file-sizes]

### Maximum Number of Files in Queue (JavaScript)

Limit of the maximum number of uploaded files. The default value is 10, but any value can be set via
the `maxUploadedFiles` attribute:

```twig
<FileUploaderInput maxUploadedFiles={ 2 } />
```

### Input Behavior When the Queue Is Filled (JavaScript)

You can set the input/drop zone to be hidden or disabled when the file queue limit is reached.
When you set `queueLimitBehavior` together with the desired limit for the queue:

Using the `queueLimitBehavior` attribute together with the desired limit for the queue, you can set the
input/drop zone to be hidden or disabled when the file queue limit is reached. Available options are: `hide`, `disable`,
or `none` (default).

If you set the value of `queueLimitBehavior` to `disable`, the input will be disabled. When you set it to
`hide`, the input disappears completely. After removing a file from the queue, the input is restored.

```twig
<FileUploaderInput maxUploadedFiles={ 2 } queueLimitBehavior="hide" />
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

> ⚠️ We don't use the `required` attribute on the input element. This is because it triggers the browser's default validation, which can block form submission.
> Instead, the `FileUploaderInput` component is used to open the system file dialog, and our [JS plugin][web-js-api] manages the file(s).
> Please note, the validation for required files is not automatically handled. Developers need to implement this validation independently, using our JS plugin. This approach provides more flexibility and customization to meet specific validation requirements.

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

### Disabled State

To mark the input as disabled, simply add the `isDisabled` attribute:

```twig
<FileUploaderInput
  id="example-input"
  isDisabled
  label="Label"
/>
```

### API

| Name                    | Type                                           | Default                 | Required | Description                                                                                                        |
| ----------------------- | ---------------------------------------------- | ----------------------- | -------- | ------------------------------------------------------------------------------------------------------------------ |
| `accept`                | `string`                                       | `null`                  | ✕        | Allowed file types                                                                                                 |
| `dragAndDropText`       | `string`                                       | `or drag and drop here` | ✕        | Text shown in the drop zone if drag-and-drop is enabled on the device                                              |
| `helperText`            | `string`                                       | `null`                  | ✕\*\*    | Custom helper text                                                                                                 |
| `iconName`              | `string`                                       | `upload`                | ✕        | Icon used in the drop zone                                                                                         |
| `id`                    | `string`                                       | —                       | ✓        | Input and label identification                                                                                     |
| `isDisabled`            | `bool`                                         | `false`                 | ✕        | If true, input is disabled                                                                                         |
| `isLabelHidden`         | `bool`                                         | `false`                 | ✕        | If true, label is hidden                                                                                           |
| `isRequired`            | `bool`                                         | `false`                 | ✕        | If true, input is marked as required                                                                               |
| `label`                 | `string`                                       | `null`                  | ✕\*      | Label text                                                                                                         |
| `maxFileSize`           | `number`                                       | `1000000`               | ✕        | The maximum size of the uploaded file in **bytes**. [Learn how file sizes are calculated][learn-about-file-sizes]. |
| `maxUploadedFiles`      | `number`                                       | `10`                    | ✕        | Maximum file upload queue size                                                                                     |
| `multiple`              | `void`                                         | `null`                  | ✕        | If set, [multiple files can be selected][multiple-attr]                                                            |
| `name`                  | `string`                                       | `null`                  | ✕        | Input name                                                                                                         |
| `pickAFileText`         | `string`                                       | `Upload your file`      | ✕        | Text shown in the drop zone                                                                                        |
| `queueLimitBehavior`    | \[`hide` \| `disable` \| `none`]               | `none`                  | ✕        | Input behavior when the file queue is filled                                                                       |
| `UNSAFE_helperText`     | `string`                                       | `null`                  | ✕\*\*    | Unescaped custom helper text                                                                                       |
| `UNSAFE_label`          | `string`                                       | `null`                  | ✕\*      | Unescaped label text (allows HTML)                                                                                 |
| `UNSAFE_validationText` | \[`string` \| `string[]`]                      | `null`                  | ✕\*\*    | Unescaped validation text                                                                                          |
| `validationState`       | [Validation dictionary][dictionary-validation] | `null`                  | ✕        | Type of validation state                                                                                           |
| `validationText`        | \[`string` \| `string[]`]                      | `null`                  | ✕\*\*    | Validation text                                                                                                    |

(\*) To keep the component accessible, a label is always required. You can use the `label` for simple text or `UNSAFE_label` for HTML content.
(\*\*) Props with and without `UNSAFE_` prefix are mutually exclusive.

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

## FileUploaderList

FileUploaderList is a simple wrapper which provides an accessible title and the list semantics for the selected files.

👉 When you have more than one file uploader on the page, use the `headingId` prop to set a unique ID for each list.

```twig
<FileUploaderList>
  <!-- Attachments, typically inserted by the JavaScript plugin -->
</FileUploaderList>
```

### API

| Name          | Type     | Default                     | Required | Description                     |
| ------------- | -------- | --------------------------- | -------- | ------------------------------- |
| `headingId`   | `string` | `file-uploader-attachments` | ✕        | List and heading identification |
| `headingText` | `string` | `Attachments`               | ✕        | List title                      |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

## FileUploaderAttachment

FileUploaderAttachment represents the files to be uploaded. It is expected to be a direct descendant of
FileUploaderList, so in the background, it uses `<li>` as the root element.

Long file names are automatically truncated.

```twig
<FileUploaderAttachment fileName="My resume.docx" />
```

FileUploaderAttachment with image preview and edit button:

```twig
<FileUploaderAttachment fileName="Profile.jpg" imagePreview="https://...Profile.jpg" onEdit="() => {}" />
```

While you may insert FileUploaderAttachment into your FileUploaderList, in typical use cases it will live inside a
[`<template>`][mdn-template] tag in the parent FileUploader. The `<template>` tag must be inserted inside the main
wrapper element that has the `data-spirit-toggle="fileUploader"` attribute. Our JavaScript FileUploader plugin will then pick
up the template and apply it on any attachments the user wants to upload. In order to make the template work with image preview,
add the `generateImagePreview` prop to the `FileUploaderAttachment` inside the `<template>`.

```twig
<FileUploader data-spirit-toggle="fileUploader">
  <template data-spirit-snippet="item">
    <FileUploaderAttachment />
  </template>
  <!-- FileUploaderInput -->
  <!-- FileUploaderList -->
</FileUploader>
```

With image preview:

```twig
<FileUploader data-spirit-toggle="fileUploader">
  <template data-spirit-snippet="item">
    <FileUploaderAttachment generateImagePreview />
  </template>
  <!-- FileUploaderInput -->
  <!-- FileUploaderList -->
</FileUploader>
```

### API

| Name                   | Type                    | Default  | Required | Description                                                                                        |
| ---------------------- | ----------------------- | -------- | -------- | -------------------------------------------------------------------------------------------------- |
| `editText`             | `string`                | `Edit`   | ✕        | Edit button text                                                                                   |
| `fileName`             | `string`                | `null`   | ✕        | File name                                                                                          |
| `generateImagePreview` | `bool`                  | `false`  | ✕        | If true and used in the attachment template, the JS plugin will try to show a preview of the image |
| `iconName`             | `string`                | `file`   | ✕        | Icon shown along the file                                                                          |
| `imagePreview`         | `string`                | `null`   | ✕        | URL or base64 of an image                                                                          |
| `imageObjectFit`       | \[`cover` \| `contain`] | `cover`  | ✕        | Defines FileUploaderAttachment image fit in container                                              |
| `onEdit`               | `func`                  | `null`   | ✕        | Function to trigger on click on edit button                                                        |
| `removeText`           | `string`                | `Remove` | ✕        | Remove button text                                                                                 |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

## Composition

This is how all subcomponents build up the complete FileUploader:

```twig
<FileUploader data-spirit-toggle="fileUploader">
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

[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
[learn-about-file-sizes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/src/components/FileUploader/README.md#understanding-file-size-in-bytes
[mdn-accept]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept
[mdn-input-file]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file
[mdn-multiple]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#multiple
[mdn-template]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template
[multiple-attr]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/multiple
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#style-props
[web-js-api]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/FileUploader/README.md#javascript-plugin-api
[web-readme]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md
