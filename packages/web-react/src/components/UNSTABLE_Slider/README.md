# UNSTABLE Slider

> ⚠️ This component is UNSTABLE. It may significantly change at any point in the future.
> Please use it with caution.

## Basic usage

```jsx
import { useState } from 'react';
import { UNSTABLE_Slider } from '@lmc-eu/spirit-web-react/components';

const [value, setValue] = useState();

const handleChange = (event) => {
  setValue(Number(event.target.value));
};

<UNSTABLE_Slider id="slider" label="Slider" value={value} onChange={handleChange} />;
```

### API

| Attribute        | Type                     | Default | Required | Description                                               |
| ---------------- | ------------------------ | ------- | -------- | --------------------------------------------------------- |
| `helperText`     | `string`                 | -       | ✕        | Custom helper text                                        |
| `id`             | `string`                 | -       | ✓        | Input and label identification                            |
| `isFluid`        | `bool`                   | `false` | ✕        | Whether the element spans to the full width of its parent |
| `isLabelHidden`  | `bool`                   | `false` | ✕        | Whether the label is hidden                               |
| `isRequired`     | `bool`                   | `false` | ✕        | Whether is the input required                             |
| `isSelected`     | `bool`                   | `false` | ✕        | Whether is the input selected                             |
| `label`          | `string`                 | -       | ✓        | Label text                                                |
| `max`            | `number`                 | 100     | ✕        | Max value of slider input                                 |
| `min`            | `number`                 | 0       | ✕        | Min value of slider input                                 |
| `onChange`       | `() => void`             | -       | ✓        | On input change callback                                  |
| `step`           | `number`                 | 1       | ✕        | Sets the stepping interval                                |
| `validationText` | [`string` \| `string[]`] | -       | ✕        | Validation text                                           |
| `value`          | `number`                 | -       | ✓        | Input value                                               |

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
| `isFluid`        | `bool`       | `false` | ✕        | Whether the element spans to the full width of its parent |
| `isLabelHidden`  | `bool`       | `false` | ✕        | Whether the label is hidden                               |
| `isRequired`     | `bool`       | `false` | ✕        | Whether is the input required                             |
| `isSelected`     | `bool`       | `false` | ✕        | Whether is the input selected                             |
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

[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
