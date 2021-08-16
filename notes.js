const fs = require('fs')
const chalk = require('chalk')

const readNotes = function () {
  fs.readFileSync('notes.txt')
}

const addNote = (title, body) => {
  const notes = loadNotes()
  const newNotes = notes.filter((n) => n.title === title)

  if (newNotes.length === 0) {
    newNotes.push({ title, body })
    saveNotes(newNotes)
    console.log(chalk.green('New note added'))
  } else {
    console.log(chalk.yellow('Note title already existed'))
  }
}

const removeNote = (title) => {
  const notes = loadNotes()
  const newNotes = notes.filter((n) => n.title !== title)

  if (notes.length > newNotes.length) {
    saveNotes(newNotes)
    console.log(chalk.green('Note removed'))
  } else {
    console.log(chalk.red.inverse('Note not found'))
  }
}

const saveNotes = (notes) => {
  const data = JSON.stringify(notes)
  fs.writeFile('notes.json', data, (err) => {
    if (err) {
      console.error(chalk.red.inverse(err.message))
    }
    console.log(chalk.green.inverse('The file has been saved!'))
  })
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJson = dataBuffer.toString()
    return JSON.parse(dataJson)
  } catch (error) {
    return []
  }
}

// TypeError: Assignment to constant variable.
// getNotes = function () {
//   console.log('it is not working')
// }

module.exports = { readNotes, addNote, removeNote }
