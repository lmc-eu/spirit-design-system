# ValidationText

The validationText subcomponent displays validation texts for Field components like TextField, TextArea, CheckboxField, FileUploader, etc.

```jsx
import { ValidationText } from '@lmc-eu/spirit-web-react/components';
```

```jsx
<ValidationText elementType="div" className="TextField__validationText" validationText="This field is required" />
```

## ValidationText

**Available props**

| Name             | Type                 | Default | Required | Description                                                                                    |
| ---------------- | -------------------- | ------- | -------- | ---------------------------------------------------------------------------------------------- |
| `elementType`    | `span`, `div`        | `div`   | no       | Type of element used as main wrapper (applied only for single validation text, otherwise `ul`) |
| `className`      | `string`             | -       | yes      | Wrapper custom class name                                                                      |
| `validationText` | `string`, `string[]` | -       | yes      | Validation text                                                                                |
