## About
This is a simple template that uses [craco](https://github.com/gsoft-inc/craco) to extend Create React App webpack configuration.  Here is what it does:

1. removes chunking
2. removes hashing

for this reason we are better able to control the file we want to assign in our [Drupal 8 custom module libraries](https://www.drupal.org/docs/creating-custom-modules/adding-stylesheets-css-and-javascript-js-to-a-drupal-module).

## Install
`npx create-react-app app --template drupal-pdb `
