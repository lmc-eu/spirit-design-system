# Pagination

## Example with the current item in the first place

```jsx
<Pagination>
  <PaginationItem>
    <PaginationLink href="#" isCurrent accessibilityLabel="Current Page, Page 1" pageNumber={1} />
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#" accessibilityLabel="Go to Page 2" pageNumber={2} />
  </PaginationItem>
  {'...'}
  <PaginationItem>
    <PaginationLinkNext href="#" />
  </PaginationItem>
</Pagination>
```

## Example with the current item in the middle

```jsx
<Pagination>
  <PaginationItem>
    <PaginationLinkPrevious href="#" />
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#" accessibilityLabel="Go to Page 11" pageNumber={11} />
  </PaginationItem>
  {'...'}
  <PaginationItem>
    <PaginationLink href="#" isCurrent accessibilityLabel="Current Page, Page 13" pageNumber={13} />
  </PaginationItem>
  {'...'}
  <PaginationItem>
    <PaginationLink href="#" accessibilityLabel="Go to Page 15" pageNumber={15} />
  </PaginationItem>
  <PaginationItem>
    <PaginationLinkNext href="#" />
  </PaginationItem>
</Pagination>
```

## Example with the current item in the last place

```jsx
<Pagination>
  <PaginationItem>
    <PaginationLinkPrevious href="#" />
  </PaginationItem>
  {'...'}
  <PaginationItem>
    <PaginationLink href="#" accessibilityLabel="Go to Page 112" pageNumber={112} />
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#" isCurrent accessibilityLabel="Current Page, Page 113" pageNumber={113} />
  </PaginationItem>
</Pagination>
```

## Example with the first current item, centered

```jsx
<Pagination UNSAFE_className="text-center">
  <PaginationItem>
    <PaginationLink href="#" isCurrent accessibilityLabel="Current Page, Page 1" pageNumber={1} />
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#" accessibilityLabel="Go to Page 2" pageNumber={2} />
  </PaginationItem>
  {'...'}
  <PaginationItem>
    <PaginationLinkNext href="#" />
  </PaginationItem>
</Pagination>
```

## Pagination props

| Name               | Type                      | Default | Required | Description                                        |
| ------------------ | ------------------------- | ------- | -------- | -------------------------------------------------- |
| `children`         | `ReactNode`               | `null`  | ✕        | Content of the Pagination wrapper                  |
| `listProps`        | `SpiritUListElementProps` | `{}`    | ✕        | Props for the inner [UL element props][ul-element] |
| `UNSAFE_className` | `string`                  | -       | ✕        | Wrapper custom class name                          |
| `UNSAFE_style`     | `CSSProperties`           | -       | ✕        | Wrapper custom style                               |

Other unnamed props of this component are formed from the [HTML element][html-element].

## PaginationItem props

| Name               | Type            | Default | Required | Description            |
| ------------------ | --------------- | ------- | -------- | ---------------------- |
| `children`         | `ReactNode`     | `null`  | ✕        | Content of the Item    |
| `UNSAFE_className` | `string`        | -       | ✕        | Item custom class name |
| `UNSAFE_style`     | `CSSProperties` | -       | ✕        | Item custom style      |

Other unnamed props of this component are formed from the [LI element][li-element].

## PaginationLink props

| Name                 | Type            | Default | Required | Description                            |
| -------------------- | --------------- | ------- | -------- | -------------------------------------- |
| `pageNumber`         | `number`        | -       | ✔        | Page number, hidden for screen readers |
| `isCurrent`          | `boolean`       | `null`  | ✕        | If true, the link is marked as current |
| `accessibilityLabel` | `string`        | `null`  | ✔        | Accessibility label of the link        |
| `elementType`        | `ElementType`   | `'a'`   | ✕        | Type of an element                     |
| `UNSAFE_className`   | `string`        | -       | ✕        | Link custom class name                 |
| `UNSAFE_style`       | `CSSProperties` | -       | ✕        | Link custom style                      |

## PaginationButtonLink props

This component extends the [Button][button] component with directional arrows and a hidden label.

| Name                 | Type                 | Default | Required | Description                                                          |
| -------------------- | -------------------- | ------- | -------- | -------------------------------------------------------------------- |
| `direction`          | `'previous', 'next'` | `null`  | ✔        | The direction according to which the corresponding icon is displayed |
| `accessibilityLabel` | `string`             | `null`  | ✔        | Accessibility label of the link                                      |

## PaginationLinkPrevious props

This component extends the `PaginationButtonLink` component.

| Name                 | Type     | Default      | Required | Description                     |
| -------------------- | -------- | ------------ | -------- | ------------------------------- |
| `accessibilityLabel` | `string` | `'Previous'` | ✕        | Accessibility label of the link |

## PaginationLinkNext props

This component extends the `PaginationButtonLink` component.

| Name                 | Type     | Default  | Required | Description                     |
| -------------------- | -------- | -------- | -------- | ------------------------------- |
| `accessibilityLabel` | `string` | `'Next'` | ✕        | Accessibility label of the link |

## Icons Provider

To display the icons correctly, the component needs to be wrapped with IconsProvider.

```jsx
import { IconsProvider } from 'packages/web-react/src/context';

<IconsProvider>
  <Pagination>...</Pagination>
</IconsProvider>;
```

For detailed information see [Pagination][pagination] component.

[pagination]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/Pagination/README.md
[button]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/src/components/Button/README.md
[html-element]: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
[ul-element]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul
[li-element]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li
