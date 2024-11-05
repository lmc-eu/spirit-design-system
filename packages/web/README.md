<!-- @see: https://github.com/ilyatitovich/remark-lint-heading-capitalization/issues/13 -->
<!--lint disable heading-capitalization -->

# @lmc-eu/spirit-web

<!--lint enable heading-capitalization -->

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

The pre-built Spirit CSS is a great choice for small one-off projects, prototypes and documentations.

Link the complete, vendor-prefixed and minimised CSS with default Spirit branding in your HTML template:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" />
<link rel="stylesheet" href="node_modules/@lmc-eu/spirit-web/css/themes.min.css" />
<link rel="stylesheet" href="node_modules/@lmc-eu/spirit-web/css/foundation.min.css" />
<link rel="stylesheet" href="node_modules/@lmc-eu/spirit-web/css/components.min.css" />
<link rel="stylesheet" href="node_modules/@lmc-eu/spirit-web/css/helpers.min.css" />
<link rel="stylesheet" href="node_modules/@lmc-eu/spirit-web/css/utilities.min.css" />
```

👉 Alternatively, you can use [CDN](#cdn) links when you don't want to install any npm packages.

### Advanced Implementation in Product with Sass

❗ **Important:** Make sure you have `sass` dependency installed in your project (`sass` is marked as optional peer dependency since you can use the pre-built distribution CSS).
And also [configure Sass load path][configuring-load-path] for `@tokens` and
`node_modules` so all dependencies are resolved correctly by Sass.

Having the Sass load path configured, import just the components you need in
your Sass stylesheet:

```scss
@use 'node_modules/@lmc-eu/spirit-web/scss/components/Button';
```

### Prefixing CSS Class Names

You can add prefixes to CSS class names to better separate Spirit from other CSS
in your project. The recommended way is using PostCSS with the
[`postcss-prefix-selector`][postcss-prefix-selector] plugin:

```js
// postcss.config.js

const postcssPrefixSelector = require('postcss-prefix-selector');

module.exports = {
  plugins: [
    postcssPrefixSelector({
      prefix: 'spirit-',
      transform(prefix, selector) {
        // Ignore interaction state classes controlled by JS: .is-* | .has-*
        const regex = /\.(?!is-|has-)/gi;
        return selector.replaceAll(regex, `.${prefix}`);
      },
    }),
  ],
};
```

### JavaScript

Some components require JavaScript plugins for their full functionality. You can use individual modules or compiled bundle.

#### Individual or Compiled

Plugins can be included individually as an EcmaScript module (using `import { <plugin> } from '@lmc-eu/spirit-web'`, see [Using Spirit Web as a module](#using-spirit-web-as-a-module)), or all at once using `js/{cjs|esm|bundle}/spirit-web.js` or the minified `js/{cjs|esm|bundle}/spirit-web.min.js` (do not include both), all files are UMD ready.

```html
<script src="node_modules/@lmc-eu/spirit-web/js/cjs/spirit-web.min.js" async></script>
```

If you use a bundler (Webpack, Rollup, ...), you can use `/js/*.js` files which are EcmaScript modules.

#### Using Spirit Web as a Module in Browser

We provide a version of Spirit Web as `ESM` (`spirit-web.esm.js` and `spirit-web.esm.min.js`) which allows you to use Spirit Web as a module in your browser.

```html
<script type="module">
  import { Header } from 'spirit-web.esm.min.js';

  Array.from(document.querySelectorAll('.header')).forEach((headerNode) => new Header(headerNode));
</script>
```

#### Data Attributes

Nearly all Spirit-Web plugins can be enabled and configured through HTML alone with data attributes (our preferred way of using JavaScript functionality).
Be sure to only use one set of data attributes on a single element (e.g., you cannot trigger a tooltip and modal from the same button.).

ℹ️ For turning off this functionality just do not set the `data-spirit-toggle` attribute and use the Programnatic API.

> #### Selectors
>
> Currently to query DOM elements we use the native methods `querySelector` and `querySelectorAll` for performance reasons, so you have to use valid selectors.
> If you use special selectors, for example: `collapse:Example` be sure to escape them.

#### Events

Spirit-Web provides custom events for most plugins' unique actions.
Generally, these come in an infinitive and past participle form - where the infinitive (ex. `show`) is triggered at the start of an event, and its past participle form (ex. `shown`) is triggered on the completion of an action.

All infinitive events provide [`preventDefault()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) functionality.
This provides the ability to stop the execution of an action before it starts.
Returning false from an event handler will also automatically call `preventDefault()`.

```javascript
var myModal = document.getElementById('my-modal');

myModal.addEventListener('show.modal', function (event) {
  if (!data) {
    return event.preventDefault(); // stops modal from being shown
  }
});
```

#### Programmatic API

```javascript
var myModalEl = document.getElementById('my-modal');

var modal = new Modal(myModalEl); // initialized with defaults
```

If you’d like to get a particular plugin instance, each plugin exposes a `getInstance` method.

#### CSS Selectors in Constructors

You can also use a CSS selector as the first argument instead of a DOM element to initialize the plugin.
Currently the element for the plugin is found by the `querySelector` method since our plugins support a single element only.

```javascript
var modal = new Modal('#myModal');
var dropdown = new Dropdown('[data-spirit-toggle="dropdown"]');
```

### CDN

Spirit Design System is also available on CDN:

| Description     | URL                                                                                       |
| --------------- | ----------------------------------------------------------------------------------------- |
| CSS: Foundation | https://cdn.jsdelivr.net/npm/@lmc-eu/spirit-web@latest/css/foundation.min.css             |
| CSS: Components | https://cdn.jsdelivr.net/npm/@lmc-eu/spirit-web@latest/css/components.min.css             |
| CSS: Helpers    | https://cdn.jsdelivr.net/npm/@lmc-eu/spirit-web@latest/css/helpers.min.css                |
| CSS: Themes     | https://cdn.jsdelivr.net/npm/@lmc-eu/spirit-web@latest/css/themes.min.css                 |
| CSS: Utilities  | https://cdn.jsdelivr.net/npm/@lmc-eu/spirit-web@latest/css/utilities.min.css              |
| JavaScript      | https://cdn.jsdelivr.net/npm/@lmc-eu/spirit-web@latest/js/bundle/spirit-web.bundle.min.js |

👉 Consider using a specific version instead of `latest` in production.

## Rebranding

Design tokens and their [`@tokens` API][tokens-api] enable quick and easy
rebranding of Spirit Sass components and styles. Once you have created your own
design tokens, just provide them to your Sass compiler and you are ready to go!
Learn more in the [`spirit-design-tokens` docs][rebranding].

## Development

Start local development server with `yarn start` to get started. You will get the live preview of all components and plugins in your browser. Just get dirty and change something and you will see the changes live.

The dev-stack is based on [Vite][vite].

## Deprecations

This package uses the deprecation warnings for props, functions and components that will be removed or replaced in the next major release.
Check your browser console to see if you are using any of the deprecated functionality.

![Deprecations in the Browser's console][deprecations]

## Feature Flags

👀 See [Feature Flags documentation][feature-flags-docs] for how to use them.

## Examples

👀 See [examples][examples] for a live demo.

## License

See the [LICENSE][license] file for information.

[configuring-load-path]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/design-tokens#configuring-load-path
[deprecations]: https://github.com/lmc-eu/spirit-design-system/blob/main/static/deprecations-browser-console.png?raw=true
[examples]: https://spirit-design-system.netlify.app/packages/web/
[feature-flags-docs]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/contribution/feature-flags.md
[license]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/LICENSE.md
[postcss-prefix-selector]: https://www.npmjs.com/package/postcss-prefix-selector
[rebranding]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/design-tokens#b-via-load-path
[tokens-api]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/design-tokens#tokens-api
[vite]: https://vitejs.dev
