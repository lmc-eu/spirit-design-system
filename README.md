Twig components bundle
=================

this bundle extends the twig implementation of embed with an HTML syntax-like. The only rule compared to html is that tags start in capital letters.


## Changelog
See [CHANGELOG](./CHANGELOG.md)

## How to install

### Step 1

Download using *composer*

    "require": {
        "lmc/twig-components-bundle" : "~1.0.0"
    },
    "repositories": [
        {
            "type": "composer",
            "url": "http://jenkins-php.lmc/job/satis/ws/out/"
        }
    ]

### Step 2

Add `TwigComponentsBundle` into bundles (under `all` bundles).  

**bundles.php**

```php
    return [
        ...,
        Lmc\TwigComponentsBundle\TwigComponentsBundle::class => ['all' => true],
    ];
```

### Step 3

Configure parameters for this bundle.

**config.yml**
```yaml
    twig_components:
        path: "%kernel.project_dir%/templates/components"
        path_alias: 'ui-components'
```

## Usage
after this configuration it will be possible to use components in your symfony project syntax-like Html

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

or pure original implementation

```twig
{% embed "@ui-components/component-name.twig" with { props: {
    attr: 'value'
}} %}
    {% block content %}
        Some other content
    {% endblock %}
{% endembed %}
```