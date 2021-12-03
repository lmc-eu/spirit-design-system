# Tag

Displays an inline element as a tag. Tags can be used to highlight or add emotion
to information. The base tag component styles the text, adds padding, corners and
background. Tags come in a variety of colors that can be set using modifier classes.
All colors have light and dark variants.

Available variants are:
* default-light
* default-dark
* informative-light
* informative-dark
* success-light
* success-dark
* warning-light
* warning-dark
* danger-light
* danger-dark

```html
<span class="lmc-Tag lmc-Tag--default-light">Discount</span>
<span class="lmc-Tag lmc-Tag--default-dark">Discount</span>
<span class="lmc-Tag lmc-Tag--info-light">Discount</span>
<span class="lmc-Tag lmc-Tag--info-dark">Discount</span>
<span class="lmc-Tag lmc-Tag--success-light">Discount</span>
<span class="lmc-Tag lmc-Tag--success-dark">Discount</span>
<span class="lmc-Tag lmc-Tag--warning-light">Discount</span>
<span class="lmc-Tag lmc-Tag--warning-dark">Discount</span>
<span class="lmc-Tag lmc-Tag--danger-light">Discount</span>
<span class="lmc-Tag lmc-Tag--danger-dark">Discount</span>
```

## Theming
Most Tag variables are mapped to design tokens.

These style options are themeable:
* `$padding-x` - horizontal paddings
* `$padding-y` - vertical paddings
* `$font-size` - text font size
* `$line-height` - text line height
* `$border-radius` - border radius of the component

If you need to change colors and override values set based on design tokens,
use this pattern for each color variant you need to change:
```sass
$default-light-color: #000;
$default-light-background: #f0f0f0;
```
