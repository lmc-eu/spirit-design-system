# Alert

Alert presents feedback or important information to users.

```jsx
import { Alert } from '@lmc-eu/spirit-web-react/components';
```

```jsx
<Alert color="success">Hey! Pay attention!</Alert>
<Alert color="informative">Hey! Pay attention!</Alert>
<Alert color="warning">Hey! Pay attention!</Alert>
<Alert color="danger">Hey! Pay attention!</Alert>
<Alert color="informative" iconName="warning">Hey! Pay attention!</Alert>
<Alert color="informative" isCentered>Hey! Pay attention!</Alert>
```

## Default Icons according to Color Variant

| Color name    | Icon name     |
| ------------- | ------------- |
| `danger`      | `danger`      |
| `default`     | `info`        |
| `informative` | `info`        |
| `success`     | `check-plain` |
| `warning`     | `warning`     |

## API

| Name           | Type                                         | Default   | Required | Description                |
| -------------- | -------------------------------------------- | --------- | -------- | -------------------------- |
| `children`     | `ReactNode`                                  | —         | ✔        | Content of the Alert       |
| `color`        | [Emotion Color dictionary][dictionary-color] | `success` | ✕        | Color of the component     |
| `iconName`     | `string`                                     | `info` \* | ✕        | Icon used in Alert         |
| `isCentered` . | `bool`                                       | `false`   | ✕        | If true, Alert is centered |

(\*) For each emotion color, a default icon is defined.
The icons come from the [Icon package][icon-package], or from your custom source of icons.
Read the section [Default Icons according to Color Variant](#default-icons-according-to-color-variant).

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

For detailed information see [Alert][alert] component.

[alert]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/Alert/README.md
[dictionary-color]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#color
[icon-package]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/icons
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
