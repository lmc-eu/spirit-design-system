# Navigation

The `Navigation` component is a container for the navigation actions of the application.

It consists of these parts:

- [Navigation](#navigation)
  - [NavigationAction](#navigation-action)

## Navigation

The `Navigation` is a `nav` wrapper for lists of actions or other navigation components.

```html
<nav class="Navigation" aria-label="Main Navigation">
  <ul>
    <li>
      <!-- action -->
    </li>
  </ul>
</nav>
```

It centers its children vertically and if the children are not NavigationAction components,
it will insert a gap between them.

ℹ️ If you plan to provide a list of actions, wrap them in a `ul` and `li` elements. If not, you can use the
`nav` element directly.

ℹ️ Don't forget to add the `aria-label` attribute to the `Navigation` component for correct accessible title.

## Navigation Action

The `NavigationAction` is component that is styled to be used as a navigation action.

```html
<a class="NavigationAction" href="#">Link</a>
```

It can obtain `selected` or `disabled` states by adding the respective classes.

```html
<a class="NavigationAction NavigationAction--selected" href="#" aria-current="page">Selected Link</a>
<span class="NavigationAction NavigationAction--disabled">Disabled Link</span>
```

ℹ️ Don't forget to add the `aria-current="page"` attribute for correct accessible state if selected.

ℹ️ Please note that in the `disabled` state the `NavigationAction` should not be an `a` tag.

If the `NavigationAction` is inside a [`UNSTABLE_Header`][web-unstable-header] component, it will
inherit the height of the `Header`.

### Full Example

With NavigationAction components:

```html
<nav class="Navigation" aria-label="Main Navigation">
  <ul>
    <li>
      <a class="NavigationAction NavigationAction--selected" href="#" aria-current="page">Selected Link</a>
    </li>
    <li>
      <span class="NavigationAction NavigationAction--disabled">Disabled Link</span>
    </li>
    <li>
      <a class="NavigationAction" href="#">Link</a>
    </li>
  </ul>
</nav>
```

With Buttons:

```html
<nav class="Navigation" aria-label="Secondary Navigation">
  <ul>
    <li>
      <a href="#" class="Button Button--medium Button--primary">Button</a>
    </li>
    <li>
      <a href="#" class="Button Button--medium Button--secondary">Button</a>
    </li>
  </ul>
</nav>
```

[web-unstable-header]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/UNSTABLE_Header/README.md
