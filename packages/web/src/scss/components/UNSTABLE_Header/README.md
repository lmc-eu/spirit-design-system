# UNSTABLE Header

⚠️ This component is UNSTABLE. It may significantly change at any point in the future.
Please use it with caution.

The `UNSTABLE_Header` component is planned to replace the `Header` component in the future.

This component provides these components:

- [UNSTABLE_Header](#unstable-header)
- [UNSTABLE_HeaderLogo](#unstable-headerlogo)

## UNSTABLE Header

The `UNSTABLE_Header` component is a main wrapper which provides mainly the visual for the Header.

```html
<header class="UNSTABLE_Header">
  <!-- content -->
</header>
```

It also sets CSS variable for the Header height which can be used in other nested components.

## UNSTABLE HeaderLogo

The `UNSTABLE_HeaderLogo` component is a container for the logo.

```html
<a href="#" class="UNSTABLE_HeaderLogo">
  <!-- content -->
</a>
```

It inherits the `UNSTABLE_Header` height and sets the logo wrapper height to the same value.

You can use the `ProductLogo` component inside the `UNSTABLE_HeaderLogo` component.

```html
<a href="#" class="UNSTABLE_HeaderLogo">
  <div class="ProductLogo">
    <!-- content -->
  </div>
</a>
```

## Component Composition

Use [`Container`][web-container] and [`Flex`][web-flex] components to create a layout for the Header content.

```html
<header class="UNSTABLE_Header">
  <div class="Container">
    <div class="Flex Flex--row Flex--noWrap Flex--alignmentXLeft Flex--alignmentYCenter">
      <a href="#" class="UNSTABLE_HeaderLogo">
        <div class="ProductLogo">
          <!-- content -->
        </div>
      </a>
      <!-- Navigation -->
      <!-- Another Navigation -->
    </div>
  </div>
</header>
```

This way you can modify the layout of the Header content easily and modify it how you need.

For example you can make the content centered by setting the `Flex` alignment classes to center.

```html
<header class="UNSTABLE_Header">
  <div class="Flex Flex--row Flex--noWrap Flex--alignmentXCenter Flex--alignmentYCenter">
    <a href="#" class="UNSTABLE_HeaderLogo">
      <div class="ProductLogo">
        <!-- content -->
      </div>
    </a>
  </div>
</header>
```

Or you can make modify gaps between the content by setting the `Flex` spacing styles.

```html
<header class="UNSTABLE_Header">
  <div class="Container">
    <div
      class="Flex Flex--row Flex--noWrap Flex--alignmentXLeft Flex--alignmentYCenter"
      style="--flex-spacing: var(--spirit-space-500);"
    >
      <a href="#" class="UNSTABLE_HeaderLogo">
        <div class="ProductLogo">
          <!-- content -->
        </div>
      </a>
      <!-- Navigation -->
      <!-- Another Navigation -->
    </div>
  </div>
</header>
```

If you need the whole Header fluid you can do it by adding the `Container--fluid` class to the `Container`.

```html
<header class="UNSTABLE_Header">
  <div class="Container Container--fluid">
    <div class="Flex Flex--row Flex--noWrap Flex--alignmentXLeft Flex--alignmentYCenter">
      <a href="#" class="UNSTABLE_HeaderLogo">
        <div class="ProductLogo">
          <!-- content -->
        </div>
      </a>
    </div>
  </div>
</header>
```

[web-container]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/Container/README.md
[web-flex]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/Flex/README.md
