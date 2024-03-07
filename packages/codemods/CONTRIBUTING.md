# Contributing

## Table of Contents

1. [Naming](#naming)
2. [File Structure](#file-structure)
3. [Testing](#testing)

## Naming

Codemods adhere to a clear and organized naming convention, following the kebab case format. The naming structure consists of two parts:

<component-name>: Represents the specific component or root component.
<purpose-of-codemod>: Describes the purpose or objective of the codemod.

This naming convention ensures consistency and ease of understanding, facilitating seamless integration and maintenance of codemods within the project.

### Example naming

```
<component-name>-<purpose-of-codemod>.ts
        |                 |
        |                 └─⫸ Codemod purpose
        |
        └─⫸ Component name
```

## File Structure

The file structure below outlines a standard organization for codemods within the project:

```
─── src
    └── transforms
        └── v2
            └── web-react
                └── __testfixtures__
                │   ├── <CodemodName>.input.tsx
                │   └── <CodemodName>.output.tsx
                └── __tests__
                │   └── <CodemodName>.test.ts
                └── <CodemodName>.ts
```

This structure enhances clarity and organization, making it easier to navigate and comprehend the components associated with each codemod. The separation of fixtures, tests, and the main codemod file contributes to a streamlined development and testing process.

## Testing

- `% cd <your-local-path>/spirit-design-system/packages/codemods`
- `% yarn test` for test package (lint, format, unit testing, types)
- `% yarn test:unit` for unit tests
