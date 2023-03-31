# Spirit Web Twig Bundle

This is a Symfony bundle with Twig implementation of [Spirit Design System] components, extended with JSX-like syntax.

## Requirements

- PHP 7.4 || 8.1
- Symfony 4.4+ || 5.4+ || ^6.1
- Twig >=1.44.6 || >=2.12.5 || 3+

## Changelog

See [CHANGELOG](./CHANGELOG.md)

## How to install

### Step 1

Download using **composer**

Install package

```bash
composer require lmc/spirit-web-twig-bundle
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
  # define one or more paths to expand or overload components (uses glob patterns)
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

For detailed usage see [TwigX bundle](https://github.com/lmc-eu/twigx-bundle/blob/main/README.md#usage)

### Unescaped Props

All props that internally uses the [raw](https://twig.symfony.com/doc/3.x/filters/raw.html) filter are prefixed with `UNSAFE_`.
This is considered a way how you can pass down HTML strings.

```twig
<CheckboxField UNSAFE_helperText="<strong>Help!</strong>" />
```

# Spirit Components

For available components see the [components directory](https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/src/Resources/components).

if you want to extend these components, an example guide is [here](./docs/extendComponents.md).
if you want to contribute, read the guide [here](./CONTRIBUTING.md).

## Deprecations

This package uses the deprecation warnings for props, functions and components that will be removed or replaced in the next major release.
Check your Symfony console or log to see if you are using any of the deprecated functionality.

![Deprecations in Symfony's console](https://github.com/lmc-eu/spirit-design-system/blob/main/static/deprecations-symfony-console.png?raw=true)

[spirit design system]: https://github.com/lmc-eu/spirit-design-system
