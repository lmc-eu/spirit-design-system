# Postmortems

Date: 2024-02-13

Status: proposed

## Context

As our design system is developed and maintained as any other software product, we should adopt the ways from software engineering where we can learn from our mistakes and failures.
Thus the postmortems are a way to capture the important events that happened during the development and maintenance of the design system.
A postmortem is a document that describes an event, its impact, the actions taken to mitigate or resolve it, the root cause, and the lessons learned from the event.

The knowledge of how we failed and how we fix the problem can be used to prevent the same problem in the future.

In contrast to product applications where failures impact the users directly, the failures in the design system can impact directly the product developers and in first place postpone the release of the products if the problem is found.

## Decision

In the `postmortems` directory we will create a new file for each significant failure we make.
The file will contain the postmortem description based on the simplified template.

Any failure that impact on users of the products they are using our design system will be considered significant and must be documented in the postmortem.

Any failure that impact on the development of the products which are using our design system in a way of postponing the release of the product or even blocking the delivery of the feature will require a decision of how significant the failure is and if it should be documented in the postmortem.

## Consequences

- We will have a single source of truth of our failures and their resolutions.
- The decisions about the failures will require some decisions about how big the failure was and how big was the impact on the products to make a record from it.
