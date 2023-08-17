# ScrollView

## Usage

To make scrolling and scroll overflow decorators function correctly, the parent
container's height must be limited. In our examples, we set this height
limit using inline styles for demonstration purposes only.

### Default (Vertical)

```javascript
<div style={{ height: '250px' }}>
  <ScrollView>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
      sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
      pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
      vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
      mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
      Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis,
      feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
    </p>
  </ScrollView>
</div>
```

### Horizontal

```javascript
<ScrollView direction="horizontal">
  <p className="py-700" style={{ whiteSpace: 'nowrap' }}>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
    natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
    pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
    vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
    mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
    Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis,
    feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
  </p>
</ScrollView>
```

## Overflow Decorators

The ScrollView component provides overflow decorators on its edges, showing that there is more content to scroll to.
Shadows are used by default.

You can use borders instead:

```javascript
<ScrollView overflowDecorators="borders" />
```

Or both:

```javascript
<ScrollView overflowDecorators="both" />
```

## Hiding the Scrollbar

```javascript
<ScrollView isScrollbarDisabled />
```

## ScrollView Props

| Name                  | Type                               | Default    | Required | Description                        |
| --------------------- | ---------------------------------- | ---------- | -------- | ---------------------------------- |
| `children`            | `ReactNode`                        | —          | ✔        | ScrollView children's nodes        |
| `direction`           | [`horizontal` \| `vertical`]       | `vertical` | ✕        | Direction of the wrapper           |
| `isScrollbarDisabled` | `boolean`                          | `false`    | ✕        | If true, the Scrollbar is disabled |
| `overflowDecorators`  | [`borders` \| `shadows` \| `both`] | `shadows`  | ✕        | ScrollView overflow decorators     |
| `UNSAFE_className`    | `string`                           | —          | ✕        | Wrapper custom class name          |
| `UNSAFE_style`        | `CSSProperties`                    | —          | ✕        | Wrapper custom style               |
