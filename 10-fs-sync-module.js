// Read and write file synchronously
const { readFileSync, writeFileSync } = require('fs');
console.log('start task');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first);
console.log(second);

// Flag a is append, if we not provide that we will always replace the file
writeFileSync(
   './content/result-sync.txt',
   `Here is the result: ${first} ${second}`,
   {
      flag: 'a'
   }
);
console.log('done with this task');
console.log('start the next task');