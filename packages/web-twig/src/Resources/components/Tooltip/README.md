# Tooltip

⚠️ Tooltip component is [deprecated][deprecated] and will be removed in the next major version. Please use "TooltipModern" component instead.
This is Twig implementation of the [Tooltip][tooltip] component.

Basic usage:

```html
<Tooltip>Hello there!</Tooltip>
```

Custom placement:

```html
<Tooltip placement="right">Hello there!</Tooltip>
```

Dismissible tooltip (requires `id` to be defined):

```html
<Tooltip id="my-tooltip" isDismissible>Hello there!</Tooltip>
```

Without lexer:

```twig
{% embed "@spirit/tooltip.twig" with { props: {
    id: 'my-tooltip',
    isDismissible: true,
    placement: 'right'
}} %}
    {% block content %}
        Hello there!
    {% endblock %}
{% endembed %}
```

## Linking with Content

Tooltip is positioned relative to the closest parent element with
`position: relative` or `position: absolute`. You may either provide the CSS
yourself or you can use the prepared TooltipWrapper component:

```html
<TooltipWrapper>
    <Link href="#" aria-describedby="my-tooltip">
        I have a tooltip
    </Link>
    <Tooltip id="my-tooltip">
        Hello there!
    </Tooltip>
</TooltipWrapper>
```

Please consult the [CSS implementation of Tooltip][tooltip] to help you pick the
best positioning approach for your use case.

## API

### Tooltip

| Name            | Type                                         | Default  | Required | Description              |
| --------------- | -------------------------------------------- | -------- | -------- | ------------------------ |
| `closeLabel`    | `string`                                     | `Close`  | ✕        | Close label              |
| `id`            | `string`                                     | `null`   | ✕        | Optional tooltip ID      |
| `isDismissible` | `bool`                                       | `false`  | ✕        | Make tooltip dismissible |
| `placement`     | [Placement Dictionary][dictionary-placement] | `bottom` | ✕        | Tooltip placement        |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

### TooltipWrapper

⚠️ `TooltipWrapper` component is [deprecated][deprecated] and will be renamed to the `Tooltip` in the next major version.

The components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

### TooltipPopover

#### Basic

```html
<div className="spirit-feature-tooltip-enable-data-placement">
  <TooltipWrapper>
    <button>I have a tooltip!</button>
    <TooltipPopover>Hello there!</TooltipPopover>
  </TooltipWrapper>
</div>
```

#### Dismissible

Add `isDismissible` prop to `TooltipPopover` component.
there will be automatically displayed close button in `TooltipPopover`` component

```html
<div className="spirit-feature-tooltip-enable-data-placement">
  <TooltipWrapper>
    <button data-spirit-toggle="tooltip" data-spirit-target="my-tooltip-dismissible">I have a tooltip 😎</button>
    <TooltipPopover id="my-tooltip-dismissible" placement="right" isDismissible> Close me </TooltipPopover>
  </TooltipWrapper>
</div>
```

### Trigger

You can choose whether you want to open the tooltip on `click` and/or `hover`.
By default, both options are active, e.g., `trigger="click, hover"`.
If you only want the `click` trigger, you need to specify the trigger, as shown in the example below.
This setup might be preferable when you have a link in your tooltip, for example.

```html
<div className="spirit-feature-tooltip-enable-data-placement">
  <TooltipWrapper>
    <button data-spirit-toggle="tooltip" data-spirit-target="my-tooltip-trigger">I have a tooltip 😎</button>
    <TooltipPopover id="my-tooltip-trigger" trigger="click" <!-- Only `click` trigger is active now. -->
      > You can click on the link: <a href="#">Link to unknown</a>
    </TooltipPopover>
  </TooltipWrapper>
</div>
```

#### Advanced Floating Functionality

To enable the advanced floating functionality, you need to have activated feature flag `spirit-feature-tooltip-enable-data-placement` on any parent element.
This requirement will be removed in future major version.

For more info about feature flags, see main [README][readme-feature-flags].

Advanced floating functionality is provided by JavaScript plugin and by [Floating UI][floating-ui] library.

```html
<div className="spirit-feature-tooltip-enable-data-placement">
  <TooltipWrapper>
    <button data-spirit-toggle="tooltip" data-spirit-target="my-tooltip-advanced">I have a tooltip 😎</button>
    <TooltipPopover
      closeLabel="Close tooltip"
      id="my-tooltip-advanced"
      isDismissible
      enableControlledPlacement
      enableFlipping
      enableFlippingCrossAxis
      enableShifting
      enableSizing
      flipFallbackAxisSideDirection="top, left, right, bottom"
      flipFallbackPlacements="left-start"
      placement="right-start"
    >
      Close me
    </TooltipPopover>
  </TooltipWrapper>
</div>
```

#### API

| Attribute                       | Type                                         | Default        | Required | Description                                                                                                                                                                                                                                                                |
| ------------------------------- | -------------------------------------------- | -------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `closeLabel`                    | `string`                                     | `Close`        | ✕        | Close label                                                                                                                                                                                                                                                                |
| `enableFlipping`                | `bool`                                       | false          | ✕        | Enables [flipping][floating-ui-flip] of the element’s placement when it starts to overflow its boundary area. For example `top` can be flipped to `bottom`.                                                                                                                |
| `enableFlippingCrossAxis`       | `bool`                                       | false          | ✕        | Enables flipping on the [cross axis][floating-ui-flip-cross-axis], the axis perpendicular to main axis. For example `top-end` can be flipped to the `top-start`.                                                                                                           |
| `enableShifting`                | `bool`                                       | false          | ✕        | Enables [shifting][floating-ui-shift] of the element to keep it inside the boundary area by adjusting its position.                                                                                                                                                        |
| `enableSizing`                  | `bool`                                       | false          | ✕        | Enables [sizing][floating-ui-size] of the element to keep it inside the boundary area by setting the max width.                                                                                                                                                            |
| `flipFallbackAxisSideDirection` | ["none" \| "start" \| "end"]                 | "none"         | ✕        | Whether to allow [fallback to the opposite axis][floating-ui-flip-fallback-axis-side-direction] if no placements along the preferred placement axis fit, and if so, which side direction along that axis to choose. If necessary, it will fallback to the other direction. |
| `flipFallbackPlacements`        | `string`                                     | -              | ✕        | This describes a list of [explicit placements][floating-ui-flip-fallback-placements] to try if the initial placement doesn’t fit on the axes in which overflow is checked. For example you can set `"top, right, bottom"`                                                  |
| `id`                            | `string`                                     | -              | ✔        | Tooltip id                                                                                                                                                                                                                                                                 |
| `isDismissible`                 | `bool`                                       | false          | ✕        | Make tooltip dismissible                                                                                                                                                                                                                                                   |
| `placement`                     | [Placement Dictionary][dictionary-placement] | "bottom"       | ✕        | Placement of tooltip                                                                                                                                                                                                                                                       |
| `triggers`                      | ["click" \| "hover" \| "manual"]             | "click, hover" | ✕        | How tooltip is triggered: `click`, `hover`. You may pass multiple triggers; separate them with a comma. If you pass `manual`, no event listener will be added, and you should provide your own toggle solution.                                                            |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

## JavaScript Plugin

For full functionality, you need to provide Spirit JavaScript:

```html
<script src="node_modules/@lmc-eu/spirit-web/js/cjs/spirit-web.min.js" async></script>
```

Please consult the [main README][web-readme] for how to include JavaScript plugins.

Or, feel free to write the controlling script yourself.

👉 Check the [component's docs in the web package][web-js-api] to see the full documentation and API of the plugin.

[deprecated]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/README.md#deprecations
[dictionary-placement]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#placement
[floating-ui-flip-cross-axis]: https://floating-ui.com/docs/flip#crossaxis
[floating-ui-flip-fallback-axis-side-direction]: https://floating-ui.com/docs/flip#fallbackaxissidedirection
[floating-ui-flip-fallback-placements]: https://floating-ui.com/docs/flip#fallbackplacements
[floating-ui-flip]: https://floating-ui.com/docs/flip
[floating-ui-shift]: https://floating-ui.com/docs/shift
[floating-ui-size]: https://floating-ui.com/docs/size
[floating-ui]: https://floating-ui.com
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#escape-hatches
[readme-feature-flags]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md#feature-flags
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#style-props
[tooltip]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Tooltip
[web-js-api]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/Tooltip/README.md#javascript-api
[web-readme]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md
