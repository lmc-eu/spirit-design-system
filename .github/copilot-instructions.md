---
applyTo: '**'
---

# Spirit Design System - AI Instructions for GitHub Copilot

## Project Overview

Spirit Design System is an open-source design system developed by Alma Career (formerly LMC). It's a comprehensive monorepo containing React components, vanilla JS/CSS implementations, design tokens, icons, and tooling.

## Architecture & Technologies

### Core Technologies

- **TypeScript** - Primary language for all JavaScript/React code
- **React 19+** - Component library implementation with Next.js support
- **SCSS/Sass** - Styling with design token integration
- **Node.js 20+** - Build tooling and development environment
- **Lerna** - Monorepo management and publishing (legacy; being phased out in favor of Nx)
- **Yarn Workspaces** - Dependency management
- **Nx** - Build system and task orchestration (new standard for builds and task running)

### Package Structure

```
packages/
├── analytics/          # Analytics tools for design system adoption
├── codemods/           # Migration transforms between versions
├── common/             # Shared build scripts and utilities
├── design-tokens/      # Design tokens (SCSS/JS/TS)
├── icons/              # SVG and React icon library
├── web/                # Vanilla CSS/JS implementation
└── web-react/          # React components library
```

## Design System Principles

### Component Naming & Organization

- **BEM/SUIT CSS methodology** for CSS classes (`.Component`, `.Component--modifier`, `.Component__element`)
- **PascalCase** for React components (`Button`, `CardHeader`, `NavigationLink`)
- **Atomic design** structure (atoms, molecules, organisms)
- **Semantic versioning** with careful breaking change management

### Styling Architecture

- **Design tokens** drive all styling decisions
- **CSS Custom Properties** for theme switching
- **Utility classes** for spacing, typography, colors
- **Component-scoped styles** with consistent naming
- **Responsive design** with mobile-first approach

### TypeScript Patterns

- **Strict type safety** with comprehensive interfaces
- **Generic components** with proper constraint typing
- **Design token-generated types** for consistency
- **Prop spreading** with transfer props pattern
- **Style props** integration for consistent styling API

## Component Development Guidelines

### React Component Structure

```typescript
// types.ts
// Component props interface
export interface ButtonProps {
  color?: ButtonColorType;
  size?: SizeType;
  isDisabled?: boolean;
  // ... other props
}

// Main component interface with style props
export interface SpiritButtonProps<T extends ElementType = 'button'>
  extends ButtonProps,
    SpiritPolymorphicElementProps<T, ButtonProps>,
    StyleProps,
    TransferProps {}

// Button.tsx
// Component implementation
const Button = <T extends ElementType = 'button'>(props: SpiritButtonProps<T>) => {
  const {
    elementType: ElementTag = 'button',
    color = 'primary',
    size = 'medium',
    children,
    ...restProps
  } = props;

  const buttonProps = useButtonStyleProps(props);

  return (
    <ElementTag {...buttonProps}>
      {children}
    </ElementTag>
  );
};

Button.spiritComponent = 'Button';
export default Button;
```

### Style Props Pattern

```typescript
// useButtonStyleProps.ts
// Use style props hooks for consistent styling
const useButtonStyleProps = (props: SpiritButtonProps) => {
  const { styleProps, props: otherProps } = useStyleProps(props);

  const buttonClass = useClassNamePrefix('Button');
  const buttonBlockClass = `${buttonClass}--block`;
  const buttonDisabledClass = `${buttonClass}--disabled`;
  const buttonLoadingClass = `${buttonClass}--loading`;
  const buttonSymmetricalClass = `${buttonClass}--symmetrical`;

  const classProps = classNames(
    buttonClass,
    getButtonColorClassname(buttonClass, color as ButtonColor<C>),
    getButtonSizeClassname(buttonClass, size as ButtonSize<S>),
    {
      [buttonBlockClass]: isBlock && !isSymmetrical,
      [buttonDisabledClass]: isDisabled || isLoading,
      [buttonLoadingClass]: isLoading,
      [buttonSymmetricalClass]: isSymmetrical && !isBlock,
    },
  );

  return {
    ...otherProps,
    ...transferProps(otherProps),
    ...styleProps,
    ...buttonStyleProps,
  };
};
```

### SCSS Component Structure

```scss
// Component file: Button/_Button.scss
@use 'sass:map';
@use '@tokens' as tokens;
@use '../../tools/spacing';
@use '../../tools/typography';

.Button {
  // Base styles using design tokens
  @include typography.generate-font-classes(tokens.$body-medium-medium);

  padding: tokens.$space-300 tokens.$space-400;
  border-radius: tokens.$radius-300;
  border: tokens.$border-width-100 solid transparent;

  // State modifiers
  @media (hover: hover) {
    &:hover {
      // Hover styles
    }
  }

  &:focus-visible {
    // Focus styles
  }

  &:disabled {
    // Disabled styles
  }
}
```

## Testing Guidelines

### Component Testing

- **Unit tests** for component logic and props handling
- **Snapshot tests** for component rendering
- **Accessibility tests** using jest-axe
- **Visual regression tests** with Playwright
- **Interaction tests** for user behaviors

### Test Structure

```typescript
import { render, screen } from '@testing-library/react';
import { Button } from '../Button';

describe('Button', () => {
  it('should render with default props', () => {
    render(<Button>Click me</Button>);

    const button = screen.getByRole('button', { name: 'Click me' });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('Button');
  });

  it('should apply correct size class', () => {
    render(<Button size="small">Small button</Button>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('Button--small');
  });
});
```

## File Organization Patterns

### Web Component Directory Structure

```
Component/
├── _Component.scss        # Main component styles
├── _theme.scss            # Component theme
├── index.html             # Component demo
├── index.scss             # Public exports
└── README.md              # Component documentation
```

### Web React Component Directory Structure

```
Component/
├── index.ts                 # Public exports
├── Component.tsx           # Main component
├── demo/                   # Demo component examples
│   ├── index.tsx           # Export demo components
│   ├── ComponentDefault.tsx    # Default demo
│   └── ComponentDisabled.tsx   # Disabled state demo
├── stories                 # Public stories
│   ├── index.tsx           # Storybook stories
│   └── Component.stories.tsx    # Example demo component
├── __tests__/
│   ├── Component.test.tsx  # Unit tests
│   └── Component.test.tsx.snap # Snapshots
├── useComponentStyleProps.ts # Style props hook
├── constants.ts            # Component constants
├── types.ts                # Component types
└── README.md              # Component documentation
```

### Package Exports

```typescript
// Always use 'use client' directive for React components
'use client';

// Export pattern for components
export { default as Button } from './Button';
export { default as ButtonGroup } from './ButtonGroup';
export * from './useButtonStyleProps';
export * from './constants';

// Re-export types
export type { ButtonProps, SpiritButtonProps } from './types';
```

## Development Workflow

### Branch Naming

- `feature/DS-123-add-new-button-variant`
- `fix/DS-456-button-accessibility-issue`
- `docs/DS-789-update-component-documentation`

### Commit Messages

Follow conventional commits with Spirit-specific scopes:

```
feat(web-react): add new Button variant for destructive actions
fix(design-tokens): update primary color token values
docs(web): add accessibility guidelines to README
```

### Code Generation Patterns

When generating new components:

1. **Start with the web package**

- **Create the main component directory** with necessary files
- **Add SCSS files** with design token references
- **Create demo HTML files** for visual testing
- **Add README.md** with component documentation

2. **Move to the web-react package**

- **Create the main component file** with proper TypeScript interfaces
- **Add style props hook** for consistent styling API
- **Create SCSS file** with design token integration
- **Add comprehensive tests** including accessibility
- **Create Storybook stories** for documentation
- **Update component exports** in index.ts files
- **Add README.md** with component documentation

## Migration & Compatibility

### Breaking Changes

- Provide **codemods** for breaking changes where possible
- Update **MIGRATION.md** with upgrade paths
- Use **deprecation warnings** before removal
- Maintain **LTS versions** with security patches

### Backward Compatibility

- Use **feature flags** for experimental features
- Provide **escape hatches** (UNSAFE_className, UNSAFE_style)
- Maintain **consistent APIs** across versions
- Support **multiple React versions** when possible

## Build & Release

### Build Process

- **Design tokens** must be built first
- **CSS compilation** with Sass and PostCSS
- **TypeScript compilation** for multiple module formats
- **Bundle analysis** for size optimization
- **Type checking** across all packages

### Release Strategy

- **Semantic versioning** with automated changelog
- **Coordinated releases** across all packages
- **Pre-release testing** in staging environments
- **Documentation updates** with each release

## AI Assistant Guidelines

### When Suggesting Code

1. **Always use TypeScript** with proper typing
2. **Include design token references** in styles
3. **Follow component naming conventions** consistently
4. **Add proper accessibility attributes** (ARIA, roles)
5. **Include error handling** and prop validation
6. **Consider responsive design** implications
7. **Reference existing patterns** from similar components
8. **Include relevant imports** and exports
9. **Add JSDoc comments** for complex logic
10. **Consider performance implications** of implementations

### When Creating Components

1. **Start with the coding component** using HTML and SCSS
2. **Continue with the interface design** and prop definitions
3. **Use existing components as reference** for patterns
4. **Implement proper polymorphic behavior** when needed
5. **Add comprehensive TypeScript types** including generics
6. **Include style props integration** for consistency
7. **Consider theme compatibility** across default/on brand themes
8. **Add proper forwarding** of refs and event handlers
9. **Include loading and error states** when applicable

### Code Quality Standards

- **Prefer functional components** with hooks
- **Use descriptive variable names** following conventions
- **Keep functions small** and single-purpose
- **Avoid inline styles** in favor of CSS classes
- **Use design tokens** instead of hardcoded values
- **Include comprehensive error boundaries** where needed
- **Optimize for tree-shaking** and bundle size
- **Follow accessibility best practices** (WCAG 2.1 AA)
