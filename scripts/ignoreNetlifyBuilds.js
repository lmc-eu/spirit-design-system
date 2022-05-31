// Ignore Netlify Builds
// @see: https://docs.netlify.com/configure-builds/ignore-builds/
// @see: https://answers.netlify.com/t/support-guide-how-to-use-the-ignore-command/37517
process.exitCode = process.env.BRANCH.includes('dependencies') ? 0 : 1;
