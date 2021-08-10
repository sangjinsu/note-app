const fs = require('fs')
const add = require('./utils')
const getNotes = require('./notes')

fs.writeFileSync('notes.txt', 'This file was created by Node.js\n')
fs.appendFileSync('notes.txt', 'My name is jinsu\n')
console.log(add(5, 6))
console.log(getNotes())
