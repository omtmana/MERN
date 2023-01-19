// CommonJS, every file in node is a module (by default)
// Modules - Encapsulated code
// const names = require('./4-firstModule')
// const sayHi = require('./5-utils')
// const data = require('./6-alt-flavor')
// require('./7-mind-grenade')

// console.log(data)
// console.log(names)

// sayHi(names.john)
// sayHi(names.peter)

// PATH module
const path = require('path')

// separator module
console.log(path.sep)

// path.join()
const filePath =path.join('./content/subfolder/test.txt')
const fileOtherPath = path.join('/content', 'subfoler', 'text.txt')
console.log(filePath)
console.log(fileOtherPath)

// path.basename()
const base = path.basename(filePath)
console.log(base)

// path.resolve()
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute)