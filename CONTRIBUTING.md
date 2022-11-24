# Contributing

> Guide for contributors.

## PHP support using Docker

PHP language is required to develop this package. In order to support other frontend developers which do not have installed PHP locally, there is a Docker image available to develop this package.

Please consult [`Makefile`](./Makefile) for available commands and options to setup and run this project.

## Components definition

In order to maintain the uniformity of writing and functioning of components in HTML-like syntax, it is necessary to accept the following rules in the implementation.

## File Structure

This is an example of a typical file structure of a component:

```
├── src
    └── Resources
        └── components
            └── <ComponentName>
                ├── <ComponentName>.twig — Twig component
                └── README.md — documentation of the component
```

## Rules in components

1. Name of components must be camelCase with first letter small.
2. New components must contain a property class so that they can be extended according to the [instructions](./docs/extendComponents.md)

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

## Components tests

Components testing is done by snapshots tests. It is required to create snapshot test for each component. Please create a new component fixture file in `tests/components-fixtures/` folder and name it according to the component name.

Run `composer phpunit:update` or `make phpunit-update` to create or update snapshots from fixtures.

### Testing

- `% cd <your-local-path>/spirit-design-system/packages/web-twig`
- `% yarn test:unit` for unit tests

## Release new version

TODO: [Automate release process](https://github.com/lmc-eu/spirit-design-system/issues/393).

As we are now using only `dev-main` version of this package, until we have stable release process, we are not able to release new version with release script and tag it.

⚠️ **DO NOT RUN** the script `./newVersion.sh <version>`!

### Monorepo and Packagist.org

Packagist requires a single repository for a single package to be present to publish the package. In order to publish this package we are using READ-ONLY repository https://github.com/lmc-eu/spirit-web-twig-bundle where we are publishing the subtree of this monorepo.

### Updating READ-ONLY repository

Please use these commands to update the READ-ONLY repository.

Add remote repository only once:

- `git remote add web-twig-readonly git@github.com:lmc-eu/spirit-web-twig-bundle.git`

Force push current changes to remote using subtree:

- `` git push web-twig-readonly `git subtree split --prefix packages/web-twig main`:main --force ``
