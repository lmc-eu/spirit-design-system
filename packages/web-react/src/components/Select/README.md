# Select

```jsx
<Select id="example" name="example" validationState="danger" validationText="validation failed" isRequired>
  <option value="" selected disabled>
    Placeholder
  </option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</Select>
```

## Available props

| Prop name         | Type                                           | Default | Required | Description                     |
| ----------------- | ---------------------------------------------- | ------- | -------- | ------------------------------- |
| `children`        | `ReactNode`                                    | `null`  | no       | Content of the Select           |
| `id`              | `string`                                       | -       | yes      | Select and label identification |
| `name`            | `string`                                       | -       | no       | Select name                     |
| `label`           | `string`                                       | -       | no       | Label text                      |
| `validationText`  | `string`, `string[]`                           | -       | no       | Validation text                 |
| `ref`             | `ForwardedRef<HTMLSelectElement>`              | -       | no       | Select element reference        |
| `validationState` | [Validation dictionary][dictionary-validation] | -       | no       | Type of validation state        |
| `isDisabled`      | `boolean`                                      | -       | no       | Whether is field disabled       |
| `isRequired`      | `boolean`                                      | -       | no       | Whether is field required       |
| `isLabelHidden`   | `boolean`                                      | -       | no       | Whether is label hidden         |
| `isFluid`         | `boolean`                                      | -       | no       | Whether is field is fluid       |
| `helperText`      | `string`                                       | -       | no       | Custom helper text              |

## Icons Provider

To display the icons correctly, the component needs to be wrapped with IconsProvider.

```jsx
import { IconsProvider } from 'packages/web-react/src/context';

<IconsProvider>
  <Select />
</IconsProvider>;
```

## Custom component

Select classes are fabricated using `useSelectStyleProps` hook. You can use it to create your own custom Select component.

```jsx
const CustomSelect = (props: SpiritSelectProps): JSX.Element => {
  const { classProps, props: modifiedProps } = useSelectStyleProps(props);
  const { styleProps, props: transferProps } = useStyleProps(restProps);

  const renderValidationText = useValidationText({
    validationTextClassName: classProps.validationText,
    validationState,
    validationText,
    requireValidationState: false,
  });

  return (
    <div {...styleProps} className={classNames(classProps.root, styleProps.className)}>
      <label htmlFor={id} className={classProps.label}>
        {label}
      </label>
      <div className={classProps.container}>
        <select {...transferProps} id={id} className={classProps.input} ref={ref}>
          {children}
        </select>
        <div className={classProps.icon}>
          <Icon name={iconName} />
        </div>
      </div>
      {helperText && <div className={classProps.helperText}>{helperText}</div>}
      {renderValidationText}
    </div>
  );
};
```

For detailed information see [Select][select] component or [Select][select-element] element.

[select]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/Select/README.md
[select-element]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select
[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
