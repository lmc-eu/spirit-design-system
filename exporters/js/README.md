# Exporter Spirit JS

[Supernova][supernova-studio] JS exporter made for Spirit Design System developed by [Alma Career (formerly LMC)][alma-career].

## Token operations

This exported does several operations with tokens:

- All token groups except [Typography](#typography) are processed using a simple generate function.
- The first step is sorting. Measures are sorted by number in the token name, Generic Tokens (Other) by value, and the rest by its name.
- Next, each token is grouped and its value is prepared to print. Grouping is made using actual groups in Supernova and if these are not present, a common name prefix is used. Separate token values are printed as separate variables.
- Groups are used for printing objects with references to separate tokens and pluralized names.
- Shadows are grouped if same name.
- If Gradient names start with `gradients/gradient`, they are not used from Figma, but from Supernova

### Typography

As typography in Figma and Supernova are stored in named text style groups, these groups are used to generate objects with all the values from Supernova. They are grouped by breakpoints.
⚠️ We do not generate `link` typography tokens (styles that include `-link` in their name).

#### Ebony Font Weight Exception

Font Family Ebony has a different font weight mapping in Figma and in Adobe Fonts. To match these we set its own font weight numeric-name conversion.

### Sorting

Tokens are sorted alphabetically by origin (Figma) name or by name (Supernova). Except Measures - sorted by name number and Other - sorted by value.

## Outputs:

- borders.ts
- colors.ts
- gradients.ts
- measures.ts
- other.ts
- radii.ts
- shadows.ts
- typography.ts
- index.ts

The index file contains exports from all other outputs.

[supernova-studio]: https://github.com/Supernova-Studio
[alma-career]: https://github.com/lmc-eu
