# Postmortems

Date: 2024-02-13

Status: accepted

## Context

As our design system is developed and maintained as any other software product, we should adopt the ways from software engineering where we can learn from our mistakes and failures.
Thus the postmortems are a way to capture the important events that happened during the development and maintenance of the design system.
A postmortem is a document that describes an event, its impact, the actions taken to mitigate or resolve it, the root cause, and the lessons learned from the event.

The knowledge of how we failed and how we fixed the problem can be used to prevent the same problem in the future.

In contrast to product applications where failures impact the users directly, failures in the design system can impact directly the product developers and in the first place postpone the release of the products if the problem is found.

## Decision

In the `postmortems` directory, we will create a new file for each significant failure we make.
The file will contain the postmortem description based on the simplified template.

Any failure that impacts users of the products that are using our design system will be considered significant and must be documented in the postmortem.

Any failure that impacts the development of the products that are using our design system in a way postponing the release of the product or even blocking the delivery of the feature will require a decision of how significant the failure is and if it should be documented in the postmortem.

## Consequences

- We will have a single source of truth about our failures and their resolutions.
- The record of the failures will require some information about how big the failure was and how big the impact on the products is to make a record of it.
