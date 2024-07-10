# UNSTABLE Truncate

> ⚠️ This component is UNSTABLE. It may significantly change at any point in the future.
> Please use it with caution.

Truncate is a component that truncates text based on defined number of rows.

```jsx
import { UNSTABLE_Truncate } from '@lmc-eu/spirit-web-react';

<UNSTABLE_Truncate>{/* Text go here */}</UNSTABLE_Truncate>;
```

## Lines

You can add the number of lines to which you want to truncate the text using `lines` props

```jsx
<UNSTABLE_Truncate lines={2}>{/* Text go here */}</UNSTABLE_Truncate>
```

## API

| Name          | Type                    | Default | Required | Description                                        |
| ------------- | ----------------------- | ------- | -------- | -------------------------------------------------- |
| `children`    | `string` \| `ReactNode` | `null`  | ✓        | Content of the Truncate                            |
| `elementType` | `ElementType`           | `span`  | ✕        | Type of element used                               |
| `lines`       | `number`                | 3       | ✕        | The number of lines on which the text is truncated |

The components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
