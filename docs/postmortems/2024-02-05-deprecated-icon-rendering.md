---
date: 2024-02-05
authors: @literat
---

# Excessive deprecation logging while rendering Icon component

**Summary**

<!-- What is a one or two-line summary of the event that occurred? -->

The `@lmc-eu/spirit-web-react@1.7.0` is shipped with a new deprecation warning about the `Icon` component.

**Impact**

<!-- What was the scope of impact from the event occurring? How many teams were
impacted? -->

The teams the use the `@lmc-eu/spirit-web-react@1.7.0` and above are impacted by this deprecation warning.
Since there are many components that use the `Icon` component, the impact should be extensive in logs that appear in logs both in browser developer tools and in the server logs.

**Root causes**:

<!-- Looking back, what ended up being the main reasons why this event occurred?
-->

This deprecations should solve the problem with server side rendering in the Next.js framework where the Icons were not rendered properly. The deprecation warning was added to the `Icon` component to inform the developers that the `Icon` component will use a `html-react-parser`. And a developer should install this dependency to make the `Icon` component work properly. This dependency will parse included SVG and render them directly to the DOM. After this the usage of the `dangerouslySetInnerHTML` will be obsolete. For condition whether to use the `Icon` rendered by `html-react-parser` or the `dangerouslySetInnerHTML` was created a new utility called `htmlParser` which dynamically imports the library and returns the function or nothing. This solution was not working properly. Also the deprecation warning appears in both cases of the usage of the `Icon` component.

**Detection**

<!-- How did we find out or discover that this event had occurred? -->

This problem was detected multiple times by the developers and the support question was raised in our Slack channel:

- https://almamedia.slack.com/archives/C068XPSDWQN/p1703704125308169
- https://almamedia.slack.com/archives/C068XPSDWQN/p1707125126127969
- https://almamedia.slack.com/archives/C068XPSDWQN/p1707215641782159

Also the message appears in the browser console and in the server logs:

```
Warning: Icon component is not supported in SSR without use of `html-react-parser`. Please install missing peer dependency.
```

**Resolution**

<!-- How did we end up addressing this event in order to mitigate impact? -->

The deprecation warning was removed as unnecessary in a first place to remove those excessive logging.
Secondly the `html-react-parser` was added as regular dependency and part of the `Icon` component which use the `dangerouslySetInnerHTML` was removed.

**Action Items**

<!-- What are the action items that came out of this postmortem? Reference
issues and Pull Requests in the "Bug" column with the appropriate owners -->

| Action item                    | Owner    | Bug                                                               |
| ------------------------------ | -------- | ----------------------------------------------------------------- |
| Remove the deprecation warning | @literat | [#1266](https://github.com/lmc-eu/spirit-design-system/pull/1266) |
| Require HTML parser            | @literat | [#1272](https://github.com/lmc-eu/spirit-design-system/pull/1272) |

## Lessons learned

**What went well**

- We have dealt with this problem multiple times so we have a good idea what is causing the problem.
- The product teams were able to quickly identify the problem and raise the question in the Slack channel.

**What went wrong**

- The lack of testing of the integration of the `html-react-parser` as dynamically imported dependency and the `Icon` component.
- A little awareness of how extensively is the `Icon` component used in our components and the product components.
- We were adding multiple dependencies as peer dependencies and thought that the developers will deal with the installing. Instead the regular dependency should be added. The regular dependency is not a part of the bundle unless we set it. We were trying to use as less dependencies as possible, however in this case it was not the best approach. We care a lot about the bundle/package size.

**Where we got lucky**

- Usage of the `warning` utility everywhere the deprecation is raised and the condition about `production` environment ensures that the deprecation messages are raised only in the development environment.

## Timeline

2023-12-27 **(all times in UTC)**

- 20:08 First time spotted problem with the SSR rendering of the Icon.

2024-01-10

- 11:46 Added the deprecation warning to the `Icon` component.

2024-02-05

- 10:25 Raised support question in the Slack channel.
- 11:34 Raised another support question in the Slack channel.

2024-02-06

- 12:24 @pavelklibani started to work on the support question
- 13:08 The new issue was added by @literat to the ticketing system - [DS-1145](https://jira.almacareer.tech/browse/DS-1145)
- 15:56 @literat came with the first version of the solution

2024-02-07

- 09:31 The solution was tested by @janicekt
- 13:59 @literat make a call with @janicekt and agreed on the solution
- 16:04 @literat merged PR #1266
- 16:24 `@lmc-eu/spirit-web-react@1.12.0` was released

## Supporting information

<!-- Any additional information that you might reference earlier on in the
postmortem -->

Commit introducing the problematic deprecation warning: [79f9f6f](https://github.com/lmc-eu/spirit-design-system/commit/79f9f6f207c87296c0c5af1d6c521f48f73206eb)
PR containing the problematic deprecation warning: [#1200](https://github.com/lmc-eu/spirit-design-system/pull/1200)
