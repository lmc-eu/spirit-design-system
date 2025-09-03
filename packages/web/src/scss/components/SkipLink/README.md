# SkipLink

The `SkipLink` component is used to provide a way for users to skip directly to the e.g. main content of a page,
improving accessibility for keyboard and screen reader users.

## Usage

```html
<body>
  <nav aria-label="Navigation with skip links">
    <a href="#main-content" class="SkipLinkItem"> Skip to main content </a>
  </nav>
  <!-- Other navigation elements -->
  <main id="main-content">
    <!-- Main content -->
  </main>
</body>
```

⚠️ Ensure that the `SkipLink` is placed before the section you want to skip to.

### 👍 When to Use

- Provide a way for sighted keyboard or screen reader users to bypass repetitive navigation
  links and access the main content directly.
- To satisfy the accessibility standard [WCAG2.0 Guideline 2.4.1 Bypass Blocks][wcag-bypass-blocks].

### 👎 When Not to Use

- If the page has a few navigable items or a minimal repetitive content.

[wcag-bypass-blocks]: https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html
