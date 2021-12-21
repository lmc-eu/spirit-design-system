# @lmc-eu/spirit-web

> CSS and vanilla JS implementation of Spirit Design System.

## Install

```shell
yarn add @lmc-eu/spirit-web
```

or

```shell
npm install --save @lmc-eu/spirit-web
```

## Usage

### CSS

Link the full, prefixed and minimised CSS with default Spirit branding in your
HTML template:

```html
<link rel="stylesheet" href="node_modules/@lmc-eu/spirit-web/css/components.min.css" />
```

### Sass

Import just the components you need in your Sass stylesheet:

```scss
@use 'node_modules/@lmc-eu/spirit-web/scss/components/Button';
```

Make sure you have added Sass load paths for `tokens` and `*.theme` Sass
modules so they are resolved correctly. See [theming] to learn how it works.

## Examples

👀 See [example] for a live demo.

## License

See the [LICENSE](LICENSE.md) file for information.

[theming]: https://github.com/lmc-eu/spirit-design-system/blob/main/src/web/THEMING.md
[examples]: https://lmc-eu.github.io/spirit-design-system/web/
