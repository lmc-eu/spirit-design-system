# @lmc-eu/spirit-design-tokens

> Design tokens for Spirit Design System.

## Products

Currently supported LMC products, including blank `default` branding:

| Product          | Directory                     | Colors | Radii | Shadows | Spacing | Typography |
|------------------|-------------------------------|--------|-------|---------|---------|------------|
| default          | `src/default`                 | ✅     | ✅     | ✅      | ✅      | ✅         |
| Arnold           | `src/products/arnold`         | —      | —     | —       | —       | —          |
| Atmoskop.cz      | `src/products/atmoskop`       | —      | —     | —       | —       | —          |
| Jobs.cz          | `src/products/jobs`           | —      | —     | —       | —       | —          |
| Jobote           | `src/products/jobote`         | —      | —     | —       | —       | —          |
| Práce.cz         | `src/products/prace`          | —      | —     | —       | —       | —          |
| Práce za rohem   | `src/products/pracezarohem`   | —      | —     | —       | —       | —          |
| Seduo.cz         | `src/products/seduo`          | —      | —     | —       | —       | —          |
| Teamio           | `src/products/teamio`         | —      | —     | —       | —       | —          |
| Techloop         | `src/products/techloop`       | —      | —     | —       | —       | —          |

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
@use 'node_modules/@lmc-eu/spirit-design-tokens/default/scss/colors';
@use 'node_modules/@lmc-eu/spirit-design-tokens/default/scss/typography';

.MyComponent {
    font-family: typography.$font-family-default;
    color: colors.$text-primary-default;
}
```

Or import all tokens at once:

```scss
@use 'node_modules/@lmc-eu/spirit-design-tokens/default/scss/tokens';

.MyComponent {
    font-family: tokens.$font-family-default;
    color: tokens.$text-primary-default;
}
```
