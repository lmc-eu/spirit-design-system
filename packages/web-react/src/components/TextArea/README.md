# TextArea

TextArea enables the user to add longer text to a form.
It could be disabled or have a validation state with optional validation text.
The label could be hidden and show if the textarea is required.

Basic example usage:

```jsx
<TextArea id="textAreaDefault" label="Label" name="textAreaDefault" />
```

Advanced example usage:

```jsx
<TextArea
  helperText="custom helper text"
  id="textAreaAdvanced"
  isRequired
  label="Label"
  maxlength="180"
  name="textAreaAdvanced"
  placeholder="Placeholder"
  rows="10"
  validationState="danger"
  validationText="validation failed"
  value="TextArea"
/>
```

Example with Auto-Height Adjustment

```jsx
<TextArea id="example" name="example" isAutoResizing autoResizingMaxHeight={500} />
```

## Available props

| Prop name               | Type                                           | Default | Required | Description                                                          |
| ----------------------- | ---------------------------------------------- | ------- | -------- | -------------------------------------------------------------------- |
| `autoResizingMaxHeight` | `number`                                       | `400`   | ✕        | Maximum field height with automatic height control                   |
| `helperText`            | `string`                                       | -       | ✕        | Custom helper text                                                   |
| `id`                    | `string`                                       | -       | ✔        | Textarea and label identification                                    |
| `isAutoResizing`        | `boolean`                                      | -       | ✕        | Whether is field auto resizing which adjusts its height while typing |
| `isDisabled`            | `boolean`                                      | -       | ✕        | Whether is field disabled                                            |
| `isLabelHidden`         | `boolean`                                      | -       | ✕        | Whether is label hidden                                              |
| `isRequired`            | `boolean`                                      | -       | ✕        | Whether is field required                                            |
| `label`                 | `string`                                       | -       | ✕        | Label text                                                           |
| `maxLength`             | `number`                                       | -       | ✕        | Maximum number of characters                                         |
| `name`                  | `string`                                       | -       | ✕        | Textarea name                                                        |
| `placeholder`           | `string`                                       | -       | ✕        | Textarea placeholder                                                 |
| `ref`                   | `ForwardedRef<HTMLTextAreaElement>`            | -       | ✕        | Textarea element reference                                           |
| `rows`                  | `number`                                       | -       | ✕        | Number of visible rows                                               |
| `UNSAFE_className`      | `string`                                       | -       | ✕        | Wrapper custom class name                                            |
| `UNSAFE_style`          | `CSSProperties`                                | -       | ✕        | Wrapper custom style                                                 |
| `validationState`       | [Validation dictionary][dictionary-validation] | -       | ✕        | Type of validation state                                             |
| `validationText`        | `string`, `string[]`                           | -       | ✕        | Validation text                                                      |
| `value`                 | `string`                                       | -       | ✕        | Textarea value                                                       |

## Custom component

Text field classes are fabricated using `useTextAreaStyleProps` hook. You can use it to create your own custom TextArea component.

```jsx
const CustomTextArea = (props: SpiritTextAreaProps): JSX.Element => {
  const { classProps, props: modifiedProps } = useTextAreaStyleProps(props);

  return (
    <div className={classProps.root}>
      <textarea {...modifiedProps} className={classProps.input}></textarea>
      <label htmlFor={props.id} className={styleProps.label}>
        {props.label}
      </label>
    </div>
  );
};
```

For detailed information see [TextArea](https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/TextArea/README.md) component.

[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
