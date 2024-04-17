# Node.js Version

Date: 2024-01-23

Status: accepted

## Context

Node.js has a regular release cycle which is documented in the [release schedule][node-releases].
At the time of this writing, there are 2 stable maintained releases: 18, and 20.
I will refer you to that documentation to understand how the release cycle works.

Deciding which version of Node.js to use for a project is a trade-off between using the latest features and stability.

The Spirit Design System is more focused on stably shipping its components than experimenting
with the latest features which is where the Active Long-Term Support (LTS) version shines.

We distribute our code as npm packages where we define minimal support Node.js engine.

## Decision

Use the current LTS version of Node.js as the default in every package.

Support the minimal Node.js version which is used by our adopters.

## Consequences

Folks should hopefully run into a few compatibility issues. They may need features that are not back-ported to the current active LTS version, however, it's trivial to update the Node.js version.

We'll need to update the Node.js version in the packages whenever the active LTS
version changes.

[node-releases]: https://nodejs.org/en/about/releases/

```

```
