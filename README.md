# myRetail Grocery UI

## Installation

Install [Yarn](https://yarnpkg.com) globally

Install NPM packages
```bash
yarn
```

## Running development

myRetail Grocery UI uses a webpack localhost server to dish up needed resources for development

- `yarn start` Runs the local webpack server. Reloads on file updates.

## Linting and error checking

Using eslint to check for errors before deployment

- `yarn lint`

## Unit testing

Using Jest and enzyme to create and run unit tests for the store and components

- `yarn test` Run unit tests.

## Building and packaging

All configuration for bundling can be found in the `webpack.config.js` and `webpack.config.prod.js` files in the root directory
- `yarn build` bundles the js, css and html files into the `dist` folder

## Creating a release

- `yarn release` increments the release version and updates the `CHANGELOG.MD` file

To push the new release to the github repository:
```bash
git push --follow-tags origin master
```

## Structure

myRetail Grocery UI uses React / Redux to handle application logic, with additional libraries like lodash and Material-UI to enhance front end components display and functionality

Additionally, styled-components are used in place of regular CSS/SASS, in separate files indicated by `componentName.style.js`

Unit tests are located in the same folder structure as their components, under the subfolder `__tests__`

`src/` contains the components, styles, and redux store files

`config/` contains basic configuration files for the themes, testing, etc

`dist/` contains the bundled code ready for production

`data/` contains the JSON files used to (in this case) mock incoming data from an API
