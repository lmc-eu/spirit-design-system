# @lmc-eu/spirit-icons

> Icons of Spirit Design System.

## Install

🙋🏻‍♂️ **Hold on! Do you already use [`spirit-web`]?** Then you don't need to
install this package because `spirit-icons` is installed automatically
as a dependency of [`spirit-web`].

If you want to use just `spirit-icons` alone in your project, run:

```shell
yarn add @lmc-eu/spirit-icons
```

or

```shell
npm install --save @lmc-eu/spirit-icons
```

## Usage

### SVG files

You can use SVG files directly from `@lmc-eu/spirit-icons/svg` directory by importing them or copying them to your app structure.

### React

You can import SVG files directly from `@lmc-eu/spirit-icons/svg` directory in React components using library like [React SVGR](https://react-svgr.com/).

Example configuration for Webpack:

```js
rules.unshift({
  test: /\.svg$/,
  enforce: 'pre',
  use: ['@svgr/webpack'],
});
```

```jsx
import Warning from '@lmc-eu/spirit-icons/svg/warning.svg';

<Warning />;
```

Or you can import React components directly from `@lmc-eu/spirit-icons/react`.

⚠️ Beware of naming, as all React component does, they are named using **PascalCase**.

```jsx
import Warning from '@lmc-eu/spirit-icons/react/Warning';

<Warning />;
```

[`spirit-web`]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web
