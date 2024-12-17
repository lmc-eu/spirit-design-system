/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import dotenv from 'dotenv-safe';
import gitDiffParser from 'gitdiff-parser';
import { simpleGit } from 'simple-git';
import slackifyMarkdown from 'slackify-markdown';
import { $, fetch, argv } from 'zx';

const COLOR_CORE = '#00A58E';
const PACKAGES = ['web', 'web-react', 'web-twig', 'design-tokens', 'icons', 'codemods', 'analytics'];
const SLACK_CHANGELOG_WEBHOOK_URL = process.env.SLACK_CHANGELOG_WEBHOOK_URL ?? '';

/**
 * Generates a title for the given package.
 *
 * @param {string} pkg - The package name.
 * @returns {string} The generated title.
 */
function getTitle(pkg) {
  return `🚀 New ${pkg
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')} package release`;
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
      /^#+ /,
      `# 📦 ${packageName
        .split('-')
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(' ')} \`${prefix}/spirit-${packageName}\` `,
    )
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
  return `packages/${packageName}/CHANGELOG.md`;
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
            title: getTitle(packageName),
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
    dotenv.config({
      allowEmptyValues: true,
      example: '.env.example',
    });
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
    const diff = await getDiff(tags.latest ?? '', changelogPath(npmPackage));
    const files = gitDiffParser.parse(diff);
    if (files.length === 0) {
      console.log(`No changes in ${npmPackage}`);

      return;
    }
    const changelog = getChangelogFromDiff(files);
    const formattedChangelog = format(changelog, npmPackage);
    const slackifiedChangelog = slackifyMarkdown(formattedChangelog);

    if (argv.dry) {
      console.info(formattedChangelog);
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
