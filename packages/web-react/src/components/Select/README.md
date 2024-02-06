# Select

This is React implementation of the [Select][select] component.

Basic example usage:

```jsx
<Select id="selectDefault" label="Label" name="selectDefault">
  <option value="" selected>
    Placeholder
  </option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</Select>
```

Advanced example usage:

```jsx
<Select
  id="selectAdvanced"
  name="selectAdvanced"
  validationState="danger"
  validationText="validation failed"
  isRequired
>
  <option value="" selected disabled>
    Placeholder
  </option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</Select>
```

## API

| Name              | Type                                           | Default | Required | Description                     |
| ----------------- | ---------------------------------------------- | ------- | -------- | ------------------------------- |
| `children`        | `ReactNode`                                    | `null`  | ✕        | Content of the Select           |
| `helperText`      | `string`                                       | —       | ✕        | Custom helper text              |
| `id`              | `string`                                       | —       | ✔        | Select and label identification |
| `isDisabled`      | `bool`                                         | —       | ✕        | Whether is field disabled       |
| `isFluid`         | `bool`                                         | —       | ✕        | Whether is field is fluid       |
| `isLabelHidden`   | `bool`                                         | —       | ✕        | Whether is label hidden         |
| `isRequired`      | `bool`                                         | —       | ✕        | Whether is field required       |
| `label`           | `string`                                       | —       | ✕        | Label text                      |
| `name`            | `string`                                       | —       | ✕        | Select name                     |
| `ref`             | `ForwardedRef<HTMLSelectElement>`              | —       | ✕        | Select element reference        |
| `validationState` | [Validation dictionary][dictionary-validation] | —       | ✕        | Type of validation state        |
| `validationText`  | [`string` \| `string[]`]                       | —       | ✕        | Validation text                 |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

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

[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
[select-element]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select
[select]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/Select/README.md
