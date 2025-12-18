#!/usr/bin/env tsx

/**
 * Resolves workspace: protocol dependencies in package.json files
 *
 * This script reads a package.json file (typically in a dist directory),
 * finds all dependencies using the workspace: protocol, and replaces them
 * with the actual version numbers from the workspace packages.
 *
 * Usage:
 *   tsx scripts/workspace-deps/resolve.ts <path-to-package.json>
 *
 * Example:
 *   tsx scripts/workspace-deps/resolve.ts ./dist/package.json
 */

import * as fs from 'fs';
import * as path from 'path';

interface PackageJson {
  name?: string;
  version?: string;
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
  optionalDependencies?: Record<string, string>;
}

/**
 * Get the package.json path from command line arguments
 */
const packageJsonPath = process.argv[2];

if (!packageJsonPath) {
  console.error('Error: Please provide a path to package.json');
  console.error('Usage: tsx scripts/workspace-deps/resolve.ts <path-to-package.json>');
  process.exit(1);
}

const absolutePackageJsonPath = path.resolve(process.cwd(), packageJsonPath);

if (!fs.existsSync(absolutePackageJsonPath)) {
  console.error(`Error: File not found: ${absolutePackageJsonPath}`);
  process.exit(1);
}

/**
 * Read the target package.json
 */
const packageJson: PackageJson = JSON.parse(fs.readFileSync(absolutePackageJsonPath, 'utf8'));

/**
 * Find the monorepo root (where the root package.json with workspaces is)
 */
let monorepoRoot = path.dirname(absolutePackageJsonPath);
while (!fs.existsSync(path.join(monorepoRoot, 'lerna.json')) && monorepoRoot !== '/') {
  monorepoRoot = path.dirname(monorepoRoot);
}

if (monorepoRoot === '/') {
  console.error('Error: Could not find monorepo root (no lerna.json found)');
  process.exit(1);
}

/**
 * Cache for package versions
 */
const versionCache = new Map<string, string>();

/**
 * Get the version of a workspace package
 * @param packageName - The name of the package (e.g., '@alma-oss/spirit-design-tokens')
 * @returns The version number or null if not found
 */
function getWorkspacePackageVersion(packageName: string): string | null {
  if (versionCache.has(packageName)) {
    return versionCache.get(packageName)!;
  }

  // Try to find the package in the workspace
  const workspaceDirs = ['packages', 'configs', 'apps', 'examples', 'exporters', 'scripts'];

  for (const workspaceDir of workspaceDirs) {
    const workspacePath = path.join(monorepoRoot, workspaceDir);

    if (!fs.existsSync(workspacePath)) {
      continue;
    }

    const dirs = fs
      .readdirSync(workspacePath, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);

    for (const dir of dirs) {
      const pkgPath = path.join(workspacePath, dir, 'package.json');

      if (fs.existsSync(pkgPath)) {
        try {
          const pkg: PackageJson = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
          if (pkg.name === packageName && pkg.version) {
            versionCache.set(packageName, pkg.version);
            return pkg.version;
          }
        } catch (error) {
          // Skip invalid package.json files
          continue;
        }
      }
    }
  }

  return null;
}

/**
 * Resolve workspace dependencies in a dependencies object
 * @param deps - Dependencies object from package.json
 * @param depType - Type of dependencies (for logging)
 * @returns Resolved dependencies object
 */
function resolveWorkspaceDeps(
  deps: Record<string, string> | undefined,
  depType: string,
): Record<string, string> | undefined {
  if (!deps) {
    return deps;
  }

  const resolved = { ...deps };
  let changesMade = false;

  for (const [packageName, versionSpec] of Object.entries(deps)) {
    if (versionSpec.startsWith('workspace:')) {
      const version = getWorkspacePackageVersion(packageName);

      if (version) {
        const protocol = versionSpec.replace('workspace:', '');
        const resolvedVersion = protocol === '*' ? version : `${protocol}${version}`;
        resolved[packageName] = resolvedVersion;
        changesMade = true;
        console.log(`  ${depType}: ${packageName}: ${versionSpec} → ${resolvedVersion}`);
      } else {
        console.warn(`  Warning: Could not find version for workspace package: ${packageName}`);
      }
    }
  }

  return changesMade ? resolved : deps;
}

/**
 * Main execution
 */
console.log(`Resolving workspace dependencies in: ${absolutePackageJsonPath}`);

const originalJson = JSON.stringify(packageJson);

packageJson.dependencies = resolveWorkspaceDeps(packageJson.dependencies, 'dependencies');
packageJson.devDependencies = resolveWorkspaceDeps(packageJson.devDependencies, 'devDependencies');
packageJson.peerDependencies = resolveWorkspaceDeps(packageJson.peerDependencies, 'peerDependencies');
packageJson.optionalDependencies = resolveWorkspaceDeps(packageJson.optionalDependencies, 'optionalDependencies');

// Write back if changes were made
const newJson = JSON.stringify(packageJson);

if (originalJson !== newJson) {
  fs.writeFileSync(absolutePackageJsonPath, JSON.stringify(packageJson, null, 2) + '\n', 'utf8');
  console.log('✓ Workspace dependencies resolved successfully');
} else {
  console.log('✓ No workspace dependencies to resolve');
}
