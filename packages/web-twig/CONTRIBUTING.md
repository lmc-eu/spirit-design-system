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

🚨 Do not use `default(true)` filter for setting default value of the prop to `true`.
This will lead to unexpected behavior.
The `false` value is never passed and is treated as empty/null, so the prop will be `true` every time.

Do not use:

```twig
{%- set _ariaHidden = props.ariaHidden | default(true) | boolprop -%}
```

Instead use:

```twig
{%- set _ariaHidden = props.ariaHidden ?? true -%}
```

See [default filter does not work issue](https://github.com/twigphp/Twig/issues/769) and [Twig default filter documentation](https://twig.symfony.com/doc/2.x/filters/default.html) for more information

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

## Component tests

Component testing is done by snapshots tests.

### Testing

To run the snapshot tests:

1. `% cd <your-local-path>/spirit-design-system/packages/web-twig`,
2. `% yarn test:unit` (or `make phpunit`/`composer phpunit`).

### Authoring tests

It is required to create at least one snapshot test for each component. Please
create a new component fixture file in `tests/components-fixtures/` and name it
according to the component name, e.g.:

- `tests/components-fixtures/buttonDefault.twig`

You can test multiple scenarios within a single fixture. These use cases must be
always tested:

1. test the mandatory props only,
2. test all props.

Aside from these test cases, feel free to test any other important scenarios as
well.

To keep both fixtures and snapshots organized, separate individual test cases
using an HTML comment, for example:

```html
<!-- Render with all props -->
```

Note: the first test case (testing mandatory props only) is not introduced by a
comment because Twig would render it before the opening `<html>` tag. However,
any comments can be used when using the [test layout](#renderable-snapshots).

### Renderable snapshots

By default, snapshots only contain bare HTML of the tested component. This is
sufficient for checking the output HTML, but not good enough to be viewed in a
browser.

To wrap your HTML snapshot into a minimal styled page with all Spirit CSS and
JS, use a test layout built specifically for this purpose like this:

```twig
{% extend 'partials/testLayout.twig' %}
{% block content %}
    {# Your test cases here #}
{% endblock %}
```

The result is a complete, static HTML page that can be served by any simple web
server, e.g. the one included in [PHPStorm], [Python], or [PHP].

💡 Since the test layout refers to CSS, JS, and SVG assets from other Spirit
packages, make sure to run `yarn build` at the project-root level before trying
to access the rendered page in your browser.

### Updating snapshots

Run `make phpunit-update` (which is an alias for `composer phpunit:update`) to
create or update snapshots from fixtures.

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

[PHPStorm]: https://www.jetbrains.com/help/phpstorm/php-built-in-web-server.html
[Python]: https://pythonbasics.org/webserver/
[PHP]: https://www.php.net/manual/en/features.commandline.webserver.php
