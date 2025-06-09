# PricingPlan

PartnerLogo is a component designed to display the partner's logo (e.g. advertiser, business partner, etc.).

## API

| Name          | Type                               | Default  | Required | Description                                                   |
| ------------- | ---------------------------------- | -------- | -------- | ------------------------------------------------------------- |
| `children`    | `ReactNode`                        | `null`   | ✓        | Content of the PartnerLogo                                    |
| `hasSafeArea` | `boolean`                          | `true`   | ✕        | If false, the PartnerLogo is displayed without safe area      |
| `isFluid`     | `boolean`                          | `false`  | ✕        | If true, the PartnerLogo adjusts to the size of its container |
| `size`        | [Size dictionary][dictionary-size] | `medium` | ✕        | Size of the PartnerLogo                                       |

The components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

[dictionary-size]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#size
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
