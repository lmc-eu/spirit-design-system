# Spirit Web Twig Bundle

This is a Symfony bundle with Twig implementation of [Spirit Design System] components, extended with JSX-like syntax.

## Requirements

- PHP >= 8.1
- Symfony 4.4+ || 5.4+ || ^6.1
- Twig >=2.12.5 || 3+

## Changelog

See [CHANGELOG][changelog]

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

For detailed usage see [TwigX bundle][twigx-bundle]

### Unescaped Props

All props that internally uses the [raw][raw] filter are prefixed with `UNSAFE_`.
This is considered a way how you can pass down HTML strings.

```twig
<Checkbox UNSAFE_helperText="<strong>Help!</strong>" />
```

# Spirit Components

For available components see the [components directory][components-directory].

if you want to extend these components, an example guide is [here][example-guide].
if you want to contribute, read the guide [here][contributing].

## Additional Attributes

All components accept additional attributes that are passed down to the root element of the component.
This is useful for adding custom event handlers, accessibility attributes, or other attributes that
are not supported by the component API.

ℹ️ If you need to pass down event handlers to the native form elements in our form components,
you can use the `inputProps` prop.

Supported attributes are:

- `on*` (eg. `onclick`)
- `data-*`
- `aria-*`
- `id`

If the component sets a value for any of these attributes, the value passed in will be overwritten.

## Styling

Spirit components are designed to be consistent across all Alma Career applications. They include built-in styling that has been
considered carefully, and extensively tested. In general, customizing Spirit design is discouraged, but most components
do offer control over layout and other aspects. In addition, you can use Spirit defined design tokens to ensure your
application conforms to your design requirements, and is adaptive across platform scales and color schemes.

### Style Props

All Spirit components accept a set of props that can be used to control their outer spacing. The props are:

- `margin`
- `marginTop`
- `marginRight`
- `marginBottom`
- `marginLeft`
- `marginX`
- `marginY`

These props accept a spacing token (eg. `space-100`), `auto` or an object with breakpoint keys and spacing token
values or `auto`. We use these props to set global CSS utility classes on the root element of the component.

Examples:

```twig
<Alert marginBottom="space-100" />

<Button marginX="{{ { mobile: 'space-100', tablet: 'space-200' } }}" />

<Button marginLeft="{{ { mobile: 'space-100', tablet: 'space-200', desktop: 'auto' } }}" />
```

If you need more control over the styling of a component, you can use [escape hatches](#escape-hatches).

### Escape Hatches

While we encourage teams to utilize Spirit design as it is, we do realize that sometimes product specific customizations
may be needed. In these cases, we encourage you or your designers to **talk to us**. We may be able to suggest
an alternative implementation strategy, or perhaps your design can help propose future Spirit additions.

While the traditional class and style props are not supported in Spirit Web Twig components, there are two escape
hatches that you can **use at your own risk**. These are UNSAFE_className and UNSAFE_style. Use of these props should be
considered **a last resort**. They can be used to work around bugs or limitations in Spirit Web Twig, but should
not be used in the long term.

The reasoning behind this is that future updates to Spirit design may cause unintended breaking changes in products.
If the internal DOM structure or CSS properties of a Spirit Web Twig component change, this may lead to conflicts
with CSS overrides in products. For this reason, className and style are unsafe, and if you use them know that you
are doing so at your own risk.

Please consult additional styling with [web package documentation][web-pkg-rebrand].

## Deprecations

This package uses the deprecation warnings for props, functions and components that will be removed or replaced in the next major release.
Check your Symfony console or log to see if you are using any of the deprecated functionality.

![Deprecations in Symfony's console](https://github.com/lmc-eu/spirit-design-system/blob/main/static/deprecations-symfony-console.png?raw=true)

[changelog]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/CHANGELOG.md
[components-directory]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/src/Resources/components
[contributing]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/CONTRIBUTING.md
[example-guide]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/docs/extendComponents.md
[raw]: https://twig.symfony.com/doc/3.x/filters/raw.html
[spirit design system]: https://github.com/lmc-eu/spirit-design-system
[twigx-bundle]: https://github.com/lmc-eu/twigx-bundle/blob/main/README.md#usage
[web-pkg-rebrand]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web#rebranding
