# Toast

This is the Twig implementation of the [Toast][web-toast] component.

Toast displays a brief, temporary notification that appears at a prescribed location of an application window.

Toast is a composition of a few subcomponents:

- [Toast](#toast)
  - [ToastBar](#toastbar)

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

   ```html
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

#### Toast Queue Limitations

While the Toast queue becomes scrollable when it does not fit the screen, we recommend displaying only a few toasts at
once for several reasons:

⚠️ **We strongly discourage from displaying too many toasts at once as it may cause the page to be unusable,
especially on mobile screens. As of now, there is no automatic stacking of the toast queue items. It is the
responsibility of the developer to ensure that the Toast queue does not overflow the screen.**

⚠️ Please note that scrolling is only available on pointer-equipped devices (mouse, trackpad). Furthermore, scrolling is
only possible when the cursor is placed over the toast message boxes. This way the page content behind the toast
messages can remain accessible.

👉 Please note that the initial scroll position is always at the **top** of the queue.

### API

| Name         | Type                                                        | Default  | Required | Description                             |
| ------------ | ----------------------------------------------------------- | -------- | -------- | --------------------------------------- |
| `alignmentX` | [[AlignmentX dictionary][dictionary-alignment] \| `object`] | `center` | ✕        | Horizontal alignment of the toast queue |
| `alignmentY` | [`top` \| `bottom` \| `object`]                             | `bottom` | ✕        | Vertical alignment of the toast queue   |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

## ToastBar

The ToastBar component is the actual toast notification. It is a simple container with a message and a few optional
elements.

Minimum example:

```twig
<ToastBar>
  Message only
</ToastBar>
```

### Optional Icon

An icon can be displayed in the ToastBar component, depending on the color of the ToastBar:

```twig
<ToastBar color="success" hasIcon>
  Message with icon
</ToastBar>
```

Alternatively, a custom icon can be used:

```twig
<ToastBar iconName="download">
  Message with custom icon
</ToastBar>
```

#### Default Icons According to Color Variant

| Color name    | Icon name     |
| ------------- | ------------- |
| `danger`      | `danger`      |
| `informative` | `info`        |
| `inverted`    | `info`        |
| `success`     | `check-plain` |
| `warning`     | `warning`     |

### Action Link

An action link can be added to the ToastBar component:

```twig
<ToastBar>
  Message with action
  <Link href="#" color="inverted" isUnderlined>Action</Link>
</ToastBar>
```

👉 For the sake of flexibility, developers can pass the link as part of the message. However, it is strongly recommended
to use the **inverted underlined** variant of the link (for all ToastBar colors) to make it stand out from the message.

👉 **Do not put any important actions** like "Undo" in the ToastBar component (unless there are other means to perform
said action), as it is very hard (if not impossible) to reach for users with assistive technologies. Read more about
[Toast accessibility](#scott-o-hara-toast) at Scott O'Hara's blog.

### Colors

The ToastBar component is available in all [emotion colors][dictionary-color], plus the `inverted` variant (default).
Use the `color` option to change the color of the ToastBar component.

For example:

```twig
<ToastBar color="success">
  Success message
</ToastBar>
```

### Opening the ToastBar

Use our JavaScript plugin to open a Toast **that is present in the DOM,** e.g.:

```twig
<Button
  data-spirit-toggle="toast"
  data-spirit-target="#my-hidden-toast"
  aria-expanded="false"
>
  Show the hidden toast
</Button>
```

👉 Advanced toast queue control is not yet implemented.

### Dismissible ToastBar

To make the ToastBar dismissible, add the `isDismissible` prop along with a unique `id` attribute:

```twig
<ToastBar id="my-dismissible-toast" isDismissible>
  Dismissible message
</ToastBar>
```

### API

| Name            | Type                                                         | Default    | Required | Description                                                          |
| --------------- | ------------------------------------------------------------ | ---------- | -------- | -------------------------------------------------------------------- |
| `color`         | [[Emotion Color dictionary][dictionary-color] \| `inverted`] | `inverted` | ✕        | Color variant                                                        |
| `closeLabel`    | `string`                                                     | `Close`    | ✕        | Close label                                                          |
| `hasIcon`       | `bool`                                                       | `false` \* | ✕        | If true, an icon is shown along the message                          |
| `iconName`      | `string`                                                     | `info` \*  | ✕        | Name of a custom icon to be shown along the message                  |
| `id`            | `string`                                                     | —          | ✕        | Optional ToastBar ID. Required when `isDismissible` is set to `true` |
| `isDismissible` | `bool`                                                       | `false`    | ✕        | If true, ToastBar can be dismissed by user                           |
| `isOpen`        | `bool`                                                       | `true`     | ✕        | If true, ToastBar is visible                                         |

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
    Toast message
    <Link href="#" color="inverted" isUnderlined>Action</Link>
  </ToastBar>
</Toast>
```

## JavaScript Plugin

For full functionality you need to provide JavaScript which will handle the toggling of the Toast component.

```html
<script src="node_modules/@lmc-eu/spirit-web/js/cjs/spirit-web.min.js" async></script>
```

Please consult the [main package README][web-readme] for how to include JavaScript plugins.

Or feel free to write controlling scripts yourself.

👉 Check the [component's docs in the web package][web-js-api] to see the full documentation and API of the plugin.

[web-toast]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Toast
[web-readme]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md
[web-js-api]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/Toast/README.md#javascript-api
[mdn-role-log]: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/log_role
[mdn-aria-live]: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live
[dictionary-alignment]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#alignment
[dictionary-color]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#color
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#style-props
[scott-o-hara-toast]: https://www.scottohara.me/blog/2019/07/08/a-toast-to-a11y-toasts.html
[icon-package]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/icons
