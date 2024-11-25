# Card

Card is a compact container for organizing and displaying content about a single topic.

Card is a versatile composition of a few subcomponents:

- [Card](#card-1)
  - [CardArtwork](#cardartwork)
  - [CardMedia](#cardmedia)
  - [CardLogo](#cardlogo)
  - [CardBody](#cardbody)
    - [CardTitle](#cardtitle)
    - [CardEyebrow](#cardeyebrow)
  - [CardFooter](#cardfooter)

Additionally, Card can be used with [CardLink](#making-the-whole-card-clickable) to create a clickable card.

## Card

Card is the main container of the composition.

```html
<article class="Card Card--vertical">
  <!-- CardArtwork or CardMedia -->
  <!-- CardBody -->
  <!-- CardFooter -->
</article>
```

Regardless of the [layout](#card-layout), the Card subcomponents must be arranged in the following order:

1. [CardArtwork](#cardartwork) (optional) or CardMedia (optional) — first
2. [CardLogo](#cardlogo) (optional)
3. [CardBody](#cardbody)
4. [CardFooter](#cardfooter) (optional) – last

ℹ️ Every `<div>` counts, especially on large pages. During the development of the Card component, we did our best to
balance between flexibility and simplicity. To provide the best performance, we decided to use the CSS grid layout with
predefined grid areas. This way, we can avoid unnecessary elements and keep the Card structure as flat as possible.

ℹ️ Vertical spacing between subcomponents is implemented using the `margin-bottom` property and the Card relies on
the specified order of its subcomponents. Since the Card uses the CSS grid layout with predefined grid areas, using the
`gap` property would lead to redundant spacing when dropping in just some of the subcomponents.

⚠️ **Arranging the subcomponents in a different order will break the spacing of the subcomponents. It may also have
negative impact on accessibility of the Card.**

### Card Layout

Card can be displayed in a vertical, horizontal, or reversed horizontal layout.

```html
<!-- Vertical card -->
<article class="Card Card--vertical">
  <!-- … -->
</article>

<!-- Horizontal card -->
<article class="Card Card--horizontal">
  <!-- … -->
</article>

<!-- Reversed horizontal card -->
<article class="Card Card--horizontalReversed">
  <!-- … -->
</article>
```

👉 Keep in mind that the Card subcomponents must be arranged in the order [specified above](#card), no matter the
layout.

### Boxed Cards

Card can be displayed with a border and a box shadow on hover.

```html
<article class="Card Card--vertical Card--boxed">
  <!-- … -->
</article>
```

## CardArtwork

CardArtwork is an optional subcomponent that displays a small image or icon.

```html
<div class="CardArtwork CardArtwork--left">
  <svg width="24" height="24" aria-hidden="true">
    <use xlink:href="/assets/icons/svg/sprite.svg#file" />
  </svg>
</div>
```

### Artwork Alignment

In the vertical Card layout, the artwork can be horizontally aligned to the start, center, or end of the Card.
Available alignment options are derived from the [AlignmentX][dictionary-alignment] dictionary.
To align the artwork, use one of the following CSS modifiers:

- `CardArtwork--left`
- `CardArtwork--center`
- `CardArtwork--right`

## CardMedia

To display larger images or videos, use the CardMedia subcomponent.

```html
<div class="CardMedia CardMedia--auto">
  <div class="CardMedia__canvas">
    <img src="https://via.placeholder.com/300x200" alt="" />
  </div>
</div>
```

👉 Please note the empty `alt` attribute which means the image is purely decorative and does not convey any information.

👉 Please note that there is no link around or inside the CardMedia subcomponent. See the
[Linking the Media](#linking-the-media) section for more.

Or, for a video:

```html
<div class="CardMedia CardMedia--auto">
  <div class="CardMedia__canvas">
    <video
      src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
      poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg"
      controls
      muted
      playsinline
    ></video>
  </div>
</div>
```

### Media Sizes

CardMedia can be displayed in different sizes. The available sizes are based on the [Size][dictionary-size] dictionary.
By default, the media uses the `auto` size option which means the media will be displayed in its original aspect ratio.
Other options set the media to a specific height (in the vertical Card layout) or width (in the horizontal Card layout).

In the vertical Card layout, the media is always expanded to the full width of the CardBody content. For boxed Cards,
the media can be even expanded [to the edges](#expanding-the-media) of the Card.

- `auto` (default)
- `small`
- `medium`
- `large`

For example:

```html
<div class="CardMedia CardMedia--small">
  <!-- … -->
</div>
```

ℹ️ The Card automatically prevents the media from overflowing the Card container or even pushing the subsequent
CardBody content out of the Card. In such cases, the media will be cropped to fit the Card container.

### Expanding the Media

To expand the media to the full width or height of the Card, use the `CardMedia--expanded` modifier.

Additionally, there is a `CardMedia--filledHeight` modifier that expands the media to match the height of the CardBody
content. This option is only available in the horizontal Card layout.

Both options work with all media sizes.

## CardLogo

CardLogo is an optional subcomponent that displays a logo. To achieve the best visual result, use the PartnerLogo
subcomponent.

```html
<div class="CardLogo">
  <div class="PartnerLogo PartnerLogo--medium PartnerLogo--safeArea">
    <img src="…" alt="Product Name" />
  </div>
</div>
```

## CardBody

CardBody is the main content area of the Card.

```html
<div class="CardBody">
  <!-- … -->
</div>
```

### CardTitle

CardTitle displays the main title of the Card. It uses the `<h4>` heading element by default, but you can use any other
heading level that fits your document outline.

```html
<h4 class="CardTitle">
  <a href="#">Card Title</a>
</h4>
```

To emphasize the CardTitle, you can use the `CardTitle--heading` modifier:

```html
<h4 class="CardTitle CardTitle--heading">
  <a href="#">Card Title</a>
</h4>
```

👉 See below how to extend the link in CardTitle to [make the whole card clickable](#making-the-whole-card-clickable).

### CardEyebrow

CardEyebrow is an optional subcomponent that accompanies the CardTitle.

```html
<div class="CardEyebrow">Content options</div>
<h4 class="CardTitle">Card Title</h4>
```

## CardFooter

Use CardFooter for actions or any other content at the bottom of the Card. When using Cards with CardFooter in a Grid,
the CardFooters will automatically line up.

```html
<footer class="CardFooter">
  <!-- … -->
</footer>
```

### Footer Alignment

The footer can be horizontally aligned to the start, center, or end of the Card. To align the footer, use one of the
following CSS modifiers:

- `CardFooter--alignmentXLeft`
- `CardFooter--alignmentXCenter`
- `CardFooter--alignmentXRight`

### Full Example

When you put it all together:

```html
<article class="Card Card--vertical Card--boxed">
  <div class="CardMedia CardMedia--auto">
    <div class="CardMedia__canvas">
      <img src="…" alt="" />
    </div>
  </div>
  <div class="CardLogo">
    <div class="PartnerLogo PartnerLogo--medium PartnerLogo--safeArea">
      <img src="…" alt="Logo" />
    </div>
  </div>
  <div class="CardBody">
    <div class="CardEyebrow">Content options</div>
    <h4 class="CardTitle CardTitle--heading">
      <a href="#" class="CardLink">Card Title</a>
    </h4>
    <p>Card content</p>
  </div>
  <footer class="CardFooter CardFooter--alignmentXLeft">
    <a href="#" class="Button Button--medium Button--primary">Primary</a>
    <a href="#" class="Button Button--medium Button--secondary">Secondary</a>
  </footer>
</article>
```

## Best Practices

### Making the Whole Card Clickable

To make the whole Card clickable, use the provided CardLink subcomponent. For best accessibility, you would typically
wrap your CardTitle text in the CardLink component:

```html
<h4 class="CardTitle">
  <a href="#" class="CardLink">Card title</a>
</h4>
```

This establishes a clickable overlay over the whole Card, making it easier for users to interact with the Card.

ℹ️ Don't worry, any interactive elements inside the Card (like links or buttons) will still work as expected.

ℹ️ The text content of CardBody remains selectable and copyable even when the whole Card is clickable.

### Linking the Media

In most cases, using just a single link in the CardTitle and
[making the whole card clickable](#making-the-whole-card-clickable) is the best approach in terms of accessibility.
The Card will have a single accessible link which will be announced by screen readers.

However, if you cannot use the CardLink subcomponent, and you still need to make the media clickable, you can wrap the
CardMedia image in a link:

```html
<div class="CardMedia CardMedia--auto">
  <div class="CardMedia__canvas">
    <a href="#" aria-hidden="true">
      <img src="https://via.placeholder.com/300x200" alt="" />
    </a>
  </div>
</div>
```

👉 Please note that the `aria-hidden="true"` attribute is used to hide the link from screen readers so the user is not
confused by too many links in the Card.

### The “Read More” Use Case

For article previews or similar use cases, you may want to display a limited amount of text content with a “Read More”
link. For optimum accessibility, you should only provide this in form of a text node, not a button or a link:

```html
<h4 class="CardTitle">
  <a href="#" class="CardLink">Card title</a>
</h4>
<p><!-- … --></p>
<!-- DON'T DO THIS -->
<a href="#" class="link-primary link-underlined">Read more</a>
<!-- This is correct -->
<div class="link-primary link-underlined">Read more</div>
```

This way, the Card will only have a single accessible link which will be announced by screen readers.

ℹ️ A big shout-out to [Ondřej Pohl][ondrej-pohl] for sharing these best practices!

[dictionary-alignment]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#alignment
[dictionary-size]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#size
[ondrej-pohl]: https://linkedin.com/in/ondrejpohl
