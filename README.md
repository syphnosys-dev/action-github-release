# GH Release Action

This GitHub Action creates a release in your repository, similar to softprops/action-gh-release.

## Inputs

- `tag_name` (required): The tag to use for the release.
- `release_name` (required): The title of the release.
- `body`: Description of the release.
- `draft`: Mark release as draft (default: false).
- `prerelease`: Mark release as prerelease (default: false).

## Example usage

```yaml
uses: your-username/gh-release-action@v1
with:
  tag_name: v1.0.0
  release_name: "Version 1.0.0"
  body: "Initial release"
env:
  GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
