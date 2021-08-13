const notes = require('./notes')
const validator = require('validator').default
const chalk = require('chalk')

const command = process.argv[2]

if (command === 'add') {
  console.log('add')
} else if (command === 'remove') {
  console.log('remove note')
}
