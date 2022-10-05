# Collapse

## Usage

### Basic

```javascript
<Collapse id="CollapseExample" renderToggle={({ trigger }) => <button {...trigger}>...</button>}>
  ...
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
  collapsibleToBreakpoint="tablet"
>
  ...
</Collapse>
```

### Hide on close

```javascript
<Collapse id="CollapseExample" renderToggle={({ trigger }) => <button {...trigger}>...</button>} hideOnCollapse>
  ...
</Collapse>
```

## Props

| Prop name                 | Type                                                        | Default    | Required | Description                            |
| ------------------------- | ----------------------------------------------------------- | ---------- | -------- | -------------------------------------- |
| `id`                      | `string`                                                    | `<random>` | no       | Component id                           |
| `isCollapsed`             | `boolean`                                                   | -          | no       | Is collapsed on init                   |
| `renderTrigger`           | `(render: CollapseRenderProps) => ReactNode`                | -          | no       | Properties for trigger render          |
| `elementType`             | `'div','article','section','main','header','footer','span'` | -          | no       | Wrapper element type                   |
| `contentElementType`      | `'div','article','section','main','header','footer','span'` | -          | no       | Wrapper element type                   |
| `collapsibleToBreakpoint` | `'mobile', 'tablet', 'desktop'`                             | -          | no       | Handle for responsive breakpoint       |
| `hideOnCollapse`          | `boolean`                                                   | -          | no       | Hides button when content is collapsed |
| `UNSAFE_className`        | `string`                                                    | -          | no       | Wrapper custom classname               |
| `UNSAFE_style`            | `CSSProperties`                                             | -          | no       | Wrapper custom style                   |

## CollapseRenderProps

| Prop name                  | Type      | Description                |
| -------------------------- | --------- | -------------------------- |
| `collapsed`                | `boolean` | When collapse is collapsed |
| `trigger`                  | `Object`  | Trigger properties         |
| `trigger.onClick`          | `string`  | Trigger onClick event      |
| `trigger.className`        | `string`  | Trigger state classname    |
| `trigger['aria-expanded']` | `string`  | Trigger aria expanded      |
| `trigger['aria-controls']` | `string`  | Trigger aria controls      |
