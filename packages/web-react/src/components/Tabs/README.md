# Tabs

The Tab component is used to organize related content. User can navigate between
groups of information in tabbable regions.

## Tab

```jsx
const [selectedTabId, setState] = useState(1);

const selectTab = useCallback((tabId) => {
  setState(tabId);
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
const [selectedTabId, setState] = useState(1);

const selectTab = useCallback((tabId) => {
  setState(tabId);
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

**Available props**

| Name          | Type               | Description                                  |
| ------------- | ------------------ | -------------------------------------------- |
| `selectedTab` | `string`, `number` | Identification of the selected tab           |
| `toogle`      | `Function`         | Toggle function which accept tab ID as input |
| `children`    | `any`              | Child component                              |

### UncontrolledTabs

**Available props**

| Name                 | Type               | Description                            |
| -------------------- | ------------------ | -------------------------------------- |
| `defaultSelectedTab` | `string`, `number` | Identification of default selected tab |
| `children`           | `any`              | Child component                        |

### TabList

Tab list

**Available props**

| Name       | Type  | Description     |
| ---------- | ----- | --------------- |
| `children` | `any` | Child component |

### TabItem

Tab list item

**Available props**

| Name       | Type               | Description           |
| ---------- | ------------------ | --------------------- |
| `forTab`   | `string`, `number` | Identification of tab |
| `children` | `any`              | Child component       |

### TabLink

Tab list link

**Available props**

| Name       | Type     | Description     |
| ---------- | -------- | --------------- |
| `href`     | `string` | External link   |
| `children` | `any`    | Child component |

### TabContent

Tab content wrapper

**Available props**

| Name       | Type  | Description     |
| ---------- | ----- | --------------- |
| `children` | `any` | Child component |

### TabPane

Tab content item

**Available props**

| Name       | Type               | Description           |
| ---------- | ------------------ | --------------------- |
| `tabId`    | `string`, `number` | Identification of tab |
| `children` | `any`              | Child component       |

For detailed information see [Tabs](https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/components/Tabs/README.md) component.
