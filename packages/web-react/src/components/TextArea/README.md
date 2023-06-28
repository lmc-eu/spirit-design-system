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
| `autoResizingMaxHeight` | `number`                                       | `400`   | no       | Maximum field height with automatic height control                   |
| `helperText`            | `string`                                       | -       | no       | Custom helper text                                                   |
| `id`                    | `string`                                       | -       | yes      | Textarea and label identification                                    |
| `isAutoResizing`        | `boolean`                                      | -       | no       | Whether is field auto resizing which adjusts its height while typing |
| `isDisabled`            | `boolean`                                      | -       | no       | Whether is field disabled                                            |
| `isLabelHidden`         | `boolean`                                      | -       | no       | Whether is label hidden                                              |
| `isRequired`            | `boolean`                                      | -       | no       | Whether is field required                                            |
| `label`                 | `string`                                       | -       | no       | Label text                                                           |
| `maxLength`             | `number`                                       | -       | no       | Maximum number of characters                                         |
| `name`                  | `string`                                       | -       | no       | Textarea name                                                        |
| `placeholder`           | `string`                                       | -       | no       | Textarea placeholder                                                 |
| `ref`                   | `ForwardedRef<HTMLTextAreaElement>`            | -       | no       | Textarea element reference                                           |
| `rows`                  | `number`                                       | -       | no       | Number of visible rows                                               |
| `validationState`       | [Validation dictionary][dictionary-validation] | -       | no       | Type of validation state                                             |
| `validationText`        | `string`, `string[]`                           | -       | no       | Validation text                                                      |
| `value`                 | `string`                                       | -       | no       | Textarea value                                                       |

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
