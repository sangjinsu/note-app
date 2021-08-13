const fs = require('fs')

const getNotes = function () {
  fs.readFileSync('notes.txt')
}

const writeNotes = function (msg) {
  fs.appendFileSync('notes.txt', `${msg}\n`)
}

// TypeError: Assignment to constant variable.
// getNotes = function () {
//   console.log('it is not working')
// }

module.exports = { getNotes, writeNotes }
