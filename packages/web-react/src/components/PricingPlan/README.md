# PricingPlan

The PricingPlan component provides a flexible and structured way to display pricing information and feature comparisons. It's ideal for subscription plans, service tiers, or product packages.

PricingPlan is a composition of several subcomponents:

- [PricingPlan](#pricingPlan) – The main container
  - [PricingPlanHeader](#pricingplanHeader) – Contains plan title, price, and call-to-action
  - [PricingPlanBody](#pricingplanBody) – Contains the feature list
  - [PricingPlanFooter](#pricingplanFooter) – Optional additional information at the bottom

## PricingPlan

This is the main container of the composition.

```jsx
import { PricingPlan } from '@lmc-eu/spirit-web-react';

<PricingPlan>{/* PricingPlan content go here */}</PricingPlan>;
```

### Highlighted Pricing Plan

Add `isHighlated` prop to highlight the PricingPlan.

```jsx
<PricingPlan isHighlated>{/* PricingPlan content go here */}</PricingPlan>
```

### Comparable Pricing Plan

Add `isComparable` prop and wrap all plans into the `Matrix` layout when displaying multiple plans side by side to ensure proper alignment of features across plans:

```jsx
import { PricingPlan, Matrix } from '@lmc-eu/spirit-web-react';
<Matrix>
  <PricingPlan isComparable>{/* PricingPlan content go here */}</PricingPlan>
  <PricingPlan isComparable>{/* PricingPlan content go here */}</PricingPlan>
</Matrix>;
```

👉 Head over to the [Matrix][matrix-documentation] documentation to discover how to change the number of columns and other recommendations.

## API

| Name           | Type        | Default | Required | Description                             |
| -------------- | ----------- | ------- | -------- | --------------------------------------- |
| `children`     | `ReactNode` | -       | ✓        | Content of the PricingPlan              |
| `isComparable` | `boolean`   | `false` | ✕        | If true, the PricingPlan is comparable  |
| `isHighlated`  | `boolean`   | `false` | ✕        | If true, the PricingPlan is highlighted |

The components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

## PricingPlanHeader

The header contains the plan's title, optional subtitle, price, and a call-to-action button. It can also include an optional badge and note.

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

## API

| Name       | Type        | Default | Required | Description                              |
| ---------- | ----------- | ------- | -------- | ---------------------------------------- |
| `action`   | `ReactNode` | -       | ✕        | Call to action button                    |
| `badge`    | `string`    | -       | ✕        | Optional badge to highlight the plan     |
| `note`     | `string`    | -       | ✕        | Optional note for additional information |
| `price`    | `string`    | -       | ✕        | Price amount of the plan                 |
| `subtitle` | `string`    | -       | ✕        | Subtitle for the plan                    |
| `title`    | `string`    | -       | ✕        | Title of the plan                        |

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

## API

| Name          | Type                                       | Default | Required | Description                                         |
| ------------- | ------------------------------------------ | ------- | -------- | --------------------------------------------------- |
| `description` | `string`                                   | -       | ✕        | Optional introductory text                          |
| `features`    | `{ title: string; description: string }[]` | `[]`    | ✕        | List of features, each with a title and description |

## PricingPlanFooter

The footer is optional and can contain additional information or disclaimers.

```jsx
import { PricingPlanFooter } from '@lmc-eu/spirit-web-react';

<PricingPlanFooter>{/* Additional information or disclaimers */}</PricingPlanFooter>;
```

## API

| Name       | Type        | Default | Required | Description                      |
| ---------- | ----------- | ------- | -------- | -------------------------------- |
| `children` | `ReactNode` | -       | ✓        | Content of the PricingPlanFooter |

## Full Example

```jsx
import { PricingPlan, PricingPlanHeader, PricingPlanBody, PricingPlanFooter } from '@lmc-eu/spirit-web-react';

<PricingPlan isHighlated>
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

## Implementation Notes

The PricingPlan component uses [CSS Grid][mdn-grid] with [subgrid][mdn-subgrid]
layout to achieve vertical alignment of elements across multiple pricing plans.
This ensures that headers, feature lists, and footers
[line up perfectly](#comparable-pricingplans) when displayed side by side in the
[Matrix][matrix-documentation] layout.

The subgrid feature requires an explicit number of grid rows. However, we wanted
to make the PricingPlan component robust enough so developers don't have to know
the number of content rows in advance. As a compromise, there is a default of
100 grid rows that may or may not be used by your content. The number of rows is
[configurable](#customization).

The explicit number of grid rows is also why we don't use `row-gap` for vertical
spacing because `row-gap` is applied even for empty grid rows. Instead, to
prevent the empty rows from expanding the component vertically, we use `margin`
to separate individual content rows.

[matrix-documentation]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/src/components/Matrix/README.md
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
