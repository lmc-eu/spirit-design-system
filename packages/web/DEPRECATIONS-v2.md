# Deprecations List

Following deprecations will be removed in version 2 of the _spirit-web_ package.

> Please follow these steps to safely upgrade your design system to Spirit Design System v2 components.

[What are deprecations?][readme-deprecations]

## Deprecations

### Modal (Non)Scrollable

The `.ModalDialog--nonScrollable` modifier will be removed and the ModalDialog will be made non-scrollable by default.

#### Migration Guide

In the new version, use the `.ModalDialog--scrollable` modifier class to make the ModalDialog scrollable.

- `.ModalDialog` → `.ModalDialog .ModalDialog--scrollable`

[readme-deprecations]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md#deprecations
[readme-feature-flags]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md#feature-flags
[dictionary-placement]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#placement
