# Tabs

The Tab component is used to organize related content. User can navigate between
groups of information in tabbable regions.

## Tab

```jsx
const [selectedTabId, setSelectedTab] = useState(1);

const selectTab = useCallback((tabId) => {
  setSelectedTab(tabId);
}, []);

<Tabs selectedTab={selectedTabId} toggle={selectTab}>
  <TabList>
    <TabItem forTab={1}>Item Selected</TabItem>
    <TabItem forTab={2}>Item</TabItem>
  </TabList>
  <TabContent>
    <TabPane tabId={1}>Pane 1</TabPane>
    <TabPane tabId={2}>Pane 2</TabPane>
  </TabContent>
</Tabs>;
```

## Tab with Links

```jsx
const [selectedTabId, setSelectedTab] = useState(1);

const selectTab = useCallback((tabId) => {
  setSelectedTab(tabId);
}, []);

<Tabs selectedTab={selectedTabId} toggle={selectTab}>
  <TabList>
    <TabItem forTab={1}>Item Selected</TabItem>
    <TabItem forTab={2}>Item</TabItem>
    <TabLink href="https://www.example.com">Item Link</TabLink>
    <TabLink href="https://www.example.com">Item Link Only Desktop</TabLink>
  </TabList>
  <TabContent>
    <TabPane tabId={1}>Pane 1</TabPane>
    <TabPane tabId={2}>Pane 2</TabPane>
  </TabContent>
</Tabs>;
```

## Uncontrolled Tabs

```jsx
<UncontrolledTabs defaultSelectedTab={1}>
  <TabList>
    <TabItem forTab={1}>Item Selected</TabItem>
    <TabItem forTab={2}>Item</TabItem>
  </TabList>
  <TabContent>
    <TabPane tabId={1}>Pane 1</TabPane>
    <TabPane tabId={2}>Pane 2</TabPane>
  </TabContent>
</UncontrolledTabs>
```

### Tabs

#### API

| Name                | Type                     | Default | Required | Description                                  |
| ------------------- | ------------------------ | ------- | -------- | -------------------------------------------- |
| `selectedTab`       | [`string` \| `number`]   | —       | ✔        | Identification of the selected tab           |
| `toogle`            | `Function`               | —       | ✔        | Toggle function which accept tab ID as input |
| `children`          | `any`                    | —       | ✕        | Child component                              |
| `onSelectionChange` | `(tabId: TabId) => void` | —       | ✕        | When the state of the selected panel changes |

### UncontrolledTabs

#### API

| Name                 | Type                     | Default | Required | Description                                  |
| -------------------- | ------------------------ | ------- | -------- | -------------------------------------------- |
| `defaultSelectedTab` | [`string` \| `number`]   | —       | ✔        | Identification of default selected tab       |
| `children`           | `any`                    | —       | ✕        | Child component                              |
| `onSelectionChange`  | `(tabId: TabId) => void` | —       | ✕        | When the state of the selected panel changes |

### TabList

Tab list

#### API

| Name               | Type            | Default | Required | Description               |
| ------------------ | --------------- | ------- | -------- | ------------------------- |
| `children`         | `any`           | —       | ✕        | Child component           |
| `UNSAFE_className` | `string`        | —       | ✕        | Wrapper custom class name |
| `UNSAFE_style`     | `CSSProperties` | —       | ✕        | Wrapper custom style      |

### TabItem

Tab list item

#### API

| Name               | Type                   | Default | Required | Description               |
| ------------------ | ---------------------- | ------- | -------- | ------------------------- |
| `forTab`           | [`string` \| `number`] | —       | ✔        | Identification of tab     |
| `children`         | `any`                  | —       | ✕        | Child component           |
| `UNSAFE_className` | `string`               | —       | ✕        | Wrapper custom class name |
| `UNSAFE_style`     | `CSSProperties`        | —       | ✕        | Wrapper custom style      |

### TabLink

Tab list link

#### API

| Name        | Type                         | Default | Required | Description                   |
| ----------- | ---------------------------- | ------- | -------- | ----------------------------- |
| `children`  | `any`                        | —       | ✕        | Child component               |
| `href`      | `string`                     | —       | ✔        | External link                 |
| `itemProps` | `StyleProps & HTMLLIElement` | —       | ✕        | Props for parent list element |

### TabContent

Tab content wrapper

#### API

| Name               | Type            | Default | Required | Description               |
| ------------------ | --------------- | ------- | -------- | ------------------------- |
| `children`         | `any`           | —       | ✕        | Child component           |
| `UNSAFE_className` | `string`        | —       | ✕        | Wrapper custom class name |
| `UNSAFE_style`     | `CSSProperties` | —       | ✕        | Wrapper custom style      |

### TabPane

Tab content item

#### API

| Name               | Type                   | Default | Required | Description               |
| ------------------ | ---------------------- | ------- | -------- | ------------------------- |
| `tabId`            | [`string` \| `number`] | —       | ✔        | Identification of tab     |
| `children`         | `any`                  | —       | ✕        | Child component           |
| `UNSAFE_className` | `string`               | —       | ✕        | Wrapper custom class name |
| `UNSAFE_style`     | `CSSProperties`        | —       | ✕        | Wrapper custom style      |

For detailed information see [Tabs](https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/Tabs/README.md) component.
