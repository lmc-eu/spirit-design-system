# Container

## Basic Usage

```html
<div class="Container">Content</div>
```

## Fluid Container

```html
<div class="Container Container--fluid">Content</div>
```

## Sizes

- `Container--xsmall`
- `Container--small`
- `Container--medium`
- `Container--large`
- `Container--xlarge` (default)

```html
<div class="Container Container--xsmall">Content</div>
<div class="Container Container--small">Content</div>
<div class="Container Container--medium">Content</div>
<div class="Container Container--large">Content</div>
<div class="Container Container--xlarge">Content</div>
```

⚠️ Make sure that you have properly set up `container-{{size}}-max-width` tokens in your project. Without it, the old default size will be used, and sizes will not be available.

The following design tokens are required for Container to work:

- `container-xsmall-max-width`
- `container-small-max-width`
- `container-medium-max-width`
- `container-large-max-width`
- `container-xlarge-max-width`
