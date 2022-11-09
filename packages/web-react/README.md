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

## Styling

Spirit components are designed to be consistent across all LMC applications. They include built-in styling that has been
considered carefully, and extensively tested. In general, customizing Spirit design is discouraged, but most components
do offer control over layout and other aspects. In addition, you can use Spirit defined design tokens to ensure your
application conforms to design requirements, and is adaptive across platform scales and color schemes.

### Escape hatches

While we encourage teams to utilize Spirit design as it is, we do realize that sometimes product specific customizations
may be needed. In these cases, we encourage you or your designers to **talk to us**. We may be able to suggest
an alternative implementation strategy, or perhaps your design can help inform future Spirit additions.

While the traditional className and style props are not supported in Spirit Web React components, there are two escape
hatches that you can **use at your own risk**. These are UNSAFE_className and UNSAFE_style. Use of these props should be
considered **a last resort**. They can be used to work around bugs or limitations in Spirit Web React, but should
not be used in the long term.

The reasoning behind this is that future updates to Spirit design may cause unintended breaking changes in products.
If the internal DOM structure or CSS properties of a Spirit Web React component change, this may lead to conflicts
with CSS overrides in products. For this reason, className and style are unsafe, and if you use them know that you
are doing so at your own risk.

Please consult additional styling with [web package documentation][web-pkg-rebrand].

## Development

- `% yarn storybook` starts development server with Storybook

## Testing

- `% cd <your-local-path>/spirit-design-system/packages/web-react`
- `% yarn test` or `% yarn test:unit`

## Examples

👀 See [example] for a live demo.

## License

See the [LICENSE](LICENSE.md) file for information.

[web-docs]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md
[examples]: https://lmc-eu.github.io/spirit-design-system/web-react/
[web-pkg-rebrand]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web#rebranding
[web-pkg-prefixes]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web#prefixing-css-class-names
