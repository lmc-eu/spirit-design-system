# EmptyState

EmptyState component should be included at the error pages or empty state pages as the carrier of an information and links to elsewhere.

EmptyState component is a composition of the following components:

- [EmptyState](#unstable-emptystate)
  - [EmptyStateSection](#unstable-emptystatesection)

## EmptyState

The `EmptyState` component is a main container responsible for positioning the [EmptyStateSection](#unstable-emptystatesection) components or content.

```twig
<EmptyState>
  <!-- EmptyStateSection components or content go here -->
</EmptyState>
```

### API

This component is based on the [Stack][stack] component and accepts all its properties. For more information, see the [Stack component API][stack-api].

## EmptyStateSection

The `EmptyStateSection` component is a container for the content of each section.

```twig
<EmptyStateSection>
  <!-- Content goes here -->
</EmptyStateSection>
```

### API

The component is based on the [Stack][stack] component and accepts all its properties. For more information, see the [Stack component API][stack-api].

## Full Example

```twig
<EmptyState spacing="space-900">
  <EmptyStateSection>
    <Icon name="search" isSymbol />
  </EmptyStateSection>
  <EmptyStateSection>
    <Heading>Heading</Heading>
    <Text>Description</Text>
  </EmptyStateSection>
  <EmptyStateSection>
    <div class="Flex Flex--noWrap Flex--alignmentXStretch Flex--tablet--alignmentXCenter Flex--alignmentYStretch Flex--vertical Flex--tablet--horizontalReversed">
      <ButtonLink href="#" color="primary">Primary Action</ButtonLink>
      <ButtonLink href="#" color="secondary">Secondary Action</ButtonLink>
    </div>
  </EmptyStateSection>
  <EmptyStateSection>
    <Link href="#">Link to something</Link>
  </EmptyStateSection>
</EmptyState>

```

[stack]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/src/Resources/components/Stack/README.md
[stack-api]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/src/Resources/components/Stack/README.md#api
