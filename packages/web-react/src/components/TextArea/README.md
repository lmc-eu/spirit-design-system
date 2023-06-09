# TextArea

TextArea enables the user to add longer text to a form. It has textarea, label,
and an optional message. It could be disabled or have a validation state. The label could be hidden
and show if the textarea is required.

```jsx
<TextArea id="example" name="example" validationState="danger" message="validation failed" isRequired />
```

## Textarea with Auto-Height Adjustment

```jsx
<TextArea id="example" name="example" isAutoResizing autoResizingMaxHeight={500} />
```

## Available props

| Prop name               | Type                                           | Default | Required | Description                                                          |
| ----------------------- | ---------------------------------------------- | ------- | -------- | -------------------------------------------------------------------- |
| `id`                    | `string`                                       | -       | yes      | Textarea and label identification                                    |
| `name`                  | `string`                                       | -       | no       | Textarea name                                                        |
| `label`                 | `string`                                       | -       | no       | Label text                                                           |
| `placeholder`           | `string`                                       | -       | no       | Textarea placeholder                                                 |
| `value`                 | `string`                                       | -       | no       | Textarea value                                                       |
| `maxLength`             | `number`                                       | -       | no       | Maximum number of characters                                         |
| `message`               | `string`, `string[]`                           | -       | no       | Validation message                                                   |
| `rows`                  | `number`                                       | -       | no       | Number of visible rows                                               |
| `ref`                   | `ForwardedRef<HTMLTextAreaElement>`            | -       | no       | Textarea element reference                                           |
| `validationState`       | [Validation dictionary][dictionary-validation] | -       | no       | Type of validation state.                                            |
| `isAutoResizing`        | `boolean`                                      | -       | no       | Whether is field auto resizing which adjusts its height while typing |
| `isDisabled`            | `boolean`                                      | -       | no       | Whether is field disabled                                            |
| `isRequired`            | `boolean`                                      | -       | no       | Whether is field required                                            |
| `isLabelHidden`         | `boolean`                                      | -       | no       | Whether is label hidden                                              |
| `helperText`            | `string`                                       | -       | no       | Custom helper text                                                   |
| `autoResizingMaxHeight` | `number`                                       | `400`   | no       | Maximum field height with automatic height control                   |

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
