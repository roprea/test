# Test App

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

This is a React based project. To learn React, check out the [React documentation](https://reactjs.org/).

The project was created with [Create React App](https://github.com/facebook/create-react-app). You can learn more about the available configurations by checking the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

The reusable components are based on [Material-UI](https://mui.com/material-ui/getting-started/overview/).

The implementation of the reusable components from the `crgl-core` folder is guided by the following principles:

- Components must be independently usable.
- Components should not include any project-specific implementation details (like locales).
- Components need to support custom styling using CSS.

## Table of contents

- [Getting help](#getting-help)
- [Getting started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Editor support](#editor-support)
- [Running Storybook](#running-storybook)
- [Publishing a new version](#publishing-a-new-version)
- [Semantic versioning](#semantic-versioning)
- [Contributing](#contributing)

## Getting help

- Consult the TROUBLESHOOTING.md file for common problems if you're stuck.

## Getting started

### Prerequisites

- NodeJS v16
  - Download and install NodeJS version 16 from [nodejs.org](https://nodejs.org/en/).
- Yarn package manager
  - Install Yarn package manager `npm install -g yarn`.
- A valid SSH key
  - Generate the SSH key `ssh-keygen -t ed25519 -C "your_email@example.com"`. Check the [GitHub SSH key tutorial](https://docs.github.com/en/enterprise-server@3.5/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) for more information.
  - Go to Github > Settings > SSH and GPG keys > [New SSH key](https://git.cglcloud.com/settings/ssh/new) and paste your public SSH key.

### Install

- Clone the project repository locally.
  - `git clone git@github.com:roprea/test.git`
- Inside the project directory run
  - `yarn` to install dependencies.
  - `yarn start` to start the application.

### Editor support

To get a nice development environment, you'll probably want to enable support in your editor of choice for the following technologies:

- TypeScript [WebStorm](https://www.jetbrains.com/help/webstorm/typescript-support.html) | [VSCode](https://code.visualstudio.com/Docs/languages/typescript)
- ESLint [WebStorm](https://www.jetbrains.com/help/webstorm/eslint.html) | [VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- Prettier [WebStorm](https://prettier.io/docs/en/webstorm.html) | [VSCode](https://prettier.io/docs/en/editors.html#visual-studio-code)
 👌

## Running Storybook (TBA)

To do scoped component development, you can run Storybook. To do this, run the following commands:

`$ yarn` (if not done so already)

`$ yarn storybook`

This will install all dependencies and then start Storybook.

## Publishing a new version

Stage Environment: the code is automatically deployed on [stage environment](TBA) when a branch named `release-*` is pushed.
Development Environment: the code is automatically deployed on [development environment](TBA) on any PR merge made against `develop` branch.
Local Build: In order to create a local build, run `yarn build`. It will create the `build` folder which will contain the entire application build.

## Semantic versioning

We use [semantic versioning](https://semver.org/) for creating new release versions.
Rule of thumb is:

- Releases with only chores, fixes, patches and/or refactors are considered to be a patch release (e.g. increase the release version number from 2.8.0 to 2.8.1).
- Releases with at least one feature are considered to be a minor release (e.g. increase the release version number from 2.8.2 to 2.9.0).
- Releases with at least one breaking change are considered to be a major release (e.g. increase the release version number from 2.8.3 to 3.0.0).

This is why prefixing your PR correctly is very important!

## Contributing

Please see our [contribution guidelines](CONTRIBUTING.md) before submitting your contribution. While we do appreciate your work, we can not accept any contributions that do not meet our guidelines.

