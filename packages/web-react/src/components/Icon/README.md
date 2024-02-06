# Icon

Icons are graphical metaphors or symbols that can be used to complement existing experiences.

## 🚀 Getting started

To use this component in your project you need to run the following command using [npm][npm]:

```bash
npm install -S @lmc-eu/spirit-icons html-react-parser
```

If you prefer [Yarn][yarn], use the following command instead:

```bash
yarn add @lmc-eu/spirit-icons html-react-parser
```

### 📦 Dependencies

Both packages are required as **peer dependency** to keep package size as low as possible.
So they will not be automatically installed with `@lmc-eu/spirit-web-react`.

- [`@lmc-eu/spirit-icons`][icons-package] - Spirit Icons package
- [`html-react-parser`][html-react-parser-package] - HTML to React parser (avoid usage of `dangerouslySetInnerHTML` on the server side)

## 📝 Usage

```jsx
import { Icon, IconsProvider } from '@lmc-eu/spirit-web-react/components';
import icons from '@lmc-eu/spirit-icons/icons';
```

```jsx
<IconsProvider value={icons}>
  <Icon name="warning" />
  Hey! Pay attention!
</IconsProvider>
```

## 🧩 API

| Name      | Type     | Default | Required | Description       |
| --------- | -------- | ------- | -------- | ----------------- |
| `boxSize` | `number` | 24      | ✕        | Size of the icon  |
| `name`    | `string` | —       | ✔        | Name of the icon  |
| `title`   | `string` | —       | ✕        | Title of the icon |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

For more details about Icons see [Spirit Icons][spirit-icons] package.

[html-react-parser-package]: https://www.npmjs.com/package/html-react-parser
[icons-package]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/icons
[npm]: https://www.npmjs.com/
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
[spirit-icons]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/icons/README.md
[yarn]: https://yarnpkg.com/
