# Workspace Dependencies Resolution

Resolves `workspace:` protocol dependencies in package.json files to actual version numbers.

## Purpose

When using Yarn workspaces with the `workspace:` protocol and publishing packages from a `dist` directory (via `publishConfig.directory`), the workspace references need to be resolved to actual version numbers before publishing.

## Usage

### As a yarn workspace command (recommended)

```bash
yarn workspace @alma-oss/spirit-workspace-deps resolve <absolute-path-to-package.json>
```

Example from a package build script:

```bash
yarn workspace @alma-oss/spirit-workspace-deps resolve $PWD/dist/package.json
```

### Direct execution

From the monorepo root:

```bash
tsx scripts/workspace-deps/resolve.ts <path-to-package.json>
```

## How it works

1. Reads the specified package.json file (typically in a dist directory)
2. Scans the monorepo for all workspace packages
3. Replaces `workspace:` protocol references with actual version numbers from the workspace packages
4. Writes the resolved package.json back to disk

## Example

Input package.json:

```json
{
  "dependencies": {
    "@alma-oss/spirit-design-tokens": "workspace:^"
  }
}
```

Output package.json:

```json
{
  "dependencies": {
    "@alma-oss/spirit-design-tokens": "^4.0.0"
  }
}
```

## Integration

This script is integrated into the build process of packages that use `publishConfig.directory`:

- `packages/web`
- `packages/web-react`
- `packages/icons`
- `packages/analytics`
- `packages/codemods`

Each package calls this script after copying package.json to the dist directory but before the build completes.

## Technical Details

- Written in TypeScript with ESM syntax
- Executed via `tsx` (TypeScript execute)
- Automatically finds the monorepo root by locating `lerna.json`
- Caches package versions for performance
- Supports all dependency types: dependencies, devDependencies, peerDependencies, optionalDependencies
