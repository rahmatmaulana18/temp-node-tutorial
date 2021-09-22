// When you export file/module, you will also invoke/run any code/function inside that module

const num1 = 5;
const num2 = 10;

function addValues() {
   console.log(`Result: ${num1 + num2}`);
};

// THIS function will run if we import this file/module
addValues();