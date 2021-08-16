const fs = require('fs')

const readNotes = function () {
  fs.readFileSync('notes.txt')
}

const addNote = (title, body) => {
  const notes = loadNotes()
  const note = notes.filter((n) => n.title === title)

  if (note.length === 0) {
    note.push({ title, body })
    saveNotes(note)
    console.log('New note added')
  } else {
    console.log('Note title already existed')
  }
}

const saveNotes = (notes) => {
  const data = JSON.stringify(notes)
  fs.writeFile('notes.json', data, (err) => {
    if (err) throw err
    console.log('The file has been saved!')
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

module.exports = { readNotes, addNote }
