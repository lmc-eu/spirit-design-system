# `post-changelog`

> Post Changelog to Slack

Parses the latest changelog entry when new package version is release and posts it to our Slack notifications channel.

Dry run:

```shell
yarn zx scripts/post-changelog.mjs --dry
```

Production run:

```shell
yarn zx scripts/post-changelog.mjs
```

## Development & Testing

Set up a local `.env` file with the content based on the `.env.example` file.

See the [Slack Block Kit documentation][slack-block-kit-docs] and [chat.postMessage API method documentation][slack-post-message-docs] for more information.

[slack-block-kit-docs]: https://api.slack.com/reference/block-kit/
[slack-post-message-docs]: https://api.slack.com/methods/chat.postMessage
