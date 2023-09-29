# Dropdown

## Basic usage

```html
<div class="DropdownWrapper">
  <button
    data-spirit-toggle="dropdown"
    data-spirit-target="#dropdownDefault"
    class="Button Button--primary Button--medium"
    aria-expanded="false"
    aria-controls="#dropdownDefault"
  >
    Button as anchor
  </button>
  <div class="Dropdown Dropdown--bottom Dropdown--left" id="dropdownDefault">
    <a href="#" class="d-flex mb-400">
      <svg width="24" height="24" aria-hidden="true" class="mr-400">
        <use xlink:href="/icons/svg/sprite.svg#info" />
      </svg>
      <span>Information</span>
    </a>
    <a href="#" class="d-flex mb-400">
      <svg width="24" height="24" aria-hidden="true" class="mr-400">
        <use xlink:href="/icons/svg/sprite.svg#link" />
      </svg>
      <span>Bibendum aliquam, fusce integer sit amet congue non nulla aliquet enim</span>
    </a>
    <a href="#" class="d-flex mb-400">
      <svg width="24" height="24" aria-hidden="true" class="mr-400">
        <use xlink:href="/icons/svg/sprite.svg#profile" />
      </svg>
      <span>Profile</span>
    </a>
    <a href="#" class="d-flex">
      <svg width="24" height="24" aria-hidden="true" class="mr-400">
        <use xlink:href="/icons/svg/sprite.svg#help" />
      </svg>
      <span>Help</span>
    </a>
  </div>
</div>
```

## Usage with top-right align

```html
<div class="DropdownWrapper">
  <button
    data-spirit-toggle="dropdown"
    data-spirit-target="#dropdownTopRight"
    class="Button Button--primary Button--medium"
    aria-expanded="false"
    aria-controls="#dropdownTopRight"
  >
    Button as anchor
  </button>
  <div class="Dropdown Dropdown--top Dropdown--right" id="dropdownTopRight">
    <a href="#" class="d-flex mb-400">
      <svg width="24" height="24" aria-hidden="true" class="mr-400">
        <use xlink:href="/icons/svg/sprite.svg#info" />
      </svg>
      <span>Information</span>
    </a>
    <a href="#" class="d-flex mb-400">
      <svg width="24" height="24" aria-hidden="true" class="mr-400">
        <use xlink:href="/icons/svg/sprite.svg#link" />
      </svg>
      <span>Bibendum aliquam, fusce integer sit amet congue non nulla aliquet enim</span>
    </a>
    <a href="#" class="d-flex mb-400">
      <svg width="24" height="24" aria-hidden="true" class="mr-400">
        <use xlink:href="/icons/svg/sprite.svg#profile" />
      </svg>
      <span>Profile</span>
    </a>
    <a href="#" class="d-flex">
      <svg width="24" height="24" aria-hidden="true" class="mr-400">
        <use xlink:href="/icons/svg/sprite.svg#help" />
      </svg>
      <span>Help</span>
    </a>
  </div>
</div>
```

## Usage with disabled autoclose

```html
<div class="DropdownWrapper">
  <button
    data-spirit-toggle="dropdown"
    data-spirit-target="#dropdownDisabledAutoClose"
    class="Button Button--primary Button--medium"
    aria-expanded="false"
    aria-controls="#dropdownDisabledAutoClose"
    data-spirit-autoclose="true"
  >
    Button as anchor
  </button>
  <div class="Dropdown Dropdown--bottom Dropdown--left" id="dropdownDisabledAutoClose">
    <a href="#" class="d-flex mb-400">
      <svg width="24" height="24" aria-hidden="true" class="mr-400">
        <use xlink:href="/icons/svg/sprite.svg#info" />
      </svg>
      <span>Information</span>
    </a>
    <a href="#" class="d-flex mb-400">
      <svg width="24" height="24" aria-hidden="true" class="mr-400">
        <use xlink:href="/icons/svg/sprite.svg#link" />
      </svg>
      <span>Bibendum aliquam, fusce integer sit amet congue non nulla aliquet enim</span>
    </a>
    <a href="#" class="d-flex mb-400">
      <svg width="24" height="24" aria-hidden="true" class="mr-400">
        <use xlink:href="/icons/svg/sprite.svg#profile" />
      </svg>
      <span>Profile</span>
    </a>
    <a href="#" class="d-flex">
      <svg width="24" height="24" aria-hidden="true" class="mr-400">
        <use xlink:href="/icons/svg/sprite.svg#help" />
      </svg>
      <span>Help</span>
    </a>
  </div>
</div>
```

## Usage with full width mode `all`

```html
<div class="DropdownWrapper">
  <button
    data-spirit-toggle="dropdown"
    data-spirit-target="#dropdownFullWidthModeAll"
    class="Button Button--primary Button--medium"
    aria-expanded="false"
    aria-controls="#dropdownFullWidthModeAll"
  >
    Finibus quis imperdiet, semper imperdiet aliquam
  </button>
  <div class="Dropdown Dropdown--top Dropdown--left" id="dropdownFullWidthModeAll" data-spirit-fullwidthmode="all">
    <a href="#" class="d-flex mb-400">
      <svg width="24" height="24" aria-hidden="true" class="mr-400">
        <use xlink:href="/icons/svg/sprite.svg#info" />
      </svg>
      <span>Information</span>
    </a>
    <a href="#" class="d-flex mb-400">
      <svg width="24" height="24" aria-hidden="true" class="mr-400">
        <use xlink:href="/icons/svg/sprite.svg#link" />
      </svg>
      <span>Bibendum aliquam, fusce integer sit amet congue non nulla aliquet enim</span>
    </a>
    <a href="#" class="d-flex mb-400">
      <svg width="24" height="24" aria-hidden="true" class="mr-400">
        <use xlink:href="/icons/svg/sprite.svg#profile" />
      </svg>
      <span>Profile</span>
    </a>
    <a href="#" class="d-flex">
      <svg width="24" height="24" aria-hidden="true" class="mr-400">
        <use xlink:href="/icons/svg/sprite.svg#help" />
      </svg>
      <span>Help</span>
    </a>
  </div>
</div>
```

## Usage with full width mode `mobile-only`

```html
<div class="DropdownWrapper">
  <button
    data-spirit-toggle="dropdown"
    data-spirit-target="#dropdownFullWidthModeMobile"
    class="Button Button--primary Button--medium"
    aria-expanded="false"
    aria-controls="#dropdownFullWidthModeMobile"
  >
    Finibus quis imperdiet, semper imperdiet aliquam
  </button>
  <div
    class="Dropdown Dropdown--top Dropdown--left"
    id="dropdownFullWidthModeMobile"
    data-spirit-fullwidthmode="mobile-only"
  >
    <a href="#" class="d-flex mb-400">
      <svg width="24" height="24" aria-hidden="true" class="mr-400">
        <use xlink:href="/icons/svg/sprite.svg#info" />
      </svg>
      <span>Information</span>
    </a>
    <a href="#" class="d-flex mb-400">
      <svg width="24" height="24" aria-hidden="true" class="mr-400">
        <use xlink:href="/icons/svg/sprite.svg#link" />
      </svg>
      <span>Bibendum aliquam, fusce integer sit amet congue non nulla aliquet enim</span>
    </a>
    <a href="#" class="d-flex mb-400">
      <svg width="24" height="24" aria-hidden="true" class="mr-400">
        <use xlink:href="/icons/svg/sprite.svg#profile" />
      </svg>
      <span>Profile</span>
    </a>
    <a href="#" class="d-flex">
      <svg width="24" height="24" aria-hidden="true" class="mr-400">
        <use xlink:href="/icons/svg/sprite.svg#help" />
      </svg>
      <span>Help</span>
    </a>
  </div>
</div>
```

## Placement

Dropdown content can be vertically aligned with `.Dropdown--top` or `.Dropdown--bottom` and horizontally `.Dropdown--left` or `.Dropdown--right` side of parent.

## JavaScript

There are two options here. Use the trigger element as an anchor or wrap the menu together with the trigger into a `.DropdownWrapper` class.

### Dropdown trigger

| Attribute               | Type     | Default | Required | Description                                                                                                    |
| ----------------------- | -------- | ------- | -------- | -------------------------------------------------------------------------------------------------------------- |
| `data-spirit-target`    | `string` | —       | ✔        | Target menu element selector                                                                                   |
| `aria-expanded`         | `bool`   | —       | ✔        | Is set on an element to indicate if a control is expanded or collapsed                                         |
| `aria-controls`         | `string` | —       | ✔        | Identifies the element whose contents or presence are controlled by the element on which this attribute is set |
| `data-spirit-autoclose` | `bool`   | `true`  | ✕        | When you need to disable autoclose feature                                                                     |

## Dropdown

| Attribute                   | Type                              | Default | Required | Description     |
| --------------------------- | --------------------------------- | ------- | -------- | --------------- |
| `data-spirit-fullwidthmode` | [`off` \| `mobile-only` \| `all`] | —       | ✕        | Full-width mode |

## JavaScript API

### Methods

| Method                | Description                                                                                                                                                                                                                                    |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `getInstance`         | _Static_ method which allows you to get the dropdown instance associated with a DOM. element                                                                                                                                                   |
| `getOrCreateInstance` | _Static_ method which allows you to get the dropdown instance associated with a DOM element, or create a new one in case it wasn’t initialized.                                                                                                |
| `hide`                | Hides an element’s dropdown. Returns to the caller before the dropdown has actually been hidden (i.e. before the `hidden.dropdown` event occurs). This is considered a “manual” triggering of the dropdown.                                    |
| `show`                | Reveals an element’s dropdown. **Returns to the caller before the dropdown has actually been shown** (i.e. before the `shown.dropdown` event occurs). This is considered a “manual” triggering of the dropdown.                                |
| `toggle`              | Toggles an element’s dropdown. **Returns to the caller before the dropdown has actually been shown or hidden** (i.e. before the `shown.dropdown` or `hidden.dropdown` event occurs). This is considered a “manual” triggering of the dropdown. |

```js
const dropdown = Dropdown.getInstance('#example'); // Returns a dropdown instance

dropdown.show();
```

### Events

| Method            | Description                                                                           |
| ----------------- | ------------------------------------------------------------------------------------- |
| `hide.dropdown`   | This event is fired immediately when the `hide` instance method has been called.      |
| `hidden.dropdown` | This event is fired when the `hide` instance has finished being hidden from the user. |
| `show.dropdown`   | This event fires immediately when the `show` instance method is called.               |
| `shown.dropdown`  | This event is fired when the `show` instance has finished being shown to the user.    |

```js
const myDropdownEl = document.getElementById('myDropdown');
const dropdown = Dropdown.getOrCreateInstance(myDropdownEl);

myDropdownEl.addEventListener('hidden.dropdown', () => {
  // do something...
});

dropdown.hide();
```
