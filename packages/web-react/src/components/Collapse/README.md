# Collapse

## Usage

### Basic

```javascript
<Collapse id="CollapseExample" renderToggle={({ trigger }) => <button {...trigger}>...</button>}>
  ...children...
</Collapse>
```

### Responsive

```javascript
<Collapse
  id="CollapseExample"
  renderToggle={({ trigger }) => (
    <button className="d-tablet-none" {...trigger}>
      ...
    </button>
  )}
  responsive="tablet"
>
  ...children...
</Collapse>
```

### Hide on close

```javascript
<Collapse
  id="CollapseExample"
  renderToggle={({ trigger }) => <button {...trigger}>...</button>}
  elementType="span"
  contentProps={{
    elementType: 'span',
  }}
  hideOnCollapse
>
  ...children...
</Collapse>
```

## Props

| Prop name                       | Type                                                        | Default    | Required | Description                            |
| ------------------------------- | ----------------------------------------------------------- | ---------- | -------- | -------------------------------------- |
| `id`                            | `string`                                                    | `<random>` | no       | Component id                           |
| `collapsed`                     | `boolean`                                                   | -          | no       | Is collapsed on init                   |
| `renderTrigger`                 | `(render: CollapseRenderProps) => ReactNode`                | -          | no       | Properties for trigger render          |
| `elementType`                   | `'div','article','section','main','header','footer','span'` | -          | no       | Wrapper element type                   |
| `responsive`                    | `'mobile', 'tablet', 'desktop'`                             | -          | no       | Handle for responsive breakpoint       |
| `hideOnCollapse`                | `boolean`                                                   | -          | no       | Hides button when content is collapsed |
| `UNSAFE_className`              | `string`                                                    | -          | no       | Wrapper custom classname               |
| `UNSAFE_style`                  | `CSSProperties`                                             | -          | no       | Wrapper custom style                   |
| `contentProps`                  | `Object`                                                    | -          | no       | Content element properties             |
| `contentProps.elementType`      | `'div','article','section','main','header','footer','span'` | -          | no       | Content element type                   |
| `contentProps.UNSAFE_className` | `string`                                                    | -          | no       | Content custom classname               |
| `contentProps.UNSAFE_style`     | `CSSProperties`                                             | -          | no       | Content custom style                   |
| `breakpoints`                   | `Object`                                                    | -          | no       | Breakpoint widths                      |
| `breakpoints.mobile`            | `number`                                                    | `0`        | no       | Mobile min-width                       |
| `breakpoints.tablet`            | `number`                                                    | `768`      | no       | Tablet min-width                       |
| `breakpoints.desktop`           | `number`                                                    | `1280`     | no       | Desktop min-width                      |

## CollapseRenderProps

| Prop name                  | Type      | Description                    |
| -------------------------- | --------- | ------------------------------ |
| `collapsed`                | `boolean` | When collapse is collapsed     |
| `trigger`                  | `Object`  | Trigger properties             |
| `trigger.onClick`          | `string`  | Trigger onClick event          |
| `trigger.className`        | `string`  | Trigger state classname        |
| `trigger.UNSAFE_className` | `string`  | Trigger state UNSAFE classname |
| `trigger['aria-expanded']` | `string`  | Trigger aria expanded          |
| `trigger['aria-controls']` | `string`  | Trigger aria controls          |
