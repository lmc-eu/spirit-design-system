# Deprecations List

Following deprecations will be removed in version 2 of the _spirit-web-react_ package.

> Please follow these steps to safely upgrade your design system to Spirit Design System v2 components.

[What are deprecations?][readme-deprecations]

## Deprecations

### Dropdown and Collapse `id` Prop

The `id` prop will be mandatory for the `Dropdown` and `Collapse` components.

#### Migration Guide

Add `id` prop to the `Dropdown` component.
Add `id` prop to the `Collapse` component.

### Tooltip & TooltipModern

The `Tooltip` component will be replaced by the `TooltipModern` component.
Use the `TooltipModern` component now and rename it to `Tooltip` in the next major version.

#### Migration Guide

Replace `Tooltip` with `TooltipModern` in your project.
The `TooltipModern` is using the Floating UI library and has a different API.

Instead of:

```jsx
<TooltipWrapper>
  <Button UNSAFE_className="TooltipTarget">I have a tooltip!</Button>
  <Tooltip>Hello there!</Tooltip>
</TooltipWrapper>
```

Use:

```jsx
<TooltipModern
  id="TooltipModern"
  // …
>
  <TooltipTrigger>I have a tooltip!</TooltipTrigger>
  <TooltipPopover>Hello there!</TooltipPopover>
</TooltipModern>
```

See [`Tooltip` documentation][tooltip-readme] for more details and examples.

[dropdown-readme]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/src/components/Dropdown/README.md
[readme-deprecations]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#deprecations
[tooltip-readme]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/src/components/Tooltip/README.md
