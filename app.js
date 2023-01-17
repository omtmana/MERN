// CommonJS, every file in node is a module (by default)
// Modules - Encapsulated code
const names = require('./4-firstModule')
const sayHi = require('./5-utils')

console.log(names)
sayHi(names.john)
sayHi(names.peter)