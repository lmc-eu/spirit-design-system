# Contributing

> Guide for contributors.

## PHP Support Using Docker

PHP language is required to develop this package. In order to support other frontend developers which do not have installed PHP locally, there is a Docker image available to develop this package.

To start this project simply run `make start` and then add project certificates to your machine by `make cert`.

In a moment the app will be setup and ready on `https://localhost:4443`.

Please consult [`Makefile`][makefile] for available commands and options to setup and run this project.

## Components Definition

In order to maintain the uniformity of writing and functioning of components in HTML-like syntax, it is necessary to accept the following rules in the implementation.

## File Structure

This is an example of a typical file structure of a component:

```text
├── src
    └── Resources
        └── components
            └── <ComponentName>
                ├── stories - Component stories
                ├── <ComponentName>.stories.twig - Template rendered in demo app
                ├── <ComponentName>.twig — Twig component
                └── README.md — documentation of the component
```

## Rules in Components

1. Name of components must be camelCase with first letter small.
2. New components must contain a property class so that they can be extended according to the [instructions](https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/docs/extend-components.md)

```twig
{% set _class = (props.class is defined) ? ' ' ~  props.class : '' -%}
```

2. Components must have block content when is not self-closing. This block is in HTML-like syntax used to define children.
3. Components must contain attribute props. This is so that it resembles the React components as much as possible.
4. All internal twig variables should start by underscore (this represents private variables).

```twig
{% set _privateAttr = (props.attr is defined) ? pros.attr : '' %}
```

### Boolean Props

🚨 Do not use `default(true)` filter for setting default value of the prop to `true`.
This will lead to unexpected behavior.
The `false` value is never passed and is treated as empty/null, so the prop will be `true` every time.

Do not use:

```twig
{%- set _ariaHidden = props.ariaHidden | default(true) -%}
```

Instead use:

```twig
{%- set _ariaHidden = props.ariaHidden ?? true -%}
```

See [default filter does not work issue][default-filter-issue] and [Twig default filter documentation][default-filter-documentation] for more information

### Unescaped Props

🚨 All props that uses [raw][raw] filter must be prefixed with `UNSAFE_`.
These props are unescaped.
For example we used this prefix for props that can accept HTML string.

```twig
<Checkbox UNSAFE_helperText="<strong>Help!</strong>" />
```

### Example of Component Definition

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

### Example of Component Usage

```twig
{% embed "@spirit/button.twig" with { props: {
    attr: 'value'
}} %}
    {% block content %}
        Some children content
    {% endblock %}
{% endembed %}
```

## Components Tests

Components testing is done by snapshots tests. It is required to create snapshot test for each component. Please create a new component fixture file in `tests/components-fixtures/` folder and name it according to the component name.

Run `composer phpunit:update` or `make phpunit-update` to create or update snapshots from fixtures.

### Testing

- `% cd <your-local-path>/spirit-design-system/packages/web-twig`
- `% yarn test:unit` for unit tests

#### Snapshots

The component testing is done only via snapshot testing.
When adding new functionality or removing an old one, please, check twice the output of the snapshot test.

Every component has its own suite of snapshot tests in the following directory architecture:

```text
├── src
    └── Resources
        └── components
            └── <ComponentName>
                └── __tests__ - Component tests
                    ├── <ComponentName>SnapshotTest.php - Test class that extends tests/AbstractComponentSnapshotTest.php
                    ├── __fixtures__ — Directory with prescriptions
                    └── __snapshots__ — Directory with snapshots
```

Snapshots are generated based on prescription by the [command above](#components-tests).

**Note:** Every component MUST contain the test that extends `tests/AbstractComponentSnapshotTest.php` which contains the current logic of the test itself.
It is balanced between the DRY principle and how the PHPUnit works.

## Release New Version

TODO: [Automate release process][automate-release-process].

As we are now using only `dev-main` version of this package, until we have stable release process, we are not able to release new version with release script and tag it.

⚠️ **DO NOT RUN** the script `./newVersion.sh <version>`!

### Monorepo and Packagist.org

Packagist requires a single repository for a single package to be present to publish the package. In order to publish this package we are using READ-ONLY repository https://github.com/lmc-eu/spirit-web-twig-bundle where we are publishing the subtree of this monorepo.

### Updating READ-ONLY Repository

Please use these commands to update the READ-ONLY repository.

Add remote repository only once:

- `git remote add web-twig-readonly git@github.com:lmc-eu/spirit-web-twig-bundle.git`

Force push current changes to remote using subtree:

- ``git push web-twig-readonly `git subtree split --prefix packages/web-twig main`:main --force``

Or

- use `make publish pkg=web-twig` in repository root to publish changes to remote.

Then switch to the `lmc-eu/spirit-web-twig-bundle` repository locally and tag the latest commit with the new version.

- `git pull`
- `git tag -a <version> m "@lmc-eu/spirit-web-twig@<version>"` (e.g. `git tag -a 4.6.0 -m "@lmc-eu/spirit-web-twig@4.6.0"`)
- `git push --tags`

After these steps, the new version will be available on [Packagist][packagist-spirit-web-twig-bundle].

[automate-release-process]: https://github.com/lmc-eu/spirit-design-system/issues/393
[default-filter-issue]: https://github.com/twigphp/Twig/issues/769
[default-filter-documentation]: https://twig.symfony.com/doc/2.x/filters/default.html
[makefile]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/Makefile
[packagist-spirit-web-twig-bundle]: https://packagist.org/packages/lmc/spirit-web-twig-bundle
[raw]: https://twig.symfony.com/doc/3.x/filters/raw.html
