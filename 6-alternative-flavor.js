// module.exports is object by default, so you can setup 
// the property directly or assign it to different variable

module.exports.items = ['item 1', 'item 2'];

const person = {
   name: 'bob'
};
module.exports.testPerson = person;