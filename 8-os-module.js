// OS modules
const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds
console.log(`The system Uptime is ${os.uptime()} seconds`)

const currentOS = {
   name: os.type(),
   release: os.release(),
   totalMem: os.totalmem(),
   freeMem: os.freemem()
}

console.log(currentOS)

// PATH module
const path = require('path')

// separator module
console.log(path.sep)

// path.join()
const filePath = path.join('./content/subfolder/test.txt')
const fileOtherPath = path.join('/content', 'subfoler', 'text.txt')
console.log(filePath)
console.log(fileOtherPath)

// path.basename()
const base = path.basename(filePath)
console.log(base)

// path.resolve()
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute)