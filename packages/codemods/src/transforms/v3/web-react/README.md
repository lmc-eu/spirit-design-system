# Web-React v3 Codemods

This is a collection of codemods for updating Web-React v3 components.

You can find instructions on how to run these codemods in the main package [README](https://github.com/lmc-eu/spirit-design-system/blob/main/packages/codemods/README.md).

## Included Scripts

### `v3/web-react/link-underlined-prop` — Link `isUnderlined` to `underlined` prop change

This codemod updates the `Link` component by replacing the `isUnderlined` prop with a new `underlined` prop, setting it to "always".

#### Usage

```sh
npx @lmc-eu/spirit-codemods -p <path> -t v3/web-react/link-underlined-prop
```

#### Example

```diff
- <Link isUnderlined … />
+ <Link underlined="always" … />
```

### `v3/web-react/button-isSquare-prop-name` — Button `isSquare` to `isSymmetrical` prop change

This codemod updates the `Button` component by replacing the `isSquare` prop with a `isSymmetrical` prop.

```sh
npx @lmc-eu/spirit-codemods -p <path> -t v3/web-react/button-isSquare-prop-name
```

#### Example

```diff
- <Button isSquare … />
+ <Button isSymmetrical … />
```

### `v3/web-react/buttonLink-isSquare-prop-name` — ButtonLink `isSquare` to `isSymmetrical` prop change

This codemod updates the `ButtonLink` component by replacing the `isSquare` prop with a `isSymmetrical` prop.

```sh
npx @lmc-eu/spirit-codemods -p <path> -t v3/web-react/buttonLink-isSquare-prop-name
```

#### Example

```diff
- <ButtonLink isSquare … />
+ <ButtonLink isSymmetrical … />
```

### `v3/web-react/heading-elementType-prop` — Add `elementType="div"` to Heading component

The `elementType` prop is now mandatory in the `Heading` component.
This codemod updates the `Heading` component by adding `elementType="div"` if the `elementType` prop is missing.

```sh
npx @lmc-eu/spirit-codemods -p <path> -t v3/web-react/heading-elementType-prop
```

#### Example

```diff
- <Heading … />
+ <Heading elementType="div" … />
```

### `v3/web-react/toastbar-inverted-neutral` — Replace `inverted` with `neutral` in ToastBar component `color` prop

The `inverted` variant was removed from the `ToastBar` component.
This codemod updates the `ToastBar` component by replacing the `inverted` value with `neutral` in the `color` prop.

```sh
npx @lmc-eu/spirit-codemods -p <path> -t v3/web-react/toastbar-inverted-neutral
```

#### Example

```diff
- <ToastBar color="inverted" … />
+ <ToastBar color="neutral" … />
```
