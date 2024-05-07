# Field

## ValidationText

The ValidationText subcomponent displays validation texts for Field components like TextField, TextArea, Checkbox, FileUploader, etc.

```jsx
import { ValidationText } from '@lmc-eu/spirit-web-react/components';
```

Basic example usage:

```jsx
<ValidationText className="Component__validationText" validationText="Danger validation text" />
```

Advanced example:

```jsx
<ValidationText className="Component__validationText" elementType="span" validationState="danger" />
```

## ValidationText

### API

| Name             | Type                     | Default | Required | Description                                                                                    |
| ---------------- | ------------------------ | ------- | -------- | ---------------------------------------------------------------------------------------------- |
| `className`      | `string`                 | —       | ✓        | Wrapper custom class name                                                                      |
| `elementType`    | [`span` \| `div`]        | `div`   | ✕        | Type of element used as main wrapper (applied only for single validation text, otherwise `ul`) |
| `validationText` | [`string` \| `string[]`] | —       | ✓        | Validation text                                                                                |
