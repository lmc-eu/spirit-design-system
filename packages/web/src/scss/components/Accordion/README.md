# Accordion

Accordion is a wrapper for multiple **Collapse** items, and can be open one or more at time.

## Usage

### Default (Always open)

```html
<section class="Accordion" data-toggle="accordion">
  <article id="accordionExample_article_0" class="Accordion__item">
    <h3 id="accordionExample_article_0_header" class="Accordion__itemHeader">
      <button
        type="button"
        class="Accordion__itemToggle"
        data-toggle="collapse"
        data-target="accordionExample_article_0_collapse"
      >
        toggle
      </button>
      <span class="Accordion__itemSide">
        <span class="Accordion__itemSlot"> slot </span>
        <span class="Accordion__itemIcon">
          <svg width="24" height="24" aria-hidden="true">
            <use xlink:href="/icons/svg/sprite.svg#chevron-down" />
          </svg>
        </span>
      </span>
    </h3>
    <div id="accordionExample_article_0_collapse" class="Collapse" aria-labelledby="accordionExample_article_0_header">
      <div class="Collapse__content">
        <div class="Accordion__content">content</div>
      </div>
    </div>
  </article>
  ...
</section>
```

### Open only one at time

```html
<section id="accordionExample" class="Accordion" data-toggle="accordion">
  <article id="accordionExample_article_0" class="Accordion__item">
    <h3 id="accordionExample_article_0_header" class="Accordion__itemHeader">
      <button
        type="button"
        class="Accordion__itemToggle"
        data-toggle="collapse"
        data-target="accordionExample_article_0_collapse"
      >
        toggle
      </button>
      <span class="Accordion__itemSide">
        <span class="Accordion__itemSlot"> slot </span>
        <span class="Accordion__itemIcon">
          <svg width="24" height="24" aria-hidden="true">
            <use xlink:href="/icons/svg/sprite.svg#chevron-down" />
          </svg>
        </span>
      </span>
    </h3>
    <div
      id="accordionExample_article_0_collapse"
      class="Collapse"
      aria-labelledby="accordionExample_article_0_header"
      data-parent="#accordionExample"
    >
      <div class="Collapse__content">
        <div class="Accordion__content">content</div>
      </div>
    </div>
  </article>
  ...
</section>
```

## Attributes

Attributes are inherited from [**Collapse** component][collapse].

## JavaScript Plugin

The accordion uses [collapse][collapse] internally to make it collapsible.

[collapse]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/Collapse/README.md
