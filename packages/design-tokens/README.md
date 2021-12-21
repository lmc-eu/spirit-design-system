# @lmc-eu/spirit-design-tokens

> Design tokens for Spirit Design System.

## Install

```shell
yarn add @lmc-eu/spirit-design-tokens
```

or

```shell
npm install --save @lmc-eu/spirit-design-tokens
```

## Usage

### Sass

In Sass, import individual files by token categories:

```scss
@use 'node_modules/@lmc-eu/spirit-design-tokens/scss/colors';
@use 'node_modules/@lmc-eu/spirit-design-tokens/scss/typography';

.MyComponent {
  font-family: typography.$font-family-default;
  color: colors.$text-primary-default;
}
```

Or import all tokens at once:

```scss
@use 'node_modules/@lmc-eu/spirit-design-tokens/scss' as tokens;

.MyComponent {
  font-family: tokens.$font-family-default;
  color: tokens.$text-primary-default;
}
```

## License

See the [LICENSE](LICENSE.md) file for information.
