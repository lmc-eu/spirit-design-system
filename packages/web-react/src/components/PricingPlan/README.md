# PricingPlan

The PricingPlan component provides a flexible and structured way to display pricing information and feature comparisons. It's ideal for subscription plans, service tiers, or product packages.

PricingPlan is a composition of several subcomponents:

- [PricingPlan](#pricingPlan) – The main container
  - [PricingPlanHeader](#pricingplanHeader) – Contains plan title, price, call-to-action, and other optional elements
  - [PricingPlanBody](#pricingplanBody) – Contains the feature list
  - [PricingPlanFooter](#pricingplanFooter) – Optional additional information at the bottom

## PricingPlan

This is the main container of the composition.

```jsx
import { PricingPlan } from '@lmc-eu/spirit-web-react';

<PricingPlan>{/* PricingPlan content go here */}</PricingPlan>;
```

### Highlighted Pricing Plan

Add `isHighlighted` prop to highlight the PricingPlan.

```jsx
<PricingPlan isHighlighted>{/* PricingPlan content go here */}</PricingPlan>
```

### Comparable Features

Add `hasComparableFeatures` prop and wrap all plans into the `Matrix` layout when displaying multiple plans side by side to ensure proper alignment of features across plans:

```jsx
import { PricingPlan, Matrix } from '@lmc-eu/spirit-web-react';

<Matrix>
  <PricingPlan hasComparableFeatures>{/* PricingPlan content go here */}</PricingPlan>
  <PricingPlan hasComparableFeatures>{/* PricingPlan content go here */}</PricingPlan>
</Matrix>;
```

👉 Head over to the [Matrix][matrix-documentation] documentation to discover how to change the number of columns and other recommendations.

### API

| Name                    | Type          | Default   | Required | Description                                      |
| ----------------------- | ------------- | --------- | -------- | ------------------------------------------------ |
| `children`              | `ReactNode`   | -         | ✓        | Content of the PricingPlan                       |
| `elementType`           | `ElementType` | `article` | ✕        | Type of element                                  |
| `hasComparableFeatures` | `bool`        | `false`   | ✕        | If true, the PricingPlan has comparable features |
| `isHighlighted`         | `bool`        | `false`   | ✕        | If true, the PricingPlan is highlighted          |
| `rows`                  | `number`      | -         | ✕        | Number of grid rows in the plan layout           |

The components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

## PricingPlanHeader

The header contains the plan's title, subtitle, price, and a call-to-action button. All these elements are optional.
On the top of it, the header can also include an optional badge and note.

```jsx
import { PricingPlanHeader } from '@lmc-eu/spirit-web-react';

<PricingPlanHeader
  action={
    <ButtonLink href="#" size="large">
      Call to Action
    </ButtonLink>
  }
  badge="Recommended"
  title="Plan Title"
  subtitle="Supporting text"
  price="Price Amount"
  note="Additional information"
/>;
```

### API

| Name          | Type          | Default  | Required | Description                              |
| ------------- | ------------- | -------- | -------- | ---------------------------------------- |
| `action`      | `ReactNode`   | -        | ✕        | Call to action button                    |
| `badge`       | `string`      | -        | ✕        | Optional badge to highlight the plan     |
| `elementType` | `ElementType` | `header` | ✕        | Type of element                          |
| `note`        | `string`      | -        | ✕        | Optional note for additional information |
| `price`       | `string`      | -        | ✕        | Price amount of the plan                 |
| `subtitle`    | `string`      | -        | ✕        | Subtitle for the plan                    |
| `title`       | `string`      | -        | ✕        | Title of the plan                        |

The components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

## PricingPlanBody

The body contains the feature list. Each feature consists of a title and a description.

```jsx
import { PricingPlanBody } from '@lmc-eu/spirit-web-react';

<PricingPlanBody
  description="Optional introductory text"
  features={[
    {
      title: 'Feature name',
      description: 'Feature description',
    },
  ]}
/>;
```

You can also set the `tooltipContent` on the feature to provide additional information when the feature title is clicked.

```jsx
import { PricingPlanBody } from '@lmc-eu/spirit-web-react';

<PricingPlanBody
  description="Optional introductory text"
  features={[
    {
      title: 'Feature name',
      description: 'Feature description',
      tooltipContent: 'Additional information about the feature',
    },
  ]}
/>;
```

### API

| Name          | Type                                                                            | Default | Required | Description                                                                                 |
| ------------- | ------------------------------------------------------------------------------- | ------- | -------- | ------------------------------------------------------------------------------------------- |
| `description` | `string`                                                                        | -       | ✕        | Optional introductory text                                                                  |
| `elementType` | `ElementType`                                                                   | `div`   | ✕        | Type of element                                                                             |
| `features`    | `{ title: string; description: string, tooltipContent?: string \| ReactNode}[]` | `[]`    | ✕        | List of features, each with a title and description. Optionally you can set tooltipContent. |

## PricingPlanFooter

The footer is optional and can contain additional information or disclaimers.

```jsx
import { PricingPlanFooter } from '@lmc-eu/spirit-web-react';

<PricingPlanFooter>{/* Additional information or disclaimers */}</PricingPlanFooter>;
```

### API

| Name          | Type          | Default  | Required | Description                      |
| ------------- | ------------- | -------- | -------- | -------------------------------- |
| `children`    | `ReactNode`   | -        | ✓        | Content of the PricingPlanFooter |
| `elementType` | `ElementType` | `footer` | ✕        | Type of element                  |

## Full Example

```jsx
import { PricingPlan, PricingPlanHeader, PricingPlanBody, PricingPlanFooter } from '@lmc-eu/spirit-web-react';

<PricingPlan isHighlighted>
  <PricingPlanHeader
    action={
      <ButtonLink href="#" size="large">
        Call to Action
      </ButtonLink>
    }
    badge="Recommended"
    title="Plan Title"
    subtitle="Supporting text"
    price="Price Amount"
    note="Additional information"
  />
  <PricingPlanBody
    description="Optional introductory text"
    features={[
      {
        title: 'Feature name',
        description: 'Feature description',
      },
    ]}
  />
  <PricingPlanFooter>Footer content</PricingPlanFooter>
</PricingPlan>;
```

## Customization

There is a default number of 100 grid rows in the PricingPlan layout (see
[Implementation Notes](#implementation-notes) to learn why). To change the
number of grid rows, use the `rows` prop.

```jsx
<PricingPlan rows={50}>{/* PricingPlan content go here */}</PricingPlan>
```

## Implementation Notes

For more information about the implementation, see the [PricingPlan][pricing-plan-web-documentation] web documentation.

[matrix-documentation]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/src/components/Matrix/README.md
[pricing-plan-web-documentation]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/PricingPlan/README.md#implementation-notes
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
