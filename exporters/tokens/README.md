# Spirit Tokens Exporter

The Spirit Tokens Exporter is a custom exporter for the Spirit Design System, developed by [Alma Career (formerly LMC)][alma-career],
to generate SCSS and JavaScript variables and maps for use in your projects.
Built for seamless integration with [Supernova][supernova-studio], the exporter processes design tokens extracted from Figma through Supernova,
transforming them into a structured set of reusable styles.

The exporter performs the following operations to ensure an efficient and organized token structure:

- generates a list of styles and structured styles objects from a list of tokens, supporting both CSS and JavaScript outputs,
  with tailored handling for specific token types,
- creates a hierarchical styles object by processing token name parts and categorizing tokens into typography or non-typography types,
- processes typography tokens, organizing them into style objects by breakpoints and name structure,
- processes non-typography tokens and organizes them into the styles object,
- processes theme tokens, generating SCSS maps with color values and CSS variables for each theme,
- generates a SCSS files with CSS values/variables and a JS files with values and styles objects.

## Exported Tokens

The exporter generates two main types of token outputs: Global Tokens and Theme Tokens.

### Global Tokens

Global tokens include all non-theme-related tokens from Supernova, grouped by type and exported as SCSS maps.

#### Outputs

- \_borders.scss - Contains border width values
- \_gradients.scss - Contains gradient values
- \_other.scss - Contains values which do not fit into other categories
- \_radii.scss - Contains border radius values
- \_shadows.scss - Contains shadow values
- \_spacing.scss - Contains spacing values
- \_typography.scss - Contains typography values
- index.scss

The index file contains SCSS forwards of all other outputs.

### Theme Tokens

Theme tokens include all theme-specific tokens (currently limited to color tokens) from Supernova.
The exporter creates a dedicated directory for each theme, containing SCSS maps and CSS variables grouped by color categories.

#### Outputs

- \_color-tokens.scss - Contains color css variables for each color and mapping to color groups
- index.scss

For each theme, the exporter generates the following files:

- \\{theme_name}\\\_colors.scss - Contains color values and mapping to css variables
- \\{theme_name}\\index.scss

The index files contains SCSS forwards of all other outputs.

## Sorting

Tokens are sorted alphabetically by their origin name (Figma) or their Supernova name.
Exceptions include Borders, Radii, Spacing, and Other tokens, which are sorted numerically by their value.

## Development

To generate the original unformatted data from Supernova, enable the `generateOriginalDataFiles` option in the `config.local.json` file.
Once activated, the original data will be generated alongside other outputs and stored in the `original-data` folder.

- \_original-tokens.json
- \_original-groups.json

## Naming Rules for Themes

For the proper functionality of themes in the Spirit Tokens Exporter in Supernova, all theme names must adhere to specific conventions.
Themes names are imported to Supernova from Figma, and designers are responsible for following these naming rules to ensure the correct
export of design tokens.

- Spaces are not allowed in theme names, as they disrupt the structure of the generated CSS (SCSS), which relies on precise syntax.
- We recommend using a kebab-case naming format such as `theme-light-default` to ensure consistency and compatibility.

Adhering to these guidelines helps maintain the integrity of the exported files, ensuring they operate smoothly and without errors.

## Handling Invariant and Special Cases

The exporter handles specific exceptions to the general logic of token processing to ensure consistency and correctness:

### Special Cases

- Gradient tokens: CSS variables are added for gradients, allowing for theme-based color customization and gradient angle adjustments. The original gradient values serve as fallbacks for these CSS variables.
- Color tokens with multiple references – When processing color tokens containing multiple color references (e.g., gradients with multiple stops), the exporter automatically generates numbered CSS variables for each color.
  These variables follow the pattern `--{tokenPrefix}color-{groupName}-{name}-color-XX`, where `XX` is an incremented counter for each color reference in the token. This ensures that all color components of a token remain
  customizable while maintaining a clear and structured naming convention. Additionally, occurrences of `0px` are normalized to `0` for consistency.
- Typography tokens with Underline – Typography tokens that include `-Underline` in their name are intentionally excluded from processing. This ensures that these tokens do not interfere with standard typography styling
  and are not mistakenly included in style mappings.
- `breakpoint-mobile` token: This token is assigned a fixed value of `0`, deviating from standard processing rules. This ensures compatibility with predefined requirements and reflects its role in responsive design settings.

### Invariant Token Aliases

Tokens with a numeric part or specific predefined names are adjusted to follow a consistent naming convention. Currently, the exporter manages the following invariant aliases:

- `radius-full` is transformed into `full`. This logic ensures uniformity in token naming and usage across projects.

The configuration for these invariant aliases is defined in the `src/config/invariantTokensAliasConfig.ts` file. This allows easy customization and extension if needed.

These exceptions are carefully managed to prevent errors and provide a reliable token structure.

[supernova-studio]: https://github.com/Supernova-Studio
[alma-career]: https://github.com/lmc-eu
