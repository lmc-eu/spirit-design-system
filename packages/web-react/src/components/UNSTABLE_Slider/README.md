# UNSTABLE Slider

> ⚠️ This component is UNSTABLE. It may significantly change at any point in the future.
> Please use it with caution.

Slider is a form control that allows users to select a value from a range of values.

## Basic usage

The Slider component implements the HTML [range input][mdn-range] element.

```jsx
import { useState } from 'react';
import { UNSTABLE_Slider } from '@lmc-eu/spirit-web-react/components';

const [value, setValue] = useState();

const handleChange = (event) => {
  setValue(Number(event.target.value));
};

<UNSTABLE_Slider id="slider" label="Slider" value={value} onChange={handleChange} />;
```

### Slider Steps and Value

You can specify the Slider steps and value range by setting the `min`, `max`, and `step` props.

```jsx
import { useState } from 'react';
import { UNSTABLE_Slider } from '@lmc-eu/spirit-web-react/components';

const [value, setValue] = useState();

const handleChange = (event) => {
  setValue(Number(event.target.value));
};

<UNSTABLE_Slider id="slider" label="Slider" min={3} max={12} value={value} onChange={handleChange} />;
```

## Required

ℹ️ As per the [HTML specification][html-spec-range], the Slider component does not support the `required` state.

## Hidden Label

```jsx
<UNSTABLE_Slider id="slider" label="Slider" value={value} onChange={handleChange} isLabelHidden />
```

## Fluid Width

```jsx
<UNSTABLE_Slider id="slider" label="Slider" value={value} onChange={handleChange} isFluid />
```

## Helper Text

```jsx
<UNSTABLE_Slider id="slider" label="Slider" value={value} onChange={handleChange} helperText="Helper text" />
```

## Validation States

Validation states implement the Validation state [dictionary][dictionary-validation].

```jsx
<UNSTABLE_Slider
  id="slider-success"
  label="Slider"
  value={value}
  onChange={handleChange}
  validationState="success"
  validationText="Validation text"
/>
<UNSTABLE_Slider
  id="slider-warning"
  label="Slider"
  value={value}
  onChange={handleChange}
  validationState="warning"
  validationText="Validation text"
/>
<UNSTABLE_Slider
  id="slider-danger"
  label="Slider"
  value={value}
  onChange={handleChange}
  validationState="danger"
  validationText={['First validation text', 'Second validation text']}
/>
```

## Disabled State

```jsx
<UNSTABLE_Slider id="slider-disabled" label="Slider" value={value} onChange={handleChange} isDisabled />
```

### API

| Attribute         | Type                                           | Default | Required | Description                                               |
| ----------------- | ---------------------------------------------- | ------- | -------- | --------------------------------------------------------- |
| `helperText`      | `string`                                       | -       | ✕        | Custom helper text                                        |
| `id`              | `string`                                       | -       | ✓        | Input and label identification                            |
| `isDisabled`      | `bool`                                         | `false` | ✕        | Whether is the input disabled                             |
| `isFluid`         | `bool`                                         | `false` | ✕        | Whether the element spans to the full width of its parent |
| `isLabelHidden`   | `bool`                                         | `false` | ✕        | Whether the label is hidden                               |
| `label`           | `string`                                       | -       | ✓        | Label text                                                |
| `max`             | `number`                                       | 100     | ✕        | Max value of slider input                                 |
| `min`             | `number`                                       | 0       | ✕        | Min value of slider input                                 |
| `onChange`        | `() => void`                                   | -       | ✓        | On input change callback                                  |
| `step`            | `number`                                       | 1       | ✕        | Sets the stepping interval                                |
| `validationState` | [Validation dictionary][dictionary-validation] | -       | ✕        | Type of validation state                                  |
| `validationText`  | [`string` \| `string[]`]                       | -       | ✕        | Validation text                                           |
| `value`           | `number`                                       | -       | ✓        | Input value                                               |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

# UNSTABLE UncontrolledSlider

## Basic usage

```jsx
import UNSTABLE_UncontrolledSlider from '../UNSTABLE_UncontrolledSlider';

<UNSTABLE_UncontrolledSlider id="slider-uncontrolled" label="UncontrolledSlider" />;
```

### API

| Attribute        | Type         | Default | Required | Description                                               |
| ---------------- | ------------ | ------- | -------- | --------------------------------------------------------- |
| `helperText`     | `string`     | -       | ✕        | Custom helper text                                        |
| `id`             | `string`     | -       | ✓        | Input and label identification                            |
| `isDisabled`     | `bool`       | `false` | ✕        | Whether is the input disabled                             |
| `isFluid`        | `bool`       | `false` | ✕        | Whether the element spans to the full width of its parent |
| `isLabelHidden`  | `bool`       | `false` | ✕        | Whether the label is hidden                               |
| `label`          | `string`     | -       | ✓        | Label text                                                |
| `max`            | `number`     | 100     | ✕        | Max value of slider input                                 |
| `min`            | `number`     | 0       | ✕        | Min value of slider input                                 |
| `onChange`       | `() => void` | -       | ✕        | On input change callback                                  |
| `step`           | `number`     | 1       | ✕        | Sets the stepping interval                                |
| `validationText` | `string`     | -       | ✕        | Validation text                                           |
| `value`          | `number`     | 0       | ✕        | Input value                                               |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
[html-spec-range]: https://html.spec.whatwg.org/multipage/input.html#range-state-(type=range)
[mdn-range]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
