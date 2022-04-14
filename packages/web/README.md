# @lmc-eu/spirit-web

> CSS implementation of Spirit Design System.

## Install

```shell
yarn add @lmc-eu/spirit-web
```

or

```shell
npm install --save @lmc-eu/spirit-web
```

## Usage

### Quick Start with CSS

The pre-built Spirit CSS is a great choice for small one-off projects,
prototypes and documentations.

Link the full, vendor-prefixed and minimised CSS with default Spirit branding
in your HTML template:

```html
<link rel="stylesheet" href="node_modules/@lmc-eu/spirit-web/css/components.min.css" />
```

### Advanced Implementation in Product with Sass

❗ **Important:** Make sure you have
[configured Sass load path][configuring-load-path] for `@tokens` and
`node_modules` so all dependencies are resolved correctly by Sass.

Having the Sass load path configured, import just the components you need in
your Sass stylesheet:

```scss
@use 'node_modules/@lmc-eu/spirit-web/scss/components/Button';
```

### Prefixing CSS Class Names

You can add prefixes to CSS class names to better separate Spirit from other CSS
in your project. The recommended way is using PostCSS with the
[`postcss-prefixer`][postcss-prefixer] plugin:

```js
// postcss.config.js

const postcssPrefixer = require('postcss-prefixer');

module.exports = {
  plugins: [
    postcssPrefixer({
      prefix: 'spirit-',
      // Ignore interaction state classes controlled by JS:
      ignore: [/^.is-/, /^.has-/],
    }),
  ],
};
```

## Rebranding

Design tokens and their [`@tokens` API][tokens-api] enable quick and easy
rebranding of Spirit Sass components and styles. Once you have created your own
design tokens, just provide them to your Sass compiler and you are ready to go!
Learn more in the [`spirit-design-tokens` docs][rebranding].

👀 Head to the [rebranding example] to see how it works.

## Examples

👀 See [examples] for a live demo.

## License

See the [LICENSE](LICENSE.md) file for information.

[configuring-load-path]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/design-tokens#configuring-load-path
[tokens-api]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/design-tokens#tokens-api
[rebranding]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/design-tokens#b-via-load-path
[rebranding example]: https://github.com/lmc-eu/spirit-design-system/tree/main/examples/web/src/jobs
[examples]: https://lmc-eu.github.io/spirit-design-system/web/
[postcss-prefixer]: https://www.npmjs.com/package/postcss-prefixer
