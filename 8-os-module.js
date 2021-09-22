// Built in NodeJS modules
const os = require('os');

// Info about current user
const user = os.userInfo();
console.log(user);

// Info about the system uptime in seconds
console.log(`System uptime ${os.uptime()}`);

// Info about the sytem general
const currentOS = {
   name: os.type(),
   release: os.release(),
   totalMemory: os.totalmem(),
   freeMemory: os.freemem()
};
console.log(currentOS);