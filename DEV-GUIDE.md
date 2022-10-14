# SPIRIT DS GUIDE FOR DEVELOPER

## Documentation

Before the actual implementation, it is advisable to prepare a file with documentation, where individual
properties of the component and parameters will be described.

## Tests

Before test must be built icon package, run `% yarn build` in `packages/icons/package.json`.
In local development you need to run test in each package.

### Web

- `% cd <your-local-path>/spirit-design-system/packages/web`
- `% yarn test:unit`

### Web React

- `% cd <your-local-path>/spirit-design-system/packages/web-react`
- `% yarn test:unit`

## Commit

### Run before commit

1. Prettier `% yarn format:fix`
2. Types `% yarn types`
3. Lint `% yarn lint`
4. Test in each package

### Commit message

Message of commit must contain specific phrases, like `<type>(<package>): <commit-message> #<issue-id>` eg.`Feat(web-react): React Modal implementation #DS-331`

## Development

Each package has different development steps, so:

1. Web `% yarn start` runs development server
2. Web React `% yarn storybook` runs Storybook development server

### Twig

1. Wrapper for twig component
2. Component properties
3. Documentation
4. Imports

### Web

1. Component root

- Scripts
  - main `packages/web/src/js/<component_name>.ts`
  - constants `packages/web/src/js/constants.ts`
- Styles
  - main `packages/web/src/scss/components/<component_name>/_<component_name>.scss`
  - preview `packages/web/src/scss/components/<component_name>/index.html`

2. Documentation `packages/web/src/scss/components/<component_name>/README.md`
3. Tests `packages/web/src/js/__tests__/<component_name>.test.ts`

### React

1. Component root

- structure `packages/web-react/src/components/<component_name>/*`
- types `packages/web-react/src/types/<component_name>.ts`
- hooks
  - Styles `packages/web-react/src/components/<component_name>/use<component_name>StyleProps.ts`
  - Other hooks are optional, depends on use case

2. Documentation `packages/web-react/src/components/<component_name>/README.md`
3. Tests `packages/web-react/src/components/<component_name>/__tests__/<component_name>.test.tsx`
4. Import `packages/web-react/src/components/index.ts`
5. Entry point `packages/web-react/scripts/entryPoints.js`
6. Storybook `packages/web-react/src/components/<component_name>/<component_name>.stories.tsx`
