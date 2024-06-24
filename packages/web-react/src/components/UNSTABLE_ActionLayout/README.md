# UNSTABLE ActionLayout

⚠️ This component is UNSTABLE. It may significantly change at any point in the future.
Please use it with caution.

ActionLayout component is a container component that is used to position action components in a predefined layout.

- For desktop and tablet views, actions are positioned in a horizontal direction with reverse order.
- For mobile view, actions are positioned in a vertical layout and are stretched to the full width of the container.

```jsx
<UNSTABLE_ActionLayout>
  <!-- Actions components goes here -->
</UNSTABLE_ActionLayout>
```

## Full Example

```jsx
<UNSTABLE_ActionLayout>
  <ButtonLink href="#" color="primary">
    Primary Action
  </ButtonLink>
  <ButtonLink href="#" color="secondary">
    Secondary Action
  </ButtonLink>
</UNSTABLE_ActionLayout>
```
