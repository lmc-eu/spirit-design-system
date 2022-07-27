# Spirit Web Twig Bundle

![QA](https://jenkins-seduo-ci.prod.internal.lmc/job/Spirit-web-twig-bundle-qa/badge/icon?subject=QA&link=https://jenkins-seduo-ci.prod.internal.lmc/job/Spirit-web-twig-bundle-qa/)
![Version](https://img.shields.io/badge/version-1.8.0-blue.svg)

This is a Symfony bundle with Twig implementation of [Spirit Design System] components, extended with HTML-like syntax.

## Requirements

- PHP 7.4
- Symfony 3.4+ || 4.2+ || 5.0+
- Twig >=1.44.6 || >=2.12.5 || 3+

## Changelog

See [CHANGELOG](./CHANGELOG.md)

## How to install

### Step 1

Download using **composer**

1. Add satis repository into composer.json

```json
    ...
    "repositories": [
        {
            "type": "composer",
            "url": "https://jenkins-php.prod.internal.lmc/job/satis/ws/out/"
        }
    ]
```

2. Install package

```bash
composer require lmc/spirit-web-twig-bundle:~1.8.0
```

### Step 2

Add `SpiritWebTwigBundle` into bundles (under `all` bundles). If you use Symfony flex, it will be configured automatically.

**bundles.php**

```php
    return [
        ...,
        Lmc\SpiritWebTwigBundle\SpiritWebTwigBundle::class => ['all' => true],
    ];
```

### Step 3 (optional)

If you want to change the default settings, create a config

**config/packages/spirit_web_twig.yml**

```yaml
# all parameters are optional
spirit_web_twig:
  # define one or more paths to expand or overload components
  paths:
    - '%kernel.project_dir%/templates/components'
  paths_alias: 'jobs-ui' # default is 'spirit'
  html_syntax_lexer: false # default is true
  spirit_css_class_prefix: 'jobs' # default is null
  icons: # optional settings for svg assets
    paths:
      - '%kernel.project_dir%/assets/icons' # define paths for svg icons set
    alias: 'jobs-icons' # default is 'icons-assets'
```

## Usage

Now you can use Twig components with HTML-like syntax in your Symfony project. You only need to remember that, unlike in HTML, component tags must always start with a capital letter:

```html
<ComponentName attr="value">Some other content</ComponentName>
...
<ComponentName attr="value" />
```

You can pass attributes like this:

```html
<ComponentName
:any="'any' ~ 'prop'" // this return as "any" prop with value "anyprop"
other="{{'this' ~ 'works' ~ 'too'}}"
anotherProp="or this still work"
not-this="{{'this' ~ 'does'}}{{ 'not work' }}" // this returns syntax as plain text but prop with dash work
ifCondition="{{ variable == 'success' ? 'true' : 'false' }}"  // condition can only be written via the ternary operator
isOpen  // if no value is defined, it is set to true
>
    Submit
</ComponentName>
```

or pure original implementation

```twig
{% embed "@spirit/componentName.twig" with { props: {
    attr: 'value'
}} %}
    {% block content %}
        Some other content
    {% endblock %}
{% endembed %}
```

# Spirit Components

- [Alert](./docs/Alert.md)
- [Button](./docs/Button.md)
- [ButtonLink](./docs/ButtonLink.md)
- [Container](./docs/Container.md)
- [Grid](./docs/Grid.md)
- [Header](./docs/Header.md)
- [Heading](./docs/Heading.md)
- [CheckboxField](./docs/CheckboxField.md)
- [Link](./docs/Link.md)
- [Stack](./docs/Stack.md)
- [Tabs](./docs/Tabs.md)
- [Tag](./docs/Tag.md)
- [Text](./docs/Text.md)
- [TextField](./docs/TextField.md)
- [Tooltip](./docs/Tooltip.md)

if you want to extend these components, an example guide is [here](./docs/extendComponents.md).
if you want to contribute, read guide [here](./docs/contribution.md).

[spirit design system]: https://github.com/lmc-eu/spirit-design-system
