const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
  const notes = loadNotes()
  const note = notes.filter((n) => n.title === title)

  if (note.length === 0) {
    notes.push({ title, body: [body] })
    console.log(chalk.green('New note added'))
  } else {
    console.log(chalk.yellow('Note title already existed'))
    note[0].body.push(body)
    console.log(chalk.yello('body added'))
  }

  saveNotes(notes)
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

const listNotes = () => {
  const notes = loadNotes()

  if (notes.length > 0) {
    console.log(chalk.greenBright('Your notes'))
    for (let i = 0; i < notes.length; i++) {
      console.log(`title: ${notes[i].title}`)

      for (let j = 0; j < notes[i].body.length; j++) {
        console.log(notes[i].body[j])
      }
    }
  } else {
    console.log(chalk.yellow('Notes are empty'))
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

module.exports = { addNote, removeNote, listNotes }
