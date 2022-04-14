# @lmc-eu/spirit-web-react

> React implementation of Spirit Design System components.

## Install

Expecting you have `react` and `react-dom` installed in your app, run:

```shell
yarn add @lmc-eu/spirit-web @lmc-eu/spirit-web-react
```

or

```shell
npm install --save @lmc-eu/spirit-web @lmc-eu/spirit-web-react
```

## Usage

Link Spirit CSS (see [`spirit-web` docs][web-docs] for more options):

```html
<link rel="stylesheet" href="node_modules/@lmc-eu/spirit-web/css/components.min.css" />
```

Import React components in your app:

```jsx
import { Button } from '@lmc-eu/spirit-web-react/components/Button';
```

### Prefixing CSS classes in components

If you want to prefix the component classes with your own namespace, you can use the `ClassNamePrefixProvider` context to provide a prefix to all components in your app.

Check [`spirit-web` docs][web-pkg-prefixes] to learn how to prefix CSS class names.

```jsx
import { ClassNamePrefixProvider } from '@lmc-eu/spirit-web-react/context/ClassNamePrefixContext';

<ClassNamePrefixProvider value="jobs">
  <Button>Button</Button>
</ClassNamePrefixProvider>;
```

## Component API and Disallowed props

For consistency in design we are filtering some props from the components. Please consult additional styling with [web package documentation][web-pkg-rebrand].

List of disallowed props:

- `className`
- `style`

## Examples

👀 See [example] for a live demo.

## License

See the [LICENSE](LICENSE.md) file for information.

[web-docs]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md
[examples]: https://lmc-eu.github.io/spirit-design-system/web-react/
[web-pkg-rebrand]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web#rebranding
[web-pkg-prefixes]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web#prefixing-css-class-names
