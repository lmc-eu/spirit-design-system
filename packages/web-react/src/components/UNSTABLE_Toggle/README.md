# UNSTABLE Toggle

> ⚠️ This component is UNSTABLE. It may significantly change at any point in the future.
> Please use it with caution.

Toggle is a form control that allows users to switch between two states.

## Basic Usage

The Toggle component implements the HTML [checkbox input][mdn-checkbox] element. It uses
the native input element and styles it to look like a toggle switch.

```jsx
import { UNSTABLE_Toggle } from '@lmc-eu/spirit-web-react/components';

<UNSTABLE_Toggle id="toggle-default" label="Toggle Label" />;
```

## Indicators

If you need to indicate the state of the toggle, you can add the `hasIndicators` prop. This will add a visual indicators to the toggle switch.

```jsx
<UNSTABLE_Toggle id="toggle-indicators" label="Toggle Label" hasIndicators />
```

## Required

Add the `isRequired` prop to mark it as required.

```jsx
<UNSTABLE_Toggle id="toggle-required" label="Toggle Label" isRequired />
```

## Hidden Label

```jsx
<UNSTABLE_Toggle id="toggle-hidden-label" label="Toggle Label" isLabelHidden />
```

## Fluid

```jsx
<UNSTABLE_Toggle id="toggle-fluid" label="Toggle Label" isFluid />
```

## Helper Text

```jsx
<UNSTABLE_Toggle id="toggle-helper-text" label="Toggle Label" helperText="Helper text" />
```

## Validation States

Validation states can be presented by prop `validationState`. See Validation state [dictionary][dictionary-validation].

```jsx
<UNSTABLE_Toggle id="toggle-success" label="Toggle Label" validationState="success" />
<UNSTABLE_Toggle
  id="toggle-warning"
  label="Toggle Label"
  validationText="Validation text"
  validationState="warning"
  isChecked
/>
<UNSTABLE_Toggle
  id="toggle-danger"
  label="Toggle Label"
  validationText={['First validation text', 'Second validation text']}
  validationState="danger"
/>
```

## Disabled State

You can add `isDisabled` prop to disable Toggle.

```jsx
<UNSTABLE_Toggle id="toggle-disabled" label="Toggle Label" isDisabled />
```

## API

| Name              | Type                                           | Default | Required | Description                                          |
| ----------------- | ---------------------------------------------- | ------- | -------- | ---------------------------------------------------- |
| `autoComplete`    | `string`                                       | -       | ✕        | [Automated assistance in filling][autocomplete-attr] |
| `hasIndicators`   | boolean                                        | `false` | ✕        | Whether has visual indicators                        |
| `helperText`      | string                                         | -       | ✕        | Helper text                                          |
| `id`              | string                                         | -       | ✓        | Input and label identification                       |
| `isChecked`       | boolean                                        | `false` | ✕        | Whether is toggle checked                            |
| `isDisabled`      | boolean                                        | `false` | ✕        | Whether is toggle disabled                           |
| `isFluid`         | boolean                                        | `false` | ✕        | Whether is toggle fluid                              |
| `isLabelHidden`   | boolean                                        | `false` | ✕        | Whether is label hidden                              |
| `label`           | string                                         | -       | ✓        | Label text                                           |
| `name`            | string                                         | -       | ✕        | Input name                                           |
| `onChange`        | (event: ChangeEvent<HTMLInputElement>) => void | -       | ✕        | Change event handler                                 |
| `ref`             | `ForwardedRef<HTMLInputElement>`               | -       | ✕        | Input element reference                              |
| `validationState` | [Validation dictionary][dictionary-validation] | -       | ✕        | Type of validation state                             |
| `validationText`  | `string` \| `string[]`                         | -       | ✕        | Validation text                                      |

The components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

[autocomplete-attr]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
[mdn-checkbox]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
