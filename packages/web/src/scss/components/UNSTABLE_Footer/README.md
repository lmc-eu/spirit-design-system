# UNSTABLE Footer

> ⚠️ This component is UNSTABLE. It may significantly change at any point in the future.
> Please use it with caution.

The Footer is a highly variable and customizable component. It comes in several
design variants and provides a handful of building blocks you can use to achieve
your specific design goals.

## Composition

This is how all supported building blocks of the Footer build up the complete
composition:

```html
<footer class="UNSTABLE_Footer">
  <!-- Footer columns – links relatable to the web hierarchy, etc. -->
  <!-- Footer content – links to social sites, product logo, etc. -->
  <!-- Footer copyright – links to the GDPR, cookies, etc. -->
</footer>
```

👉 Please, keep in mind that:

- to achieve the desired design, you can use the provided building blocks in any order you need,
- in case you need dividers between section, use the `Divider` component,
- to achieve the offset between columns and the rest of the Footer, please use spacing utility classes like `mb-*` or `pt-*`,
- the `Footer Content` is currently under development, so it's not part of this component yet.

## Basic Usage

The basic usage of this component could be:

```html
<footer class="UNSTABLE_Footer">
  <div class="Container">
    <div class="Grid Grid--cols-2 Grid--tablet--cols-4 mb-700 mb-tablet-400">
      <nav aria-labelledby="footer-part-one" class="mb-600 mb-tablet-800">
        <h3 class="typography-body-large-text-bold mb-600" id="footer-part-one">Section headline</h3>
        <ul class="Stack Stack--hasSpacing" style="--stack-spacing: var(--spirit-space-500)">
          <li>
            <a href="www.example.com">Link</a>
          </li>
          <li>
            <a href="www.example.com">Link</a>
          </li>
          <li>
            <a href="www.example.com">Link</a>
          </li>
        </ul>
      </nav>

      <nav aria-labelledby="footer-part-two" class="mb-600 mb-tablet-800">
        <h3 class="typography-body-large-text-bold mb-600" id="footer-part-two">Section headline</h3>

        <ul class="Stack Stack--hasSpacing" style="--stack-spacing: var(--spirit-space-500)">
          <li>
            <a href="www.example.com">Link</a>
          </li>
          <li>
            <a href="www.example.com">Link</a>
          </li>
          <li>
            <a href="www.example.com">Link</a>
          </li>
          <li>
            <a href="www.example.com">Link</a>
          </li>
        </ul>
      </nav>

      <nav aria-labelledby="footer-part-three" class="mb-600 mb-tablet-800">
        <h3 class="typography-body-large-text-bold mb-600" id="footer-part-three">Section headline</h3>

        <ul class="Stack Stack--hasSpacing" style="--stack-spacing: var(--spirit-space-500)">
          <li>
            <a href="www.example.com">Link</a>
          </li>
          <li>
            <a href="www.example.com">Link</a>
          </li>
          <li>
            <a href="www.example.com">Link</a>
          </li>
          <li>
            <a href="www.example.com">Link</a>
          </li>
          <li>
            <a href="www.example.com">Link</a>
          </li>
          <li>
            <a href="www.example.com">Link</a>
          </li>
        </ul>
      </nav>

      <nav aria-labelledby="footer-part-four" class="mb-600 mb-tablet-800">
        <h3 class="typography-body-large-text-bold mb-600" id="footer-part-four">Section headline</h3>

        <ul class="Stack Stack--hasSpacing" style="--stack-spacing: var(--spirit-space-500)">
          <li>
            <a href="www.example.com">Link</a>
          </li>
          <li>
            <a href="www.example.com">Link</a>
          </li>
          <li>
            <a href="www.example.com">Link</a>
          </li>
        </ul>
      </nav>
    </div>

    <hr class="Divider mb-700 mb-tablet-400" />

    <ul class="UNSTABLE_Footer__copyright">
      <li>
        <a href="www.example.com" class="link-secondary">Legal notice</a>
      </li>
      <li>
        <a href="www.example.com" class="link-secondary">Terms of service</a>
      </li>
      <li>
        <a href="www.example.com" class="link-secondary">Privacy policy</a>
      </li>
      <li>
        <a href="www.example.com" class="link-secondary">Manage cookies</a>
      </li>
    </ul>
  </div>
</footer>
```

### Footer Columns Variation

In case you need a specific number of columns for each row in the Footer Columns section with links,
you can use separated `Grid` components. The number of columns can be set for each breakpoint separately.

```html
<footer class="UNSTABLE_Footer">
  <div class="Container">
    <div class="Grid Grid--cols-1 Grid--tablet--cols-3 Grid--desktop--cols-6 mb-tablet-600 mb-desktop-400">
      <nav aria-labelledby="footer-with-a-lot-of-blocks-part-one" class="mb-600 mb-tablet-400 mb-desktop-800">
        <h3 class="typography-body-large-text-bold mb-600" id="footer-with-a-lot-of-blocks-part-one">
          Section headline
        </h3>

        <ul class="Stack Stack--hasSpacing" style="--stack-spacing: var(--spirit-space-500)">
          <li>
            <a href="www.example.com">Link</a>
          </li>
          <li>
            <a href="www.example.com">Link</a>
          </li>
          <li>
            <a href="www.example.com">Link</a>
          </li>
          <li>
            <a href="www.example.com">Link</a>
          </li>
          <li>
            <a href="www.example.com">Link</a>
          </li>
        </ul>
      </nav>

      <nav aria-labelledby="footer-with-a-lot-of-blocks-part-two" class="mb-600 mb-tablet-400 mb-desktop-800">…</nav>
      …
    </div>

    <div class="Grid Grid--cols-1 Grid--tablet--cols-3">
      <nav aria-labelledby="footer-with-a-lot-of-blocks-part-seven" class="mb-600 mb-tablet-800">…</nav>

      <nav aria-labelledby="footer-with-a-lot-of-blocks-part-eight" class="mb-600 mb-tablet-800">…</nav>
    </div>
  </div>
</footer>
```

## Color Variants

If you need to place the Footer on a dark background, add `Footer--inverted` modifier class to the root element.

⚠️ Keep in mind that it is necessary to set all the text and link content to the suitable color variant also.

```html
<footer class="UNSTABLE_Footer UNSTABLE_Footer--inverted">
  …
  <nav aria-labelledby="footer-inverse-part-one">
    <h3 class="typography-body-large-text-bold text-primary-inverted mb-600" id="footer-inverse-part-one">
      Section headline
    </h3>

    <ul class="Stack Stack--hasSpacing mb-600" style="--stack-spacing: var(--spirit-space-500)">
      <li>
        <a href="www.example.com" class="link-inverted">Link</a>
      </li>
      …
    </ul>
  </nav>
</footer>
```
