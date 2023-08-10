# FieldGroup

FieldGroup is a component that groups form fields together. Additionally, it provides a common label, helper text, and
validation messages for all fields in the group.

## Basic Usage

```twig
<FieldGroup id="example-field-group" label="Label">
    <!-- Form fields… -->
</FieldGroup>
```

⚠️ **The FieldGroup component does not provide all necessary semantics and any styling to its child fields. It is up
to the developer to configure the child fields correctly.**

👉 The FieldGroup component implements the `<fieldset>` HTML element. Read more about the advantages and limitations in
the [`web` implementation][gh-web-field-group-html] of `FieldGroup`.

## Required Fields

To render FieldGroup as required, add the `isRequired` prop:

```twig
<FieldGroup id="example-field-group" label="Label" isRequired>
  <!-- Form fields… -->
</FieldGroup>
```

⚠️ The `isRequired` prop is only used to indicate visually that all fields in the group are required. The individual
fields themselves need to be marked as required using the `isRequired` prop.

## Hidden Label

To visually hide the FieldGroup label, add the `isLabelHidden` prop:

```twig
<FieldGroup id="example-field-group" label="Label" isLabelHidden>
    <!-- Form fields… -->
</FieldGroup>
```

⚠️ Remember the `label` prop should be always set to provide an accessible label for the group.

## Helper Text

To render helper text, add the `helperText` prop:

```twig
<FieldGroup helperText="Helper text" id="example-field-group" label="Label">
    <!-- Form fields… -->
</FieldGroup>
```

## Fluid Width

To make the FieldGroup component fluid, add the `isFluid` prop:

```twig
<FieldGroup id="example-field-group" label="Label" isFluid>
    <!-- Form fields… -->
</FieldGroup>
```

## Disabled State

To render FieldGroup as required, add the `isDisabled` prop:

```twig
<FieldGroup id="example-field-group" label="Label" isDisabled>
    <!-- Form fields… -->
</FieldGroup>
```

⚠️ Remember to also disable all fields in the group using the `isDisabled` prop.

👉 Read more about the disabled state in the [`web` implementation][gh-web-field-group-disabled] of `FieldGroup`.

## Validation States

Just like any other form component in Spirit, FieldGroup implements the
[Validation state dictionary][dictionary-validation].

Validation states can be presented either by adding the `validationState` attribute, or by adding a JS interaction class
on the native HTML input when controlled by JavaScript (`has-success`, `has-warning`, `has-danger`).

When validated on server:

```twig
<FieldGroup
  id="example-field-group"
  label="Label"
  validationState="success"
  validationText="Success validation message"
/>
```

## API

| Prop name               | Type                                           | Default | Required | Description                                |
| ----------------------- | ---------------------------------------------- | ------- | -------- | ------------------------------------------ |
| `helperText`            | `string`                                       | `null`  | no\*\*   | Custom helper text                         |
| `form`                  | `string`                                       | `null`  | no       | Parent form ID                             |
| `id`                    | `string`                                       | —       | yes      | Group and label identification             |
| `isDisabled`            | `bool`                                         | `false` | no       | If true, the group is disabled             |
| `isLabelHidden`         | `bool`                                         | `false` | no       | If true, label is hidden                   |
| `isRequired`            | `bool`                                         | `false` | no       | If true, the group is marked as required   |
| `label`                 | `string`                                       | `null`  | no\*     | Label text                                 |
| `name`                  | `string`                                       | `null`  | no       | Group name                                 |
| `UNSAFE_helperText`     | `string`                                       | `null`  | no\*\*   | Unescaped custom helper text (allows HTML) |
| `UNSAFE_label`          | `string`                                       | `null`  | no\*     | Unescaped label text (allows HTML)         |
| `UNSAFE_validationText` | `string`, `string[]`                           | `null`  | no\*\*   | Unescaped validation text (allows HTML)    |
| `validationState`       | [Validation dictionary][dictionary-validation] | `null`  | no       | Type of validation state                   |
| `validationText`        | `string`, `string[]`                           | `null`  | no\*\*   | Validation text                            |

\*: To keep the component accessible, a label is always required. You can use the `label` for simple text or `UNSAFE_label` for HTML content.
\*\*: Props with and without `UNSAFE_` prefix are mutually exclusive.

On top of the API options, you can add `data-*` or `aria-*` (except `aria-describedby` which is reserved for linking
helper text and validation text to the group) attributes to further extend component's descriptiveness and
accessibility. Also, UNSAFE styling props are available, see the [Escape hatches][escape-hatches] section in README to
learn how and when to use them. These attributes will be passed to the topmost HTML element of the component.

[gh-web-field-group-html]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/FieldGroup#html-semantics
[gh-web-field-group-disabled]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/FieldGroup#disabled-state
[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
[escape-hatches]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/README.md#escape-hatches
