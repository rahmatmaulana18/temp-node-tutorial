const path = require('path');

// Get the separator for current system env
console.log(path.sep);

// Construct file path
const filePath = path.join('/content/', 'content', 'subcontent', 'test.txt');
console.log(filePath);

// Get the base name from a file path
const base = path.basename(filePath);
console.log(base);

// Construct full path
const fullPath = path.resolve(__dirname, 'content', 'subcontent', 'test.txt');
console.log(fullPath);