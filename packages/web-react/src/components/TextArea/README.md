# TextArea

TextArea enables the user to add longer text to a form. It has textarea, label,
and an optional message. It could be disabled or have an error state. The label could be hidden
and show if the textarea is required.

```jsx
<TextArea id="example" name="example" validationState="error" message="validation failed" isRequired />
```

## Available props

| Name              | Type                          | Description                       |
| ----------------- | ----------------------------- | --------------------------------- |
| `id`              | string                        | Textarea and label identification |
| `name`            | string                        | Textarea name                     |
| `label`           | string                        | Label text                        |
| `placeholder`     | string                        | Textarea placeholder              |
| `value`           | string                        | Textarea value                    |
| `maxLength`       | number                        | Maximum number of characters      |
| `message`         | string                        | Validation or help message        |
| `rows`            | number                        | Number of visible rows            |
| `validationState` | `success`, `warning`, `error` | Type of validation state          |
| `isDisabled`      | boolean                       | Whether is field disabled         |
| `isRequired`      | boolean                       | Whether is field required         |
| `isLabelHidden`   | boolean                       | Whether is label hidden           |

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

For detailed information see [TextArea](https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/components/TextArea/README.md) component.
