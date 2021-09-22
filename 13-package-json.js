// Check version
// npm --version

// Install local dependency
// npm install <package name>

// Install global dependency
// npm install -g <package name>

// package.json - manifst file about the project
// npm init - step by step create the package.json
// npm init -y - create the package.json with default value

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);

console.log(newItems);