# Accordion

Accordion is a different wrapper for multiple **Collapse** items, and can only open one item.

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
          <svg class="Icon Accordion__itemToggleIcon" width="24" height="24">
            <use xlink:href="/icons/svg/sprite.svg#chevron-down" />
          </svg>
        </span>
      </button>
    </h3>
    <div
      id="accordionExample_article_0_collapse"
      class="Accordion__itemCollapse"
      data-parent="accordionExample"
      aria-labelledby="accordionExample_article_0_header"
    >
      <div class="Accordion__itemBody Collapse__content">content</div>
    </div>
  </article>
  ...
</section>
```

## Attributes

Most of the attributes are inherited from **Collapse** component, see documentation [here](../Collapse/README.md).

## JavaScript Plugin

...will be done with JS implementation

## JavaScript API

...will be done with JS implementation

### Methods

...will be done with JS implementation
