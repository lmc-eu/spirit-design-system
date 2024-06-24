# UNSTABLE ActionLayout

⚠️ This component is UNSTABLE. It may significantly change at any point in the future.
Please use it with caution.

ActionLayout component is a container component that is used to position action components in a predefined layout.

- For desktop and tablet views, actions are positioned in a horizontal direction with reverse order.
- For mobile view, actions are positioned in a vertical layout and are stretched to the full width of the container.

```html
<div class="UNSTABLE_ActionLayout">
  <!-- Actions components goes here -->
</div>
```

## Full Example

```html
<div class="UNSTABLE_ActionLayout">
  <a href="#" role="button" class="Button Button--primary Button--medium">Primary Action</a>
  <a href="#" role="button" class="Button Button--secondary Button--medium">Secondary Action</a>
</div>
```
