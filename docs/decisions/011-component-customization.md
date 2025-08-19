# Component Customization

Date: 2025-08-19

Status: accepted

## Context

While the design tokens are intended to define visual and interaction settings,
component API can be designed to allow customization of many kinds, including
the visual properties. This may be confusing during the design process of a
component. So how do you reliably know which approach you need?

## Decision

Ask the following questions:

1. **Do I want to enable developers to change the particular visual setting per
   component instance?**
   If yes, a prop is needed.

2. **Do I want to enable designers to change the particular visual setting for
   all component instances in the product?**
   If yes, a component-specific design token is needed.

3. **Is any customization expected in the near future?**
   If not, do not create any prop or component-specific design token just
   because "what if …". The design system maintainers (maybe your future self?)
   will say thank you.

## Consequences

As a result, the design system maintainers will be able to make a decision on
whether to create a prop or a component-specific design token.
