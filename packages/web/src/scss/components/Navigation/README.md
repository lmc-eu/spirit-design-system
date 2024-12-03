# Navigation

The `Navigation` component is a container for the navigation links of the application.

It consists of a these parts:

- [Navigation](#navigation)
- [NavigationLink](#navigationlink)

## Navigation

The `Navigation` is a `nav` wrapper for lists of links or other navigation components.

```html
<nav class="Navigation">
  <ul>
    <li>
      <!-- link -->
    </li>
  </ul>
</nav>
```

It centers its children vertically and if the children are not NavigationLink components,
it will apply a gap between them.

## NavigationLink

The `NavigationLink` is component that is styled to be used as a navigation link.

```html
<a class="NavigationLink" href="#">Link</a>
```

If can obtain `selected` or `disabled` states by adding the respective classes.

```html
<a class="NavigationLink NavigationLink--selected" href="#" aria-current="page">Selected Link</a>
<a class="NavigationLink NavigationLink--disabled" href="#">Disabled Link</a>
```

ℹ️ Don't forget to add the `aria-current="page"` attribute for correct accessible state if selected.

If the `NavigationLink` is inside a [`UNSTABLE_Header`][web-unstable-header] component, it will
inherit the height of the `Header`.

### Full Example

With NavigationLink components:

```html
<nav class="Navigation">
  <ul>
    <li>
      <a class="NavigationLink NavigationLink--selected" href="#" aria-current="page">Selected Link</a>
    </li>
    <li>
      <a class="NavigationLink NavigationLink--disabled" href="#">Disabled Link</a>
    </li>
    <li>
      <a class="NavigationLink" href="#">Link</a>
    </li>
  </ul>
</nav>
```

With Buttons:

```html
<nav class="Navigation">
  <ul>
    <li>
      <button class="Button Button--medium Button--primary">Button</button>
    </li>
    <li>
      <button class="Button Button--medium Button--secondary">Button</button>
    </li>
  </ul>
</nav>
```

[web-unstable-header]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/UNSTABLE_Header/README.md
