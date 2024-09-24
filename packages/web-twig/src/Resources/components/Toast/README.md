# Toast

This is the Twig implementation of the [Toast][web-toast] component.

Toast displays a brief, temporary notification that appears at a prescribed location of an application window.

Toast is a composition of a few subcomponents:

- [Toast](#toast)
  - [ToastBar](#toastbar)
    - [ToastBarMessage](#toastbarmessage)
    - [ToastBarLink](#toastbarlink)

## Toast

The Toast component is a container responsible for positioning the [ToastBar](#toastbar) component. It is capable of
handling even multiple toast messages at once, stacking them in a [queue](#toast-queue).

```twig
<Toast>
  <!-- ToastBar components go here -->
</Toast>
```

### Accessibility

The wrapping Toast container has the [`role="log"`][mdn-role-log] attribute set (which results in an implicit
[`aria-live`][mdn-aria-live] value of `polite`). Assistive technologies then announce any **dynamic changes** inside the
container as they happen. In order for this to work, the Toast component **must be present in the DOM** on the initial
page load, even when empty.

👉 Unless you are absolutely sure that your toast messages are critical to interrupt the user, you should not change the
(implicit) `polite` value of the [`aria-live`][mdn-aria-live] attribute. When set to `assertive`, assistive technologies
immediately notify the user, potentially clearing the speech queue of previous updates.

### Alignment

The Toast component is positioned at the bottom of the screen by default. It is also fixed to the bottom of the screen,
so it will always be visible, even when the user scrolls. Available alignment options are derived from the
[AlignmentX and AlignmentY][dictionary-alignment] dictionaries and are as follows:

- `top` `left`,
- `top` `center`,
- `top` `right`,
- `bottom` `left`,
- `bottom` `center` (default),
- `bottom` `right`.

Use the `alignmentX` and `alignmentY` options to change the alignment of the Toast component.

ℹ️ The `center` vertical alignment is not supported, as it would not make sense for a toast notification to be in the
middle of the screen.

Example:

```twig
<Toast alignmentX="right" alignmentY="top">
  <!-- ToastBar components go here -->
</Toast>
```

### Responsive Alignment

Pass an object to props to set different values for different breakpoints. The values will be applied from mobile to
desktop and if not set for a breakpoint, the value from the previous breakpoint will be used.

Example:

```twig
<Toast alignmentX="{{ { mobile: 'center', tablet: 'right' } }}" alignmentY="top">
  <!-- ToastBar components go here -->
</Toast>
```

### Mobile Screens

Positioning becomes trickier on mobile screens due to the presence of notches, rounded corners, and the virtual
keyboard. The Toast component tries to find the best position to be visible using the following detection mechanisms:

1. On **devices with rounded displays and/or notches** (e.g. iPhone X and newer), the Toast component is pushed inwards
   to avoid the rounded corners. The `viewport-fit="cover"` meta tag is required for this feature to work:

   ```twig
   <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
   ```

2. **Android Chrome only:** When the vertical alignment is set to `bottom` and the virtual keyboard is open, the Toast
   component is pushed upwards to avoid being covered by the keyboard. This feature requires the following JavaScript
   snippet and is currently supported only in Chrome 94 on Android and later.

   ```js
   // Enable CSS to detect the presence of virtual keyboard:
   if ('virtualKeyboard' in navigator) {
     navigator.virtualKeyboard.overlaysContent = true;
   }
   ```

### Toast Queue

When multiple ToastBar components are present, they stack up in a queue, separated by a gap. The ToastBar components are
sorted from top to bottom for the `top` vertical alignment, and from bottom to top for the `bottom` vertical alignment.

👉 Please note the _actual_ order in the DOM is followed when users tab over the interface, no matter the _visual_
order of the toast queue.

#### Collapsing

The collapsible Toast queue is turned on by default and can hold up to 3 ToastBar components.
When the queue is full, the oldest ToastBar components are collapsed at the start of
the queue and are only accessible by closing the newer ones.

#### Scrolling

By default, the Toast queue collapses when there are more than 3 ToastBars. To turn off this behavior and make the queue scrollable when it does not fit the screen,
set the `isCollapsible` prop to `false`.

⚠️ Please note that scrolling is not available on iOS devices due to a limitation in the WebKit engine.

👉 Please note that the initial scroll position is always at the **top** of the queue.

```twig
<Toast isCollapsible={ false }>
  <!-- ToastBar components go here -->
</Toast>
```

#### Toast Queue Limitations

👉 Please note only the _visible_ ToastBar components are scrollable. Collapsed items are not accessible until visible
items are dismissed.

👉 For the sake of simplicity, the collapsible items limit cannot be configured at the moment.

### API

| Name            | Type                                                        | Default  | Required | Description                                                       |
| --------------- | ----------------------------------------------------------- | -------- | -------- | ----------------------------------------------------------------- |
| `alignmentX`    | [[AlignmentX dictionary][dictionary-alignment] \| `object`] | `center` | ✕        | Horizontal alignment of the toast queue                           |
| `alignmentY`    | [`top` \| `bottom` \| `object`]                             | `bottom` | ✕        | Vertical alignment of the toast queue                             |
| `isCollapsible` | `bool`                                                      | `true`   | ✕        | If true, Toast queue collapses if there are more than 3 ToastBars |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

## ToastBar

The ToastBar component is the actual toast notification. It is a simple container with a message and a few optional
elements.

Minimum example:

```twig
<ToastBar>
  <ToastBarMessage>Message only</ToastBarMessage>
</ToastBar>
```

### Optional Icon

An icon can be displayed in the ToastBar component, depending on the color of the ToastBar:

```twig
<ToastBar color="success" hasIcon>
  <ToastBarMessage>Message with icon</ToastBarMessage>
</ToastBar>
```

Alternatively, a custom icon can be used:

```twig
<ToastBar iconName="download">
  <ToastBarMessage>Message with custom icon</ToastBarMessage>
</ToastBar>
```

#### Default Icons According to Color Variant

| Color name    | Icon name     |
| ------------- | ------------- |
| `danger`      | `danger`      |
| `informative` | `info`        |
| `neutral`     | `info`        |
| `success`     | `check-plain` |
| `warning`     | `warning`     |

### ToastBar Components

The content of `ToastBar` can be assembled from the following subcomponents:

#### ToastBarMessage

`ToastBarMessage` is a subcomponent designated for the main message in `ToastBar`.

```twig
<ToastBar>
  <ToastBarMessage>Message</ToastBarMessage>
</ToastBar>
```

#### API

| Name       | Type     | Default | Required | Description            |
| ---------- | -------- | ------- | -------- | ---------------------- |
| `children` | `string` | —       | ✓        | Content of the message |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

#### ToastBarLink

`ToastBarLink` is a subcomponent designated to create an action link within `ToastBar`.

```twig
<ToastBar>
  <ToastBarMessage>Message with action</ToastBarMessage>
  <ToastBarLink href="#">Action</ToastBarLink>
</ToastBar>
```

#### API

| Name       | Type     | Default | Required | Description                   |
| ---------- | -------- | ------- | -------- | ----------------------------- |
| `children` | `string` | —       | ✓        | Content of the link           |
| `href`     | `string` | —       | ✕        | ToastBarLink's href attribute |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

👉 **Do not put any important actions** like "Undo" in the ToastBar component (unless there are other means to perform
said action), as it is very hard (if not impossible) to reach for users with assistive technologies. Read more about
[Toast accessibility][scott-o-hara-toast] at Scott O'Hara's blog.

### Colors

The ToastBar component is available in all [emotion colors][dictionary-color], plus the `neutral` variant (default).
Use the `color` option to change the color of the ToastBar component.

For example:

```twig
<ToastBar color="success">
  <ToastBarMessage>Success message</ToastBarMessage>
</ToastBar>
```

### Basic Interactions

For basic use cases, you can simply place the ToastBar component inside the Toast container and show/hide it using our
JavaScript plugin.

#### Showing the Static ToastBar

Use our JavaScript plugin to show a Toast **that is present in the DOM,** e.g.:

```twig
<Button
  data-spirit-toggle="toast"
  data-spirit-target="#my-hidden-toast"
  aria-expanded="false"
>
  Show hidden toast
</Button>
```

👉 Advanced toast queue control is not yet implemented.

### Dismissible ToastBar

To make the ToastBar dismissible, add the `isDismissible` prop along with a unique `id` attribute:

```twig
<ToastBar id="my-dismissible-toast" isDismissible>
  <ToastBarMessage>Dismissible message</ToastBarMessage>
</ToastBar>
```

### API

| Name            | Type                                                        | Default    | Required | Description                                                          |
| --------------- | ----------------------------------------------------------- | ---------- | -------- | -------------------------------------------------------------------- |
| `closeLabel`    | `string`                                                    | `Close`    | ✕        | Close label                                                          |
| `color`         | [[Emotion Color dictionary][dictionary-color] \| `neutral`] | `neutral`  | ✕        | Color variant                                                        |
| `hasIcon`       | `bool`                                                      | `false` \* | ✕        | If true, an icon is shown along the message                          |
| `iconName`      | `string`                                                    | `info` \*  | ✕        | Name of a custom icon to be shown along the message                  |
| `id`            | `string`                                                    | —          | ✕        | Optional ToastBar ID. Required when `isDismissible` is set to `true` |
| `isDismissible` | `bool`                                                      | `false`    | ✕        | If true, ToastBar can be dismissed by user                           |
| `isTemplate`    | `bool`                                                      | `false`    | ✕        | If true, ToastBar will be adjusted for rendering inside `<template>` |
| `isOpen`        | `bool`                                                      | `true`     | ✕        | If true, ToastBar is visible                                         |

(\*) For each emotion color, a default icon is defined.
The icons come from the [Icon package][icon-package], or from your custom source of icons.
Read the section [Default Icons according to Color Variant](#default-icons-according-to-color-variant).

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

## Full Example

```twig
<Toast>
  <ToastBar id="my-dismissible-toast" isDismissible>
    <ToastBarMessage>Toast message</ToastBarMessage>
    <ToastBarLink href="#">Action</ToastBarLink>
  </ToastBar>
</Toast>
```

### Creating Dynamic ToastBars

To create ToastBar components dynamically, make sure to add the ToastBar template inside the [`<template>`][mdn-template] tag.
The `<template>` tag must be inserted anywhere inside the Toast container. Our [JavaScript Toast plugin][web-toast-js-plugin] will then pick up
the template and apply it on any toasts to be shown to the user, using the configuration provided.
The template `ToastBar` has to have the `isTemplate` prop set.

⚠️ In order to make the dynamic ToastBar icons work, you need to include the SVG sprites in your project. You
can use the `Icon` component with `isSymbol` prop. Otherwise, the icons will not be displayed as the JS plugin
does not render the icons by itself, it just sets the `use` tag with the correct `xlink:href` attribute.
Also, do not forget to set the `hidden` attribute on the wrapping element to hide the icons from the screen.

```twig
<div hidden>
    <Icon name="check-plain" isSymbol />
    <Icon name="danger" isSymbol />
    <Icon name="info" isSymbol />
    <Icon name="warning" isSymbol />
</div>

<Toast id="toast-example">
    <template data-spirit-snippet="item">
        <ToastBar isTemplate />
    </template>
</Toast>
```

Or preconfigure the template with some default values:

```twig
<div hidden>
    <Icon name="check-plain" isSymbol />
    <Icon name="danger" isSymbol />
    <Icon name="info" isSymbol />
    <Icon name="warning" isSymbol />
</div>

<Toast id="toast-example">
    <template data-spirit-snippet="item">
        <ToastBar isTemplate color="success" hasIcon isDismissible />
    </template>
</Toast>
```

Then configure and create a new Toast instance and call the `show` method on it, for example:

```js
import Toast from '@lmc-eu/spirit-web/dist/js/Toast';

const toast = new Toast(null, {
  autoCloseInterval: 3000, // Set interval after ToastBar will be closed in ms, default: 3000
  color: 'informative', // One of ['neutral' (default), 'success', 'warning, 'danger', 'informative']
  containerId: 'toast-example', // Must match the ID of the Toast container in HTML
  enableAutoClose: true, // If true, ToastBar will close after `autoCloseInterval`, default: true
  hasIcon: true,
  message: 'Hello, this is my toast message!', // Can be plain text or HTML
  linkContent: 'Action', // Link text
  linkProps: {
    href: 'https://example.com', // Link URL
    target: '_blank', // Optional link target attribute
    isUnderlined: false, // Optional link underlining, default: true
    isDisabled: false, // Optional link disabling, default: false
    elementType: 'a', // Optional link element type, default: 'a'
  },
  iconName: 'info', // Optional icon name used as the #fragment in the SVG sprite URL
  id: 'my-toast', // An ID is required for dismissible ToastBar
  isDismissible: true,
});

toast.show();
```

## JavaScript Plugin

For full functionality you need to provide JavaScript which will handle the toggling of the Toast component.

```twig
<script src="node_modules/@lmc-eu/spirit-web/js/cjs/spirit-web.min.js" async></script>
```

Please consult the [main package README][web-readme] for how to include JavaScript plugins.

Or feel free to write controlling scripts yourself.

👉 Check the [component's docs in the web package][web-js-api] to see the full documentation and API of the plugin.

[dictionary-alignment]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#alignment
[dictionary-color]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#color
[icon-package]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/icons
[mdn-aria-live]: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live
[mdn-role-log]: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/log_role
[mdn-template]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#style-props
[scott-o-hara-toast]: https://www.scottohara.me/blog/2019/07/08/a-toast-to-a11y-toasts.html
[web-js-api]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/Toast/README.md#javascript-api
[web-readme]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md
[web-toast-js-plugin]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Toast#javascript-plugin-api
[web-toast]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Toast
