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
