# Icon

Icons are graphical metaphors or symbols that can be used to complement existing experiences.

## Getting Started

To use this component in your project you need to run the following command using [npm][npm]:

```bash
npm install -S @lmc-eu/spirit-icons
```

If you prefer [Yarn][yarn], use the following command instead:

```bash
yarn add @lmc-eu/spirit-icons
```

### Dependencies

`@lmc-eu/spirit-icons` is required as a **peer dependency** to keep package size as low as possible.
So it will not be automatically installed with `@lmc-eu/spirit-web-react`.

- [`@lmc-eu/spirit-icons`][icons-package] - Spirit Icons package
- [`html-react-parser`][html-react-parser-package] - HTML to React parser (avoid usage of `dangerouslySetInnerHTML` on the server side)

## Usage

To ensure the `Icon` component functions as expected, wrap your application or the component tree where Icon is used with the `IconsProvider`.
You need to pass the icon set to the provider as its value.

```jsx
import { Icon, IconsProvider } from '@lmc-eu/spirit-web-react';
import icons from '@lmc-eu/spirit-icons/icons';

<IconsProvider value={icons}>{/* Your Icon, app or component where Icon is used */}</IconsProvider>;
```

In case you need to use the `Icon` component with dual-tone icon, you need to pass `dualtoneColor` prop as well.

```jsx
<Icon dualtoneColor="primary" name="shield-dualtone" />
```

### Example

```jsx
import { Icon, IconsProvider } from '@lmc-eu/spirit-web-react';
import icons from '@lmc-eu/spirit-icons/icons';

<IconsProvider value={icons}>
  <Icon name="warning" />
  Hey! Pay attention!
</IconsProvider>;
```

### Full Example

```jsx
import { Icon, IconsProvider } from '@lmc-eu/spirit-web-react';
import icons from '@lmc-eu/spirit-icons/icons';

<IconsProvider value={icons}>
  <Icon name="warning" boxSize={{ mobile: 20, tablet: 30, desktop: 40 }} title="Icon Title" />
  Hey! Pay attention!
</IconsProvider>;
```

## API

| Name            | Type                                                      | Default      | Required | Description                                                                                           |
| --------------- | --------------------------------------------------------- | ------------ | -------- | ----------------------------------------------------------------------------------------------------- |
| `boxSize`       | \[`number` \| `Partial<Record<BreakpointToken, number>>`] | 24           | ✕        | Size of the icon, use object to set responsive values, e.g. `{ mobile: 20, tablet: 30, desktop: 40 }` |
| `dualtoneColor` | [Emotion Color dictionary][dictionary-color]              | `primary` \* | ✕        | Color of the dualtone icon                                                                            |
| `name`          | `string`                                                  | —            | ✓        | Name of the icon                                                                                      |
| `title`         | `string`                                                  | —            | ✕        | Title of the icon                                                                                     |

(\*) Apply only if you are using dualtone icons.

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

For more details about Icons see [Spirit Icons][spirit-icons] package.

[dictionary-color]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#color
[html-react-parser-package]: https://www.npmjs.com/package/html-react-parser
[icons-package]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/icons
[npm]: https://www.npmjs.com/
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
[spirit-icons]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/icons/README.md
[yarn]: https://yarnpkg.com/
