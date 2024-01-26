# Custom Design System

Date: 2022-10-04

Status: accepted

## Context

We have been working on a common design system since 2020.
Since then, we have been constantly discussing how to make sense of it.
Here are the arguments that we still see as important so far:

- A design system is much more than libraries of components.
  With a custom solution, we can create our architecture, workflows, design patterns and automation tailored to the needs of [Alma Career][alma-career] products.
- A dedicated team keeps the know-how in-house.
  They know and pass on how to build a quality database, how to share code and design across teams, how to write documentation, how to automatically manage styles, etc.
- We release new versions and patches when we need them.
- There is currently no design system that supports all the necessary technologies at once ([Sass][sass], [React][react], [Twig][twig]), so we would have to extend a ready-made one anyway
- We use the design system to set design boundaries and direction.
  We don't want the design system to support every possible feature (as opposed to [Material UI][mui]), but we do want it to set design boundaries while maintaining product consistency.

Another competitor in this field is [Bootstrap][bootstrap], which was hard to bend into a multi-brand architecture, so we built on it at first but then abandoned it.

## Decision

We build our design system to support the specific needs of the products of the Alma Career group.

## Consequences

- It is necessary to have a dedicated team for design systems.
- It is necessary to build the design system as a product with all the managing capacity and demands.
- It is necessary to keep the two-way communication of Spirit <--> product teams at a high level.
- A dedicated team can become a bottleneck and block rapid iterations in product teams.

[alma-career]: https://www.almacareer.com/
[bootstrap]: https://getbootstrap.com/
[mui]: https://mui.com/
[react]: https://react.dev/
[sass]: https://sass-lang.com/
[twig]: https://twig.symfony.com/
