const fs = require('fs')
const add = require('./utils')
const getNotes = require('./notes')
const validator = require('validator').default
const chalk = require('chalk')

fs.writeFileSync('notes.txt', 'This file was created by Node.js\n')
fs.appendFileSync('notes.txt', 'My name is jinsu\n')
console.log(add(5, 6))
console.log(getNotes())

console.log(validator.isEmail('A@kakao.com'))
console.log(validator.isURL('https://www.ssafy.com/'))
console.log(chalk.blue('hello'))
console.log(chalk.red.bgBlack`2 + 3 = {bold ${2 + 3}}`)
