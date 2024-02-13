# GitHub Actions

Date: 2024-01-26

Status: proposed

## Context

Deploying serious web applications to production regularly requires automation.
Running testing, linting, and a build before deployment is an accepted practice to ensure a quality product is deployed.

Alongside this, we want to run this automation any time code is merged (or will soon be merged) from contributors to the project.
This is called "Continuous Integration" and is necessary for teams to move confidently and focus on their value proposition.
Make the robots do the boring stuff so we can focus on the creative work.

We can run this automation on our machines during development, but it can be easy to forget to do this.
It's even harder to be confident the automation was run when you are trying to combine the work of multiple people (who's responsible for running the deploy script?).
So it's best to have this automation run on a separate machine that's dedicated to this task.

I don't want to have that machine running in my closet, so instead we need to look to outside services for managing this for us.
There are many such services.
Most of the target audience of the Spirit Design System are familiar with GitHub and many use it already for other projects.
The vast majority already have accounts on GitHub as well.

GitHub has a CI service called [GitHub Actions](https://docs.github.com/en/actions) which satisfies all the necessary use cases for the Spirit Design System.
It does not require an additional account, though it does necessitate you to use GitHub for hosting the code.
Also, it is free for open-source projects but paid for private projects.

## Decision

We've decided to use GitHub Actions for Continuous Integration in the Spirit Design System.
We have a single action that handles running linting, type checking, tests, and another for deployment to both staging (preview branches) and production (`main` branch).

## Consequences

This means users of the Spirit Design System can monitor its quality publicly without the need to have their account.
They can also alert if any integration is badly done or dysfunctional.
