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