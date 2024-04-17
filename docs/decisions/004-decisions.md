# ADR (Architectural Decision Records)

Date: 2024-02-13

Status: accepted

## Context

As our design grows bigger and wider it is hard to remember and maintain all the principles we are building on.
So this decision is about creating a document that will contain all the principles and architectural decisions we are building on.

In the world of software engineering and software architecture, the Architectural Decision Records (ADR) are a way to capture the important architectural decisions made on a project. An architectural decision is a software design choice that addresses a functional or non-functional requirement that is architecturally significant.
In our case, we want to capture and document any principles or decisions that address architecturally significant requirements that are perceived as hard to make and/or costly to change.

## Decision

In the `decisions` directory, we will create a new file for each decision we make.
The file will contain the decision description based on the simplified template.

Any decision can be proposed, accepted, rejected, deprecated, superseded, or amended.

## Consequences

- We will have a single source of truth for all the architectural decisions.
- We can easily link decisions to the codebase, documentation, and other artifacts.
- Documentation of the decisions will require some additional time and effort we are willing to invest.
