# Contribution guidelines

### Commits

#### Commit messages

Commit messages have to start with a lowercase.
For example: `add hover to product images`.

So, `Add hover to product images` is not allowed.

However, it is allowed to use uppercases in a commit message when necessary. For example: `add Redux to state implementation`

#### First commit

**Please make sure that your first commit message represents what you might use as the title for your pull request.**
If your work contains more than one commit, the first commit message will be used as the title of the pull request, so make sure to follow the PR guidelines explained in this document.

### Pull requests

Pull request are the bread and butter of the collaboration on this repository. To have smooth development workflow for everyone make sure to read trough this guide carefully.

#### Submitting a Pull Request

The team is monitoring for pull requests. We will review your pull request and either merge it, request changes to it, or close it with an explanation.

**Before submitting a pull request**, make sure the following is done:

1.  Run `yarn` in the repository root (check the [getting started](https://github.com/roprea/test#getting-started) docs)
2.  If you’ve fixed a bug or added code that should be tested, add tests!
3.  Ensure the test suites pass (`yarn test`).
4.  Make sure your code has not linting errors
5.  Make sure that your branch is up to date with the develop before creating a PR: `git pull origin develop --rebase` to avoid useless CI runs

#### PR guidelines

Keep to the following guidelines when submitting pull requests. The guidelines are based on [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#specification)

##### PR title

```
  breaking|fix|feat|chore|refactor|ci|revert(scope): title describing your PR concisely
```

The first part describes the type of your PR:

- breaking: introduces a breaking change (indicates a MAJOR version upgrade).
- feat: adds a new feature (indicates a MINOR version upgrade).
- fix: fixes a bug (indicates a PATCH version upgrade).
- chore: update something without impacting the user directly, like changing a package version.
- refactor: a code change that doesn't fix a bug and doesn't add a feature.
- ci: changes to CI configuration files, like Docker changes.
- revert: whenever you revert changes that have been made before. It's not allowed to add new changes.

After the type, add the scope (this is applicable only after we migrate to monorepo) of the PR. This will be all packages that have been touched for the PR.
For example, when you change the common and the account package to add a new feature the title should look like this:

```
 feat(common,account): update notification style
```

When you touch more than 3 packages, it's okay to use "many" in the scope.

```
 chore(many): replace translation library and update related hook usage
```

##### PR Description

Make sure you always add a short description to your PR so other devs know what it is about without knowing the context.

##### Danger

SonarQube is your friend. It will check your PR for mistakes you might have made on your PR.
Check the pipelines of your PR to see if there are any improvements to be made.

### Branch organization

We will do our best to keep the master branch in good shape, with tests passing at all times.
We also try to keep PRs open for a short time. If you send a pull request, please do it against the `develop` branch.

### Styleguide

We use [Prettier](https://prettier.io/) to automatically format your code changes. Prettier will automically run on all staged files when commiting them.

Any syntax issues will be picked by ESLint.

If you are interested in reading about good JS coding style we recommend reading: https://github.com/airbnb/javascript
as we use a very similar style guide.

### Testing

We have some guidelines written down to help with writing tests. You can find them in [our testing guide](TESTING.md).

### Semantic versioning

We use [semantic versioning](https://semver.org/) for creating new release versions.
Rule of thumb is:

- Chore, fixes, patches and some refactors: patch (e.g. 2.0.1)
- Feature, refactor: minor (e.g. 2.1.0)
- Breaking: major (e.g. 3.0.0)

This is why prefixing your PR is very important!

Everytime you do a "larger" release, the other versions reset.
E.g. doing a minor release from 2.0.8, the patch version resets to 0 resulting in 2.1.0
Same goes for major release, from 2.1.5, both patch and minor versions reset to 0, resulting in 3.0.0

### Issues

Use the issues tab on this repository to submit issues that are not on any backlog.
We mainly use the issues for marking technical debt or proposing changes that are not a feature.

Whenever submitting issues, make sure that you have:

1.  Checked existing issues to avoid creating duplicates
2.  Checked with another developer if the issue is reasonable

Make sure the issues has a clear description and has related labels assigned.

### How to get in touch

If you need any help when working on this repository you can

- Contact the project team on Teams

### Troubleshooting

Having issues setting up your development workflow? Check the [troubleshooting guide](TROUBLESHOOTING.md)
or have a look at the section above where to ask for help.
