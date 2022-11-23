# Accordion

Accordion is a wrapper for multiple **Collapse** blocks and allows you to have one or more items open.

## Usage

```html
<section id="accordionExample" class="Accordion" data-toggle="accordion">
  <article id="accordionExample_article_0" class="Accordion__item">
    <h3 id="accordionExample_article_0_header" class="Accordion__itemHeader">
      <button
        type="button"
        class="Accordion__itemToggle"
        data-toggle="collapse"
        data-target="accordionExample_article_0_collapse"
        aria-expanded="false"
        aria-controls="accordionExample_article_0_collapse"
      >
        toggle
        <span class="Accordion__itemToggleSlot">
          <span class="Pill Pill--selected">3</span>
          <svg class="Accordion__itemIcon" width="24" height="24" aria-hidden="true">
            <use xlink:href="/icons/svg/sprite.svg#chevron-down" />
          </svg>
        </span>
      </button>
    </h3>
    <div
      id="accordionExample_article_0_collapse"
      class="Collapse"
      data-parent="accordionExample"
      aria-labelledby="accordionExample_article_0_header"
    >
      <div class="Collapse__content">content</div>
    </div>
  </article>
  ...
</section>
```

## Attributes

Attributes are inherited from [**Collapse** component](../Collapse/README.md).

## JavaScript Plugin

The accordion uses [collapse](../Collapse/README.md) internally to make it collapsible.
