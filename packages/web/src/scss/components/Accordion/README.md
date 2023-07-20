# Accordion

Accordion is a composition of multiple [**Collapse**][collapse] items.
Depending on your needs, one or more Accordion items can be open at a time.

## Basic Usage

Building blocks:

- Accordion
  - Accordion item (one or – typically – more)
    - Accordion item header
      - Accordion item header slot (optional)
    - Collapse
      - Accordion content

### Accordion

Common wrapper for all items:

```html
<section class="Accordion" data-spirit-toggle="accordion">
  <!-- One or more items inside -->
</section>
```

### Accordion Item

Put one or more Accordion items into the Accordion wrapper:

```html
<article id="example_1_item_1" class="Accordion__item">
  <!-- Item header and content inside -->
</article>
```

### Accordion Item Header

Minimum header with a heading and an arrow icon:

```html
<h3 id="example_1_item_1_header" class="Accordion__itemHeader">
  <button
    type="button"
    class="Accordion__itemToggle"
    data-spirit-toggle="collapse"
    data-spirit-target="example_1_item_1_collapse"
    aria-expanded="false"
  >
    Accordion Item no. 1
  </button>
  <span class="Accordion__itemSide">
    <span class="Accordion__itemIcon">
      <svg width="24" height="24" aria-hidden="true">
        <use xlink:href="/icons/svg/sprite.svg#chevron-down" />
      </svg>
    </span>
  </span>
</h3>
```

👉 Set `aria-expanded` to `true` and add the `is-open` class on the `.Collapse`
element (see [below](#collapse-and-accordion-content)) to make the item open
when the page is loaded.

Optionally add a slot into the `Accordion__itemSide` element:

```html
<span class="Accordion__itemSide">
  <span class="Accordion__itemSlot">
    <!-- Slot content: start -->
    <a href="#">Link</a>
    <span class="Pill Pill--selected">3</span>
    <!-- Slot content: end -->
  </span>
  <span class="Accordion__itemIcon">
    <svg width="24" height="24" aria-hidden="true">
      <use xlink:href="/icons/svg/sprite.svg#chevron-down" />
    </svg>
  </span>
</span>
```

⚠️ Due to our HTML structure, the slot can only contain links and other inline
elements.

### Collapse and Accordion Content

Finally, create a Collapse instance and put a `div` with `Accordion__content`
class name inside:

```html
<div id="example_1_item_1_collapse" class="Collapse" aria-labelledby="example_1_item_1_header">
  <div class="Collapse__content">
    <div class="Accordion__content">
      <!-- Content: start -->
      Sit amet interdum, accumsan dolor sit amet posuere vel arcu mauris placerat non mauris, non sed vitae curabitur
      odio leo. Dignissim tristique, consequat vel arcu et nisi odio leo pretium accumsan condimentum at sem, mauris
      aenean aliquet enim. Neque sapien, volutpat erat id nunc facilisis eget ipsum phasellus, tellus ultricies
      sollicitudin ligula. Sem proin, nibh maximus donec nec commodo molestie nulla sapien nec commodo, commodo et
      fermentum et. Mauris posuere, mi orci et nisi et iaculis lorem fringilla sed mauris auctor, lorem tempus a
      pulvinar felis scelerisque. Suscipit vivamus, elit vel arcu lorem fringilla finibus quis sit amet ligula
      convallis, consectetur potenti aenean efficitur.
      <!-- Content: end -->
    </div>
  </div>
</div>
```

⚠️ Make sure your Collapse items are linked to the correct toggle buttons
(using the `id` attribute) and headings (using the `aria-labelledby` attribute)
to ensure proper functionality and accessibility of the content.

### Full Example

When you put it all together:

```html
<!-- Accordion: start -->
<section class="Accordion" data-spirit-toggle="accordion">
  <!-- Accordion item: start -->
  <article id="example_1_item_1" class="Accordion__item">
    <!-- Accordion item header: start -->
    <h3 id="example_1_item_1_header" class="Accordion__itemHeader">
      <button
        type="button"
        class="Accordion__itemToggle"
        data-spirit-toggle="collapse"
        data-spirit-target="example_1_item_1_collapse"
        aria-expanded="false"
      >
        Accordion Item no. 1
      </button>
      <span class="Accordion__itemSide">
        <span class="Accordion__itemSlot">
          <!-- Slot content: start -->
          <a href="#">Link</a>
          <span class="Pill Pill--selected">3</span>
          <!-- Slot content: end -->
        </span>
        <span class="Accordion__itemIcon">
          <svg width="24" height="24" aria-hidden="true">
            <use xlink:href="/icons/svg/sprite.svg#chevron-down" />
          </svg>
        </span>
      </span>
    </h3>
    <!-- Accordion item header: end -->

    <!-- Accordion item content: start -->
    <div id="example_1_item_1_collapse" class="Collapse" aria-labelledby="example_1_item_1_header">
      <div class="Collapse__content">
        <div class="Accordion__content">
          <!-- Content: start -->
          Sit amet interdum, accumsan dolor sit amet posuere vel arcu mauris placerat non mauris, non sed vitae
          curabitur odio leo. Dignissim tristique, consequat vel arcu et nisi odio leo pretium accumsan condimentum at
          sem, mauris aenean aliquet enim. Neque sapien, volutpat erat id nunc facilisis eget ipsum phasellus, tellus
          ultricies sollicitudin ligula. Sem proin, nibh maximus donec nec commodo molestie nulla sapien nec commodo,
          commodo et fermentum et. Mauris posuere, mi orci et nisi et iaculis lorem fringilla sed mauris auctor, lorem
          tempus a pulvinar felis scelerisque. Suscipit vivamus, elit vel arcu lorem fringilla finibus quis sit amet
          ligula convallis, consectetur potenti aenean efficitur.
          <!-- Content: end -->
        </div>
      </div>
    </div>
    <!-- Accordion item content: end -->
  </article>
  <!-- Accordion item: end -->

  <!-- More Accordion items here… -->
</section>
<!-- Accordion: end -->
```

### Open only one item at a time

Link individual **Collapse items** to their **Accordion parent** via
`data-spirit-parent` attribute to allow just a single item being open at a time.

First add an `id` to your Accordion wrapper:

```html
<section id="accordion" class="Accordion" data-spirit-toggle="accordion">
  <!-- Accordion items inside -->
</section>
```

Then link it using the `data-spirit-parent` attribute on individual Collapse items:

```html
<article class="Accordion__item">
  <!-- (Accordion item header) -->
  <div class="Collapse" data-spirit-parent="#accordion">
    <div class="Collapse__content">
      <div class="Accordion__content">
        <!-- Item content -->
      </div>
    </div>
  </div>
</article>

<!-- More Accordion items here… -->
```

## Attributes

All attributes are inherited from the [**Collapse** component][collapse].

## JavaScript Plugin

Under the hood, the Accordion makes use of the [Collapse][collapse] JavaScript
plugin for the collapsing functionality.

[collapse]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/Collapse/README.md
