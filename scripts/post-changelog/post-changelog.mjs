// This script is based on @see { @link https://github.com/kiwicom/orbit/blob/master/scripts/post-changelog.mjs }
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import { fileURLToPath } from 'url';
import { config as dotenvConfig } from 'dotenv-safe';
import gitDiffParser from 'gitdiff-parser';
import { simpleGit } from 'simple-git';
import slackifyMarkdown from 'slackify-markdown';
import { $, fetch, argv, path } from 'zx';

const COLOR_CORE = '#00A58E';
const PACKAGES = ['web', 'web-react', 'web-twig', 'design-tokens', 'icons', 'codemods', 'analytics'];
let SLACK_CHANGELOG_WEBHOOK_URL = process.env.SLACK_CHANGELOG_WEBHOOK_URL ?? '';

/**
 * Generates a title for the given package.
 *
 * @returns {string} The generated title.
 */
function getTitle() {
  return `🚀 New release published`;
}

/**
 * Sends the content to the specified webhook URL.
 *
 * @param {object} params - The parameters.
 * @param {object} params.content - The content to send.
 * @param {string} params.webhookUrl - The webhook URL to send the content to.
 */
async function sendToWebhook({ content, webhookUrl }) {
  await fetch(webhookUrl, {
    method: 'POST',
    body: JSON.stringify(content),
  })
    .then((res) => {
      if (res.status !== 200) {
        throw new Error(`${res.status} ${res.statusText}`);
      }
    })
    .catch((err) => {
      console.log('Error posting to Slack');
      console.error(err);
      process.exit(1);
    });
}

/**
 * Formats the changelog string with the given package name and prefix.
 *
 * @param {string} str - The changelog string to format.
 * @param {string} packageName - The name of the package.
 * @param {string} prefix - The prefix to use for the package.
 *
 * @returns {string} The formatted changelog string.
 */
function format(str, packageName, prefix = '@lmc-eu') {
  const output = str
    .replace(
      /^(#+ )(.+)/,
      `# 📦 ${packageName
        .split('-')
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(' ')} _$2_ \`${prefix}/spirit-${packageName}\``,
    )
    .replace(/\(\d{4}-\d{2}-\d{2}\)/, '') // Remove release date
    .replace('Bug Fixes', '🐛 Bug Fixes')
    .replace('Features', '⚡ Features')
    .replace('BREAKING CHANGES', '🚨 BREAKING CHANGES')
    .replace('Dependencies', '📦 Dependencies')
    .replace('Documentation', '📜 Documentation')
    .replace('Tests', '🧪 Tests')
    .replace('Code Refactoring', '🛠️ Code Refactoring')
    .replace('Chores', '🔨 Chores')
    .replace('Styles', '💅 Styles')
    .replaceAll('https://github.com/lmc-eu/spirit-design-system/issues/', 'https://jira.almacareer.tech/browse/');

  return output;
}

/**
 * Extracts the changelog content from the given diff files.
 *
 * @param {Array} files - The diff files to extract the changelog from.
 * @returns {string} The extracted changelog content.
 */
function getChangelogFromDiff(files) {
  // Only one file as we're only looking at the changelog
  const versionPattern = /<a name=".*"><\/a>/;
  const [changelogFile] = files;
  const changelog = changelogFile.hunks
    .flatMap((hunk) => hunk.changes.filter(({ isInsert }) => isInsert).map(({ content }) => content))
    .filter((line) => !versionPattern.test(line))
    .join('\n')
    .trim();

  return changelog;
}

/**
 * Gets the diff for the given tag and path.
 *
 * @param {string} tag - The tag to get the diff for.
 * @param {string} path - The path to get the diff for.
 * @returns {Promise<string>} The diff output.
 */
function getDiff(tag, path) {
  return simpleGit().show([tag, path]);
}

/**
 * Returns the changelog path for the given package name.
 *
 * @param {string} packageName - The name of the package.
 * @returns {string} The changelog path.
 */
function changelogPath(packageName) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  return path.resolve(__dirname, `../../packages/${packageName}/CHANGELOG.md`);
}

/**
 * Posts a Slack notification with the given changelog.
 *
 * @param {string} changelog - The changelog content to post.
 * @param {string} packageName - The name of the package.
 *
 * @returns {Promise<void>}
 */
async function postSlackNotification(changelog, packageName) {
  try {
    $.verbose = false;
    const res = await sendToWebhook({
      webhookUrl: SLACK_CHANGELOG_WEBHOOK_URL,
      content: {
        attachments: [
          {
            color: COLOR_CORE,
            blocks: [
              {
                type: 'header',
                text: {
                  type: 'plain_text',
                  text: getTitle(packageName),
                  emoji: true,
                },
              },
            ],
          },
          {
            // The `text` field is used as fallback, but it has higher character limit (4000) then section block
            // @see { @link https://api.slack.com/methods/chat.postMessage#text_usage}
            // @see { @link https://api.slack.com/reference/block-kit/blocks#section_fields }
            text: changelog,
            color: COLOR_CORE,
          },
        ],
      },
    });

    return res;
  } catch (err) {
    console.log('Error posting to Slack');
    console.error(err);
  }

  return null;
}

/**
 * Configures the webhook URL from the environment variables.
 */
async function configureWebhookURL() {
  try {
    dotenvConfig({
      allowEmptyValues: true,
      example: '.env.example',
    });
    SLACK_CHANGELOG_WEBHOOK_URL = process.env.SLACK_CHANGELOG_WEBHOOK_URL;
  } catch (err) {
    if (/SLACK_CHANGELOG_WEBHOOK_URL/g.test(err.message)) {
      throw new Error('SLACK_CHANGELOG_WEBHOOK_URL is not set');
    }
  }
}

/**
 * Publish the changelog for the given npm package.
 *
 * @param {string} npmPackage - The name of the npm package.
 */
async function publishChangelog(npmPackage) {
  try {
    await simpleGit().fetch(['origin', 'main', '--tags']);
    const tags = await simpleGit().tags({ '--sort': '-taggerdate' });
    const diff = await getDiff(
      argv.dry ? '@lmc-eu/spirit-web-react@3.1.0' : (tags.latest ?? ''),
      changelogPath(npmPackage),
    );
    const files = gitDiffParser.parse(diff);
    if (files.length === 0) {
      console.log(`No changes in ${npmPackage}`);

      return;
    }
    const changelog = getChangelogFromDiff(files);
    const formattedChangelog = format(changelog, npmPackage);
    const slackifiedChangelog = slackifyMarkdown(formattedChangelog);

    if (argv.dry) {
      console.info(slackifiedChangelog);
    } else {
      await configureWebhookURL();
      await postSlackNotification(slackifiedChangelog, npmPackage);
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

(async () => {
  await Promise.all(
    PACKAGES.map(async (npmPackage) => {
      await publishChangelog(npmPackage);
    }),
  );
  process.exit(0);
})();
