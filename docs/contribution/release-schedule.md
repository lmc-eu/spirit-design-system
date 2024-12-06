# Spirit Design System Release Schedule

This is a living document outlining the plan for previous, current, and future
major versions of the Spirit Design System.

| Release      | Status      | Initial release | Begin Active | Begin Maintenance | End of Life |
| ------------ | ----------- | --------------- | ------------ | ----------------- | ----------- |
| `main`       | unstable    | unstable        | unstable     | unstable          | unstable    |
| v0           | End of Life | 2021-09-20      | 2021-09-20   | 2023-07-21        | 2024-06-10  |
| v1 🌟 Aura   | End of Life | 2023-07-21      | 2023-07-21   | 2024-06-10        | 2024-10-17  |
| v2 🍃 Breeze | Maintenance | 2024-06-10      | 2024-06-10   | 2024-11-25        | -/-         |
| v3 ✨ Charm  | Active      | 2024-10-17      | 2024-11-25   | -/-               | -/-         |
| v4 🌈 Divine | Unreleased  | -/-             | -/-          | -/-               | -/-         |

> Dates are subject to change

![schedule][release-schedule-static]

```
      Jul 2023   Jun 2024                Oct 2024             Nov 2024             Dec 2024
     +---------------------------------------------------------------------------------------------+
main | ## Unstable ############################################################################### |
     +---------------------------------------------------------------------------------------------+
v1   | ## Active ## / ## Maintenance ########################### /                                 |
     +---------------------------------------------------------------------------------------------+
v2   |              / ## Active ################################ / ## Maintenance ################ |
     +---------------------------------------------------------------------------------------------+
v3   |                                     / ## Prerelease ##### / ## Active ##################### |
     +---------------------------------------------------------------------------------------------+
v4   |                                                                                             |
     +---------------------------------------------------------------------------------------------+
```

## Next Major Release Plans

👉 See [Releases in Jira Board][release-jira-board].

## Release Phases

### Prerelease

The prerelease phase is intended to be the opportunity for early adopters,
library authors, and other strategic ecosystem partners to begin to evaluate and
integrate new changes into their codebases. For v3, this phase was more than a one month
long and spanned five prerelease/alpha releases. We hope to extend this timeframe
even further for our next major.

### Active

Consuming projects should always aim to follow the Active release.

A release in the Active phase receives biweekly minor releases containing new
features and fixes. The work we deliver into `main` every day is considered
unstable. Almost every two weeks we package up these changes into a new minor version
that is published from `main` to the current Active major.

### Maintenance

For a release in the Maintenance phase, patch releases are published containing
security patches and critical bug fixes. When a version moves from Active to
Maintenance, consuming projects should begin migrating to the new Active major
version. During Maintenance we also consider adding non-critical bug fixes on an
ad hoc basis, by request only. To request a fix be back-ported to a Maintenance
release, please
[open an issue][spirit-jira-board] or let us know in [support Slack channel][spirit-support-slack-channel].

Changes required for critical security and bug fixes may lead to semver-major
changes landing within a release stream, such situations will be rare and will
land as semver-minor. Although, those changes should have a revert option
included.

## Release Cycle Duration

There is no fixed release lifetime yet.
However, based on our experience to date, we estimate the length of the **active phase** to be **between six months and a year**.
We anticipate that this life phase will be extended.

## Assets Managed Under This Release Schedule

This plan covers the design and development assets under maintenance of the
Spirit Design System core team. This includes the `@lmc-eu/spirit-web`, `@lmc-eu/spirit-web-react` and
`@lmc-eu/spirit-design-tokens` packages, as well as all other packages within the
[`spirit` monorepo][spirit-github-monorepo].

This plan also includes all design guidance and design kit assets (figma, etc.)
present in the
[`spirit-docs-website`][spirit-docs] and
[`spirit-ui-kit`][spirit-figma]
repositories.

## Acknowledgements

This document was heavily inspired by the work of the
[NodeJS Release Working Group][node-js-release-working-group] and [Carbon Design System Release Schedule][carbon-release-schedule].

[carbon-release-schedule]: https://github.com/carbon-design-system/carbon/blob/main/docs/release-schedule.md
[node-js-release-working-group]: https://github.com/nodejs/release
[release-jira-board]: https://jira.almacareer.tech/projects/DS?selectedItem=com.atlassian.jira.jira-projects-plugin%3Arelease-page&status=released-unreleased
[release-schedule-static]: ../../static/release-schedule.svg
[spirit-docs]: https://spirit.design
[spirit-figma]: https://www.figma.com/design/w9Ca4hvkuYLshsrHu1bYwT/Spirit-UI-KIT?node-id=22776-26259&node-type=canvas&t=JIF1i6Yfp9rGUA35-0
[spirit-github-monorepo]: https://github.com/lmc-eu/spirit-design-system
[spirit-jira-board]: https://jira.almacareer.tech/secure/RapidBoard.jspa?rapidView=366&projectKey=DS
[spirit-support-slack-channel]: https://almamedia.slack.com/archives/C068XPSDWQN
