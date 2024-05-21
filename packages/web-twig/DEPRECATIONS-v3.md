# Deprecations List

Following deprecations will be removed in version 3 of the _spirit-web-twig_ package.

> Please follow these steps to safely upgrade your design system to Spirit Design System v3 components.

[What are deprecations?][readme-deprecations]

## Deprecations

### Dropdown `id` Prop

The `id` prop will be mandatory for the `Dropdown` component.

#### Migration Guide

Add `id` prop to the `Dropdown` component.

### Tooltip Composition

The `Tooltip` component structure will be changed, so `Tooltip` (formerly the optional
`TooltipWrapper`) becomes a mandatory wrapping component. Similarly, `Tooltip` (the tip
itself) has been renamed to `TooltipPopover`.

#### Migration Guide

Use `TooltipPopover` in you project.

Instead of:

```twig
<TooltipWrapper>
  <Link href="#" aria-describedby="my-tooltip">
    I have a tooltip
  </Link>
  <Tooltip id="my-tooltip">
    Hello there!
  </Tooltip>
</TooltipWrapper>
```

Use:

```twig
<Tooltip>
  <a
    href="#"
    data-spirit-toggle="tooltip"
    data-spirit-target="my-tooltip"
    aria-describedby="my-tooltip"
  >
    I have a tooltip
  </a>
  <TooltipPopover id="my-tooltip">
    Hello there!
  </TooltipPopover>
</Tooltip>
```

See [`Tooltip` documentation][tooltip-readme] for more details and examples.

[dropdown-readme]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/src/Resources/components/Dropdown/README.md
[readme-deprecations]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#deprecations
[tooltip-readme]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/src/Resources/components/Tooltip/README.md
