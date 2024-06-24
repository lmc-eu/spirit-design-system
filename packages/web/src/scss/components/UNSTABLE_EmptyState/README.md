# UNSTABLE EmptyState

⚠️ This component is UNSTABLE. It may significantly change at any point in the future.
Please use it with caution.

EmptyState component should be included at the error pages or empty state pages as the carrier of an information and links to elsewhere.

EmptyState component is a composition of the following components:

- [UNSTABLE_EmptyState](#unstable-emptystate)
  - [UNSTABLE_EmptyStateSection](#unstable-emptystatesection)

## UNSTABLE EmptyState

The `UNSTABLE_EmptyState` component is a main container responsible for positioning the [UNSTABLE_EmptyStateSection](#unstable-emptystatesection) components or content.

```html
<div class="Stack Stack--hasSpacing UNSTABLE_EmptyState" style="--stack-spacing: var(--spirit-space-700);">
  <!-- UNSTABLE_EmptyStateSection components or content go here -->
</div>
```

This component is based on the [Stack][stack] component and accepts all its variants. For more information about `Stack` usage options, see the [Stack documentation][stack].

## UNSTABLE EmptyStateSection

The `UNSTABLE_EmptyStateSection` component is a container for the content of each section.

```html
<div class="Stack UNSTABLE_EmptyState__section">
  <!-- UNSTABLE_EmptyStateSection content go here -->
</div>
```

This component is based on the [Stack][stack] component and accepts all its variants. For more information about `Stack` usage options, see the [Stack documentation][stack].

[stack]: https://github.com/lmc-eu/spirit-design-system/blob/dependencies/major-monorepo-storybook/packages/web/src/scss/components/Stack/README.md

## Full Example

```html
<div class="Stack Stack--hasSpacing UNSTABLE_EmptyState" style="--stack-spacing: var(--spirit-space-700);">
  <div class="Stack UNSTABLE_EmptyState__section">Placeholder</div>
  <div class="Stack Stack--hasSpacing UNSTABLE_EmptyState__section" style="--stack-spacing: var(--spirit-space-500);">
    <h2 class="typography-heading-xsmall-text">Headline</h2>
    <p color="secondary" class="typography-body-medium-text-regular">Description</p>
  </div>
  <div class="Stack UNSTABLE_EmptyState__section">
    <div class="UNSTABLE_ActionLayout">
      <a href="#" role="button" class="Button Button--primary Button--medium">Action</a>
      <a href="#" role="button" class="Button Button--secondary Button--medium">Action</a>
    </div>
  </div>
  <div class="Stack UNSTABLE_EmptyState__section"><a href="#" class="link-primary">Link to something</a></div>
</div>
```
