# FileUploader

FileUploader allows users to pick one or more files to upload.

**FileUploader itself actually does not upload anything to the server.**

FileUploader is a composition of a few subcomponents:

- [FileUploader](#fileuploader-1)
  - [FileUploaderInput](#fileuploaderinput)
  - [FileUploaderList](#fileuploaderlist)
    - [FileUploaderAttachment](#fileuploaderattachment)

## JavaScript Plugin (TO BE IMPLEMENTED)

For full functionality, you need to provide Spirit JavaScript, which will handle
the interactions with FileUploader.

```html
<script src="node_modules/@lmc-eu/spirit-web/js/cjs/spirit-web.min.js" async></script>
```

Please consult the [main README][web-readme] for how to include JavaScript
plugins.

Or, feel free to write the controlling script yourself.

## FileUploader

This is the main wrapper for the whole composition. It provides proper spacing
for its subcomponents:

```html
<div class="FileUploader">
  <!-- FileUploaderInput -->
  <!-- FileUploaderList -->
</div>
```

### Fluid Width

By adding the `FileUploader--fluid` modifier class, FileUploader can take up all
the available horizontal space:

```html
<div class="FileUploader FileUploader--fluid">
  <!-- FileUploaderInput -->
  <!-- FileUploaderList -->
</div>
```

## FileUploaderInput

FileUploaderInput is a file picker built around the native HTML
[file `input`][mdn-input-file].

If supported by the device, FileUploaderInput automatically turns on the
drag-and-drop functionality (signalized by the `has-drag-and-drop` state class
on the root element).

```html
<div class="FileUploaderInput">
  <label for="fileUpload" class="FileUploaderInput__label">Label</label>
  <div class="FileUploaderInput__dropZone">
    <svg width="24" height="24" aria-hidden="true">
      <use xlink:href="/icons/svg/sprite.svg#upload" />
    </svg>
    <label for="fileUpload" class="FileUploaderInput__dropZoneLabel">
      <span class="FileUploaderInput__link link-primary link-underlined">Upload your file</span>
      <span class="FileUploaderInput__dragAndDropLabel">or drag and drop here</span>
    </label>
    <div class="FileUploaderInput__helperText">Max file size is 10 MB</div>
    <input type="file" id="fileUpload" name="attachment" class="FileUploaderInput__input" />
  </div>
</div>
```

### Uploading Multiple Files

To pick more than one file, just add the [`multiple`][mdn-multiple] attribute to
the native `input` element:

```html
<input type="file" id="fileUpload" name="attachment" class="FileUploaderInput__input" multiple />
```

### Allowed File Types

Use the [`accept`][mdn-accept] HTML attribute to restrict what file types can be
uploaded. For example, to accept Microsoft Word documents:

```html
<input
  type="file"
  id="fileUpload"
  name="attachment"
  class="FileUploaderInput__input"
  accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
/>
```

### Required Input

To mark the input as required, simply add the `required` attribute to the native
`input` element and the `FileUploaderInput__label--required` to the label:

```html
<div class="FileUploaderInput">
  <label for="fileUpload" class="FileUploaderInput__label FileUploaderInput__label--required">Label</label>
  <div class="FileUploaderInput__dropZone">
    <!-- … -->
    <input type="file" id="fileUpload" name="attachment" class="FileUploaderInput__input" required />
  </div>
</div>
```

### Validation States

Just like any other form component in Spirit, FileUploader implements the
[Validation state dictionary][dictionary-validation].

Validation states can be presented either by adding a CSS modifier class
(`FileUploaderInput--success`, `FileUploaderInput--warning`,
`FileUploaderInput--danger`), or by adding a JS interaction class when
controlled by JavaScript (`has-success`, `has-warning`, `has-danger`).

When validated on server:

```html
<div class="FileUploaderInput FileUploaderInput--success">
  <!-- Label -->
  <!-- Drop zone with input -->
  <div class="FileUploaderInput__message">Success message</div>
</div>
```

#### JavaScript-Controlled Validation Message

When implementing client-side form validation, use JS interaction state classes
(`has-success`, `has-warning`, `has-danger`) on the wrapping `<div>` element and
render validation messages in a `<div>` with `data-element="validator_message"`
attribute. This way your JS remains disconnected from CSS that may or may not be
[prefixed].

**Remember this approach is only valid for vanilla JS implementation. React
components mix CSS with JS by design and handle CSS class-name prefixes their
own way.**

```html
<div class="FileUploaderInput has-success">
  <!-- Label -->
  <!-- Drop zone with input -->
  <div data-element="validator_message">Success message inserted by JS</div>
</div>
```

## FileUploaderList

FileUploaderList is a simple wrapper which provides an accessible title and the
list semantics for the selected files.

```html
<h3 id="attachments" hidden>Attachments</h3>
<ul class="FileUploaderList" aria-labelledby="attachments">
  <!-- Items -->
</ul>
```

## FileUploaderAttachment

FileUploaderAttachment represents the files to be uploaded. It is expected to be
a direct descendant of FileUploaderList, so it uses `<li>` as the root element.

Thanks to the `text-truncate` helper class, long file names are automatically
truncated.

```html
<li class="FileUploaderAttachment">
  <svg width="24" height="24" aria-hidden="true">
    <use xlink:href="/icons/svg/sprite.svg#file" />
  </svg>
  <span class="text-truncate">My resume.docx</span>
  <button type="button" class="FileUploaderAttachment__remove">
    <span class="accessibility-hidden">Remove</span>
    <svg width="24" height="24" aria-hidden="true">
      <use xlink:href="/icons/svg/sprite.svg#close" />
    </svg>
  </button>
</li>
```

## Composition

This is how all subcomponents build up the complete FileUploader:

```html
<!-- FileUploader: start -->
<div class="FileUploader">
  <!-- FileUploaderInput: start -->
  <div class="FileUploaderInput">
    <label for="fileUploadWithAttachments" class="FileUploaderInput__label">Label</label>
    <div class="FileUploaderInput__dropZone">
      <svg width="24" height="24" aria-hidden="true">
        <use xlink:href="/icons/svg/sprite.svg#upload" />
      </svg>
      <label for="fileUploadWithAttachments" class="FileUploaderInput__dropZoneLabel">
        <span class="FileUploaderInput__link link-primary link-underlined">Upload your file</span>
        <span class="FileUploaderInput__dragAndDropLabel">or drag and drop here</span>
      </label>
      <div class="FileUploaderInput__helperText">Max file size is 10 MB</div>
      <input type="file" id="fileUploadWithAttachments" name="attachment" class="FileUploaderInput__input" />
    </div>
  </div>
  <!-- FileUploaderInput: end -->

  <!-- FileUploaderList: start -->
  <h3 id="attachments" hidden>Attachments</h3>
  <ul class="FileUploaderList" aria-labelledby="attachments">
    <!-- FileUploaderAttachment: start -->
    <li class="FileUploaderAttachment">
      <svg width="24" height="24" aria-hidden="true">
        <use xlink:href="/icons/svg/sprite.svg#file" />
      </svg>
      <span class="text-truncate">My resume.docx</span>
      <button type="button" class="FileUploaderAttachment__remove">
        <span class="accessibility-hidden">Remove</span>
        <svg width="24" height="24" aria-hidden="true">
          <use xlink:href="/icons/svg/sprite.svg#close" />
        </svg>
      </button>
    </li>
    <!-- FileUploaderAttachment: end -->
  </ul>
  <!-- FileUploaderList: end -->
</div>
<!-- FileUploader: end -->
```

[web-readme]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md
[mdn-input-file]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file
[mdn-multiple]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#multiple
[mdn-accept]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept
[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
[prefixed]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web#prefixing-css-class-names
