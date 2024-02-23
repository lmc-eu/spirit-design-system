# Alert

Variants:

```html
<div class="Alert Alert--success mb-600" role="alert">
  <svg width="24" height="24">
    <use xlink:href="/icons/svg/sprite.svg#info" />
  </svg>
  <div>We sent you an activation link to email <strong>spirit@lmc.eu</strong>.</div>
</div>

<div class="Alert Alert--informative mb-600" role="alert">
  <svg width="24" height="24">
    <use xlink:href="/icons/svg/sprite.svg#info" />
  </svg>
  <div>
    Data update failed due to missing internet connection Data update failed due to missing internet connection Data
    update failed due to missing internet connection Data update failed due to missing internet connection Data update
    failed due to missing internet connection Data update failed due to missing internet connection
  </div>
</div>

<div class="Alert Alert--warning mb-600" role="alert">
  <svg width="24" height="24">
    <use xlink:href="/icons/svg/sprite.svg#warning" />
  </svg>
  <div><strong>Warning!</strong> Data update failed due to missing internet connection</div>
</div>

<div class="Alert Alert--danger mb-600" role="alert">
  <svg width="24" height="24">
    <use xlink:href="/icons/svg/sprite.svg#close" />
  </svg>
  <div>Data update failed due to missing internet connection</div>
</div>

<div class="Alert Alert--success Alert--center mb-600" role="alert">
  <svg width="24" height="24">
    <use xlink:href="/icons/svg/sprite.svg#info" />
  </svg>
  <div>We sent you an activation link to email <strong>spirit@lmc.eu</strong>.</div>
</div>

<div class="Alert Alert--informative Alert--center" role="alert">
  <svg width="24" height="24">
    <use xlink:href="/icons/svg/sprite.svg#info" />
  </svg>
  <div>
    Data update failed due to missing internet connection Data update failed due to missing internet connection Data
    update failed due to missing internet connection Data update failed due to missing internet connection Data update
    failed due to missing internet connection Data update failed due to missing internet connection
  </div>
</div>

<div class="Alert Alert--warning Alert--center mb-600" role="alert">
  <svg width="24" height="24">
    <use xlink:href="/icons/svg/sprite.svg#warning" />
  </svg>
  <div><strong>Warning!</strong> Data update failed due to missing internet connection</div>
</div>

<div class="Alert Alert--danger Alert--center mb-600" role="alert">
  <svg width="24" height="24">
    <use xlink:href="/icons/svg/sprite.svg#close" />
  </svg>
  <div>Data update failed due to missing internet connection</div>
</div>
```

## Feature Flag: Bordered Alert

The Alert border feature flag is not disabled by default. To enable it, either set the
`$alert-enable-bordered` Sass feature flag to `true` or use the `spirit-feature-alert-enable-bordered`
CSS class on any parent of the Alert.

For more info, see main [README][readme-feature-flags].

### ⚠️ DEPRECATION NOTICE

The Alert will be bordered by default in the next major release.

[What are deprecations?][readme-deprecations]

[readme-deprecations]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/README.md#deprecations
[readme-feature-flags]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/README.md#feature-flags
