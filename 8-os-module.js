const os = require('os')


console.log(`the system run time is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMen: os.freemem(),
}

console.log(currentOS);