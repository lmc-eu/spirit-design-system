# Contributing

> Guide for Spirit Web React contributors.

## Adding New Component

Do not forget to export and register new component in all necessary places.

- `scripts/entryPoints.js`
- `src/components/index.ts`

## File Structure

This is an example of a typical file structure of a component:

```text
├── src
    └── components
        ├── index.ts — components root
        └── <ComponentName>
            ├── <ComponentName>.tsx — React component
            ├── index.ts — component's entry point
            ├── README.md — documentation of the component
            ├── use<ComponentName>.ts — main component's hook
            ├── use<ComponentName>AriaProps.ts — Aria component's hook
            ├── use<ComponentName>StyleProps.ts — styles and classes component's hook
            ├── <ComponentName>.stories.tsx — component's story
            └── __tests__
                ├── <ComponentName>.test.ts — component's test
                ├── use<ComponentName>.test.ts — component's hook test
                ├── use<ComponentName>AriaProps.test.ts — component's hook test
                └── use<ComponentName>StyleProps.test.ts — component's hook test
```

## Development with Storybook

- `% yarn storybook` starts development server with Storybook

## Testing

- `% cd <your-local-path>/spirit-design-system/packages/web-react`
- `% yarn test` for test package (lint, format, unit testing, types)
- `% yarn test:unit` for unit tests
