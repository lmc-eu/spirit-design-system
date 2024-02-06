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

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

### UncontrolledTabs

#### API

| Name                 | Type                     | Default | Required | Description                                  |
| -------------------- | ------------------------ | ------- | -------- | -------------------------------------------- |
| `defaultSelectedTab` | [`string` \| `number`]   | —       | ✔        | Identification of default selected tab       |
| `children`           | `any`                    | —       | ✕        | Child component                              |
| `onSelectionChange`  | `(tabId: TabId) => void` | —       | ✕        | When the state of the selected panel changes |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

### TabList

Tab list

#### API

| Name       | Type  | Default | Required | Description     |
| ---------- | ----- | ------- | -------- | --------------- |
| `children` | `any` | —       | ✕        | Child component |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

### TabItem

Tab list item

#### API

| Name       | Type                   | Default | Required | Description           |
| ---------- | ---------------------- | ------- | -------- | --------------------- |
| `forTab`   | [`string` \| `number`] | —       | ✔        | Identification of tab |
| `children` | `any`                  | —       | ✕        | Child component       |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

### TabLink

Tab list link

#### API

| Name          | Type                         | Default | Required | Description                   |
| ------------- | ---------------------------- | ------- | -------- | ----------------------------- |
| `children`    | `any`                        | —       | ✕        | Child component               |
| `elementType` | `ElementType`                | `a`     | ✕        | Type of element               |
| `itemProps`   | `StyleProps & HTMLLIElement` | —       | ✕        | Props for parent list element |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

### TabContent

Tab content wrapper

#### API

| Name       | Type  | Default | Required | Description     |
| ---------- | ----- | ------- | -------- | --------------- |
| `children` | `any` | —       | ✕        | Child component |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

### TabPane

Tab content item

#### API

| Name       | Type                   | Default | Required | Description           |
| ---------- | ---------------------- | ------- | -------- | --------------------- |
| `tabId`    | [`string` \| `number`] | —       | ✔        | Identification of tab |
| `children` | `any`                  | —       | ✕        | Child component       |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

For detailed information see [Tabs](https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/Tabs/README.md) component.

[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
