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
<Collapse id="CollapseExample" renderToggle={({ trigger }) => <button {...trigger}>...</button>} responsive="tablet">
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

## CollapseRenderProps

| Prop name                  | Type      | Description                   |
| -------------------------- | --------- | ----------------------------- |
| `collapsed`                | `boolean` | When collapse is collapsed    |
| `triggerHidden`            | `boolean` | When trigger should be hidden |
| `trigger`                  | `Object`  | Trigger properties            |
| `trigger.onClick`          | `string`  | Trigger onClick event         |
| `trigger.className`        | `string`  | Trigger state classname       |
| `trigger['aria-expanded']` | `string`  | Trigger aria expanded         |
| `trigger['aria-controls']` | `string`  | Trigger aria controls         |
