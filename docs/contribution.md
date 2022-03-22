# Contribution
## Components definition
In order to maintain the uniformity of writing and functioning of components in HTML-like syntax, it is necessary to accept the following rules in the implementation.

## Rules in components

1. Name of components must be camelCase with first letter small.
2. New components must contain a property class so that they can be extended according to the [instructions](./extendComponents.md)
```twig
{% set _class = (props.class is defined) ? ' ' ~  props.class : '' -%}
```

2. Components must have block content when is not self-closing. This block is in HTML-like syntax used to define children.
3. Components must contain attribute props. This is so that it resembles the React components as much as possible.
4. All internal twig variables should start by underscore (this represents private variables).

```twig
{% set _privateAttr = (props.attr is defined) ? pros.attr : '' %}
```

### Example of component definition

```twig
{# This represent main component class and prepend class prefix #}
{% set _className = _spiritClassPrefix ~ 'MainComponentClass' %}

{# This represent extendable component #}
{% set _class = (props.class is defined) ? ' ' ~  props.class : '' -%}

<span class="{{ _className }}{{ _class }}">

{# This represent children #}
{%- block content %}{% endblock %}
</span>
```

### Example of component usage

```twig
{% embed "@spirit/button.twig" with { props: {
    attr: 'value'
}} %}
    {% block content %}
        Some children content
    {% endblock %}
{% endembed %}
```