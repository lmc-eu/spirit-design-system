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

⚠️ Remember the FieldGroup component is required to be used with content.
Otherwise, it is useless. If it is used dynamically, make sure the FieldGroup component without content has been removed correctly.

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

| Name                    | Type                                           | Default | Required | Description                                |
| ----------------------- | ---------------------------------------------- | ------- | -------- | ------------------------------------------ |
| `form`                  | `string`                                       | `null`  | ✕        | Parent form ID                             |
| `helperText`            | `string`                                       | `null`  | ✕\*\*    | Custom helper text                         |
| `id`                    | `string`                                       | —       | ✔        | Group and label identification             |
| `isDisabled`            | `bool`                                         | `false` | ✕        | If true, the group is disabled             |
| `isLabelHidden`         | `bool`                                         | `false` | ✕        | If true, label is hidden                   |
| `isRequired`            | `bool`                                         | `false` | ✕        | If true, the group is marked as required   |
| `label`                 | `string`                                       | `null`  | ✕\*      | Label text                                 |
| `name`                  | `string`                                       | `null`  | ✕        | Group name                                 |
| `UNSAFE_helperText`     | `string`                                       | `null`  | ✕\*\*    | Unescaped custom helper text (allows HTML) |
| `UNSAFE_label`          | `string`                                       | `null`  | ✕\*      | Unescaped label text (allows HTML)         |
| `UNSAFE_validationText` | [`string` \| `string[]`]                       | `null`  | ✕\*\*    | Unescaped validation text (allows HTML)    |
| `validationState`       | [Validation dictionary][dictionary-validation] | `null`  | ✕        | Type of validation state                   |
| `validationText`        | [`string` \| `string[]`]                       | `null`  | ✕\*\*    | Validation text                            |

(\*) To keep the component accessible, a label is always required. You can use the `label` for simple text or `UNSAFE_label` for HTML content.
(\*\*) Props with and without `UNSAFE_` prefix are mutually exclusive.

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
[gh-web-field-group-html]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/FieldGroup#html-semantics
[gh-web-field-group-disabled]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/FieldGroup#disabled-state
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#additional-attributes
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#style-props
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#escape-hatches
