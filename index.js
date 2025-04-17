const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    const token = core.getInput('token');
    const octokit = github.getOctokit(token);

    const tag = core.getInput('tag_name');
    const releaseName = core.getInput('release_name') || tag;
    const body = core.getInput('body') || '';
    const draft = core.getBooleanInput('draft');
    const prerelease = core.getBooleanInput('prerelease');

    const response = await octokit.rest.repos.createRelease({
      ...github.context.repo,
      tag_name: tag,
      name: releaseName,
      body: body,
      draft: draft,
      prerelease: prerelease
    });

    core.setOutput('release_url', response.data.html_url);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
