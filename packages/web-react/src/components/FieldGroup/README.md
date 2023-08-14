# FieldGroup

FieldGroup is a component that groups form fields together.
Additionally, it provides a common label, helper text, and validation messages for all fields in the group.

## Basic Usage

```jsx
<FieldGroup id="example-field-group" label="Label">
  {/* Form fields… */}
</FieldGroup>
```

⚠️ **The FieldGroup component does not provide all necessary semantics and any styling to its child fields. It is up
to the developer to configure the child fields correctly.**

👉 The FieldGroup component implements the `<fieldset>` HTML element. Read more about the advantages and limitations in
the [`web` implementation][gh-web-field-group-html] of `FieldGroup`.

## Required Fields

To render FieldGroup as required, add the `isRequired` prop:

```jsx
<FieldGroup id="example-field-group" label="Label" isRequired>
  {/* Form fields… */}
</FieldGroup>
```

⚠️ The `isRequired` prop is only used to indicate visually that all fields in the group are required. The individual
fields themselves need to be marked as required using the `isRequired` prop.

## Hidden Label

To visually hide the FieldGroup label, add the `isLabelHidden` prop:

```jsx
<FieldGroup id="example-field-group" label="Label" isLabelHidden>
  {/* Form fields… */}
</FieldGroup>
```

⚠️ Remember the `label` prop should be always set to provide an accessible label for the group.

## Helper Text

To render helper text, add the `helperText` prop:

```jsx
<FieldGroup helperText="Helper text" id="example-field-group" label="Label">
  {/* Form fields… */}
</FieldGroup>
```

## Fluid Width

To make the FieldGroup component fluid, add the `isFluid` prop:

```jsx
<FieldGroup id="example-field-group" label="Label" isFluid>
  {/* Form fields… */}
</FieldGroup>
```

## Disabled State

To render FieldGroup as required, add the `isDisabled` prop:

```jsx
<FieldGroup id="example-field-group" label="Label" isDisabled>
  {/* Form fields… */}
</FieldGroup>
```

⚠️ Remember to also disable all fields in the group using the `isDisabled` prop.

👉 Read more about the disabled state in the [`web` implementation][gh-web-field-group-disabled] of `FieldGroup`.

## Validation States

Just like any other form component in Spirit, FieldGroup implements the
[Validation state dictionary][dictionary-validation].

Validation states can be presented either by adding the `validationState` attribute.

```jsx
<FieldGroup
  id="example-field-group"
  label="Label"
  validationState="success"
  validationText="Success validation message"
/>
```

## API

| Prop name         | Type                                           | Default | Required | Description                              |
| ----------------- | ---------------------------------------------- | ------- | -------- | ---------------------------------------- |
| `form`            | `string`                                       | `null`  | no       | Parent form ID                           |
| `helperText`      | `string`                                       | `null`  | no       | Custom helper text                       |
| `id`              | `string`                                       | —       | yes      | Group and label identification           |
| `isDisabled`      | `bool`                                         | `false` | no       | If true, the group is disabled           |
| `isLabelHidden`   | `bool`                                         | `false` | no       | If true, label is hidden                 |
| `isRequired`      | `bool`                                         | `false` | no       | If true, the group is marked as required |
| `label`           | `string`                                       | —       | yes      | Label text                               |
| `name`            | `string`                                       | `null`  | no       | Group name                               |
| `validationState` | [Validation dictionary][dictionary-validation] | `null`  | no       | Type of validation state                 |
| `validationText`  | `string`, `string[]`                           | `null`  | no       | Validation text                          |

[gh-web-field-group-html]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/FieldGroup#html-semantics
[gh-web-field-group-disabled]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/FieldGroup#disabled-state
[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
