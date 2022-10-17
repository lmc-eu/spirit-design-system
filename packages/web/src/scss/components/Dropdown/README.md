# Dropdown

## Basic usage

```html
<div class="DropdownWrapper">
  <button
    type="button"
    data-toggle="dropdown"
    data-target="#DropdownDemo1"
    aria-expanded="false"
    aria-controls="#DropdownDemo1"
  >
    toggle
  </button>
  <div class="Dropdown Dropdown--bottom Dropdown--left" id="DropdownDemo1">
    <a href="#" class="d-flex mb-400">
      <svg width="24" height="24" aria-hidden="true" class="mr-400">
        <use xlink:href="/icons/svg/sprite.svg#info" />
      </svg>
      <span>Information</span>
    </a>
    </a>
    <a href="#" class="d-flex mb-400">
      <svg width="24" height="24" aria-hidden="true" class="mr-400">
        <use xlink:href="/icons/svg/sprite.svg#link" />
      </svg>
      <span>More links</span>
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

## Usage with full-width

```html
<div class="DropdownWrapper">
  <button
    type="button"
    data-toggle="dropdown"
    data-target="#DropdownDemo2"
    aria-expanded="false"
    aria-controls="#DropdownDemo2"
  >
    toggle
  </button>
  <div class="Dropdown Dropdown--bottom Dropdown--left Dropdown--fullWidth" id="DropdownDemo2">...</div>
</div>
```

## Responsive usage

```html
<div class="DropdownWrapper">
  <button
    type="button"
    data-toggle="dropdown"
    data-target="#DropdownDemo2"
    aria-expanded="false"
    aria-controls="#DropdownDemo2"
  >
    toggle
  </button>
  <div class="Dropdown Dropdown--fullWidth Dropdown--bottom Dropdown--left" id="DropdownDemo2" data-breakpoint="tablet">
    ...
  </div>
</div>
```

## Align

Dropdown content can be vertically aligned with `.Dropdown--top` or `.Dropdown--bottom` and horizontally `.Dropdown--left` or `.Dropdown--right` side of parent.

## JavaScript

There are two options here. Use the trigger element as an anchor or wrap the menu together with the trigger into a `.DropdownWrapper` class.

### Dropdown trigger

| Attribute        | Type      | Default | Required | Description                                                                                                    |
| ---------------- | --------- | ------- | -------- | -------------------------------------------------------------------------------------------------------------- |
| `data-target`    | `string`  | -       | yes      | Target menu element selector                                                                                   |
| `aria-expanded`  | `boolean` | -       | yes      | Is set on an element to indicate if a control is expanded or collapsed                                         |
| `aria-controls`  | `string`  | -       | yes      | Identifies the element whose contents or presence are controlled by the element on which this attribute is set |
| `data-autoclose` | `boolean` | true    | no       | When you need to disable autoclose feature                                                                     |

## Dropdown

| Attribute         | Type                          | Default | Required | Description                                                     |
| ----------------- | ----------------------------- | ------- | -------- | --------------------------------------------------------------- |
| `data-breakpoint` | `'mobile','tablet','desktop'` | -       | no       | Breakpoint to switch from the full-width to the auto-width mode |

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
