// CommonJS, every file is module by default
// Modules - Encapsulated code
const names = require('./4-names');
const printName = require('./5-utils');
const data = require('./6-alternative-flavor');
const { john, peter } = names;
require('./7-mind-grenade');

// console.log(data);
// console.log(names);
// printName(john);
// printName(peter);