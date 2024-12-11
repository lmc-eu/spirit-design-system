# How to Extend Components

In some cases, you might want to extend the components with visual functionality. It is Possible.
Each component has a customizable property `class`.

## Example

For example, if we want to extend the [Button][button] component with size, we can do it in the project as follows:

**button.twig**

```twig
{% set _sizeClass = props.size is defined ? _spiritClassPrefix ~ 'Button--' ~ props.size %}
{% set props = props|merge({ 'class': _sizeClass }) %}

{% extends "@spirit/button.twig" %}
```

All components in this repository also exist with the alias `@spirit`, exactly
After the previous change, we can now call the Button component with additional functionality.

```twig
{% embed "@spirit/button.twig" with { props: {
    color: 'primary'
    size: 'small'
}} %}
    {% block content %}
        Primary buttom
    {% endblock %}
{% endembed %}
```

```twig
<Button color="primary" size="small">Primary buttom</Button>
```

[button]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Button
