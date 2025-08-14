# SkipLink

The `SkipLink` component is used to provide a way for users to skip directly to the e.g. main content of a page,
improving accessibility for keyboard and screen reader users.

## Usage

```html
<body>
  <nav class="SkipLink" aria-label="Navigation with skip links">
    <a href="#main-content" class="SkipLink__item"> Skip to main content </a>
  </nav>
  <!-- Other navigation elements -->
  <main id="main-content">
    <!-- Main content -->
  </main>
</body>
```

⚠️ Ensure that the `SkipLink` is placed at the top of the page, before any other navigation elements.
