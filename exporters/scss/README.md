# Exporter Spirit SCSS

[Supernova][supernova-studio] SCSS exporter made for Spirit Design System developed by [LMC][lmc].

## Token operations

This exported does several operations with tokens:

- All token groups except [Typography](#typography) are processed using a simple generate function.
- The first step is sorting. Measures are sorted by number in the token name, Generic Tokens (Other) by value, and the rest by its name.
- Next, each token is grouped and its value is prepared to print. Grouping is made using actual groups in Supernova and if these are not present, a common name prefix is used. Separate token values are printed as separate SCSS variables.
- Groups are used for printing SCSS maps with references to separate tokens and pluralized names. Borders groups are skipped and colors have their group name suffixed. These maps are printed into SCSS.
- Shadows are grouped if same name.
- Gradients names are not used from Figma, but from Supernova.

### Typography

As typography in Figma and Supernova are stored in named text style groups, these groups are used to generate SCSS maps with all the values from Supernova. They are grouped by breakpoints.
⚠️ We do not generate `link` typography tokens (styles that include `-link` in their name).

### Sorting

Tokens are sorted alphabetically by origin (Figma) name or by name (Supernova). Except Measures - sorted by name number and Other - sorted by value.

## Outputs:

- \_borders.scss
- \_colors.scss
- \_gradients.scss
- \_measures.scss
- \_other.scss
- \_radii.scss
- \_shadows.scss
- \_typography.scss
- index.scss

The index file contains SCSS forwards of all other outputs.

[supernova-studio]: https://github.com/Supernova-Studio
[lmc]: https://github.com/lmc-eu
