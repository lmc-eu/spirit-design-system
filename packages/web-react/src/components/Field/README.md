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
<ValidationText
  className="Component__validationText"
  elementType="span"
  validationText="Danger validation text"
  role="alert"
/>
```

## Role Attribute

When displaying text dynamically, set [`role="alert"`][aria-alert-role] on the `ValidationText` component to improve accessibility. This will help screen readers notify users about content updates.

### API

| Name             | Type                      | Default | Required | Description                                                                                    |
| ---------------- | ------------------------- | ------- | -------- | ---------------------------------------------------------------------------------------------- |
| `className`      | `string`                  | —       | ✓        | Wrapper custom class name                                                                      |
| `elementType`    | \[`span` \| `div`]        | `div`   | ✕        | Type of element used as main wrapper (applied only for single validation text, otherwise `ul`) |
| `role`           | `string`                  | -       | ✕        | The role attribute that describes the role of an element                                       |
| `validationText` | \[`string` \| `string[]`] | —       | ✕        | Validation text, only visible if validationState is set                                        |

[aria-alert-role]: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role
