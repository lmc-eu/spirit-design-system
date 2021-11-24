Twig components bundle
=================

this bundle extends the twig implementation with an JSX syntax-like approach from React


## Changelog
See CHANGELOG.md.

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