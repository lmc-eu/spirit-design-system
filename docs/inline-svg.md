# How to Use Inline SVG in Components

In some cases, you might want use SVG icons in components. It is Possible.
For these cases, we have prepared `SvgExtension` with function `inlineSvg`.

In the project where the bundle is used, it is necessary to set in the configuration:

**config/packages/spirit_web_twig.yml**

```yaml
    spirit_web_twig:
       ...
        icons: # optional settings for svg assets
          paths:
            - "%kernel.project_dir%/assets/icons" # define paths for svg icons set
          alias: 'jobs-icons' # default is 'icons-assets'
```

then it is possible to call in the component

```twig
{{ inlineSvg('@icons-assets/iconName.svg', { class: ..., title: ... }) }}
```

if the icon does not exist, an empty string is returned and messages are sent to the symfony error logger.
