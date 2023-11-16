# Icon

Icons are graphical metaphors or symbols that can be used to complement existing experiences.

## 🚀 Getting started

To use this component in your project you need to run the following command using [npm](https://www.npmjs.com/):

```bash
npm install -S @lmc-eu/spirit-icons html-react-parser
```

If you prefer [Yarn](https://yarnpkg.com/), use the following command instead:

```bash
yarn add @lmc-eu/spirit-icons html-react-parser
```

### 📦 Dependencies

Both packages are required as **peer dependency** to keep package size as low as possible.
So they will not be automatically installed with `@lmc-eu/spirit-web-react`.

- [`@lmc-eu/spirit-icons`](https://github.com/lmc-eu/spirit-design-system/tree/main/packages/icons) - Spirit Icons package
- [`html-react-parser`](https://www.npmjs.com/package/html-react-parser) - HTML to React parser (avoid usage of `dangerouslySetInnerHTML` on the server side)

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

| Name               | Type            | Default | Required | Description               |
| ------------------ | --------------- | ------- | -------- | ------------------------- |
| `boxSize`          | `number`        | 24      | ✕        | Size of the icon          |
| `name`             | `string`        | —       | ✔        | Name of the icon          |
| `title`            | `string`        | —       | ✕        | Title of the icon         |
| `UNSAFE_className` | `string`        | —       | ✕        | Wrapper custom class name |
| `UNSAFE_style`     | `CSSProperties` | —       | ✕        | Wrapper custom style      |

For more details about Icons see [Spirit Icons](https://github.com/lmc-eu/spirit-design-system/blob/main/packages/icons/README.md) package.
