# UNSTABLE EmptyState

⚠️ This component is UNSTABLE. It may significantly change at any point in the future.
Please use it with caution.

EmptyState component should be included at the error pages or empty state pages as the carrier of an information and links to elsewhere.

EmptyState component is a composition of the following components:

- [UNSTABLE_EmptyState](#unstable-emptystate)
  - [UNSTABLE_EmptyStateSection](#unstable-emptystatesection)

## UNSTABLE EmptyState

The `UNSTABLE_EmptyState` component is a main container responsible for positioning the [UNSTABLE_EmptyStateSection](#unstable-emptystatesection) components or content.

```twig
<UNSTABLE_EmptyState>
  <!-- UNSTABLE_EmptyStateSection components or content go here -->
</UNSTABLE_EmptyState>
```

### API

This component is based on the [Stack][stack] component and accepts all its properties. For more information, see the [Stack component API][stack-api].

## UNSTABLE EmptyStateSection

The `UNSTABLE_EmptyStateSection` component is a container for the content of each section.

```twig
<UNSTABLE_EmptyStateSection>
  <!-- Content goes here -->
</UNSTABLE_EmptyStateSection>
```

### API

The component is based on the [Stack][stack] component and accepts all its properties. For more information, see the [Stack component API][stack-api].

[stack]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/src/Resources/components/Stack/README.md
[stack-api]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/src/Resources/components/Stack/README.md#api

## Full Example

```twig
<UNSTABLE_EmptyState spacing="space-700">
  <UNSTABLE_EmptyStateSection>
    <Icon name="search" isSymbol />
  </UNSTABLE_EmptyStateSection>
  <UNSTABLE_EmptyStateSection>
    <Heading>Heading</Heading>
    <Text>Description</Text>
  </UNSTABLE_EmptyStateSection>
  <UNSTABLE_EmptyStateSection>
    <UNSTABLE_ActionLayout>
      <ButtonLink href="#" color="primary">Primary Action</ButtonLink>
      <ButtonLink href="#" color="secondary">Secondary Action</ButtonLink>
    </UNSTABLE_ActionLayout>
  </UNSTABLE_EmptyStateSection>
  <UNSTABLE_EmptyStateSection>
    <Link href="#">Link to something</Link>
  </UNSTABLE_EmptyStateSection>
</UNSTABLE_EmptyState>

```
