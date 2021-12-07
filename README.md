Spirit Web Twig Bundle
=================

This is Symfony bundle with twig implementation [Spirit Design System](https://github.com/lmc-eu/spirit-design-system) components and extends the twig implementation with an HTML syntax-like.

## Requirements
- PHP 7.4
- Symfony 4.2+ or Symfony 5.0+
- Twig 2+

## Changelog
See [CHANGELOG](./CHANGELOG.md)

## How to install

### Step 1

Download using *composer*

    "require": {
        "lmc/lmc/spirit-web-twig-bundle" : "~1.0.0"
    },
    "repositories": [
        {
            "type": "composer",
            "url": "http://jenkins-php.lmc/job/satis/ws/out/"
        }
    ]

### Step 2

Add `SpiritWebTwigBundle` into bundles (under `all` bundles). If you use Symfony flex, it will be configured automatically.

**bundles.php**

```php
    return [
        ...,
        Lmc\SpiritWebTwigBundle\SpiritWebTwigBundle::class => ['all' => true],
    ];
```

### Step 3

Configure parameters for this bundle.

**config.yml**
```yaml
    spirit_web_twig:
        path: "%kernel.project_dir%/templates/components"
        path_alias: 'ui-components'
```

## Usage
After this configuration it will be possible to use components in your symfony project syntax-like Html. The only rule compared to html is that tags start in capital letters.

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
isOpen  // if no value is defined, it is set to true
>
    Submit
</ComponentName>
```
