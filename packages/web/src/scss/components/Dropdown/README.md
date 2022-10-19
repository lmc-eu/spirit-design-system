# Dropdown

```html
<div class="dropdown">
  <button
    data-toggle="dropdown"
    data-target="DropdownDemo2"
    data-reference="parent"
    data-placement="top-start"
    data-offset="5"
    data-padding="5"
  >
    toggle
  </button>
  <div class="Dropdown is-open" id="DropdownDemo2">
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
  </div>
</div>
```

## Placement

Default placement of dropdown content is set as `bottom-start`, but you can set it to different position such as `top-start`, `top-end`, `right-start`, `right-end`, `bottom-end`, `left-start` or `left-end`.

## JavaScript

There are two options here. Use the trigger element as an anchor or wrap the menu together with the trigger into a .dropdown class.

| Attribute        | Default        | Required | Description                                          |
| ---------------- | -------------- | -------- | ---------------------------------------------------- |
| `data-target`    | ''             | true     | Target menu element ID                               |
| `data-reference` | `toggle`       | -        | Reference selector, it could be 'toggle' or 'parent' |
| `data-placement` | `bottom-start` | -        | Placement of content                                 |
| `data-offset`    | `0`            | -        | Offset of dropdown content                           |
| `data-padding`   | `0`            | -        | Padding of offset content                            |

## JavaScript API

### Methods

| Method                | Description                                                                                                                                                                                                                                           |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `getInstance`         | _Static_ method which allows you to get the dropdown instance associated with a DOM. element                                                                                                                                                          |
| `getOrCreateInstance` | _Static_ method which allows you to get the dropdown instance associated with a DOM element, or create a new one in case it wasn’t initialized.                                                                                                       |
| `hide`                | Hides an element’s dropdown. Returns to the caller before the dropdown has actually been hidden (i.e. before the `hidden.dropdown` event occurs). This is considered a “manual” triggering of the dropdown.                                           |
| `show`                | Reveals an element’s dropdown. **Returns to the caller before the dropdown has actually been shown** (i.e. before the `shown.dropdown` event occurs). This is considered a “manual” triggering of the dropdown.                                       |
| `toggle`              | Toggles an element’s todropdownoltip. **Returns to the caller before the dropdown has actually been shown or hidden** (i.e. before the `shown.dropdown` or `hidden.dropdown` event occurs). This is considered a “manual” triggering of the dropdown. |

```js
const dropdown = Dropdown.getInstance('#example'); // Returns a dropdown instance

dropdown.show();
```

### Events

| Method           | Description                                                                           |
|------------------| ------------------------------------------------------------------------------------- |
| `hide.dropdown`  | This event is fired immediately when the `hide` instance method has been called.      |
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
