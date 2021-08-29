'use strict'
const fs = require('fs')
const chalk = require('chalk')

/**
 *
 * @param {string} title
 * @param {string} body
 */
const addNote = (title, body) => {
  const notes = loadNotes()
  const note = notes.find((n) => n.title === title)

  if (!note) {
    notes.push({ title, body: [body] })
    console.log(chalk.green('New note added'))
  } else {
    console.log(chalk.yellow('Note title already existed'))
    note.body.push(body)
    console.log(chalk.yellow('body added'))
  }

  saveNotes(notes)
}

/**
 *
 * @param {string} title
 */
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

/**
 *
 * @param {string} title
 */
const readNote = (title) => {
  const notes = loadNotes()
  const note = notes.find((n) => n.title === title)

  if (note) {
    const body = note.body

    console.log(`title: ${note.title}`)
    for (let i = 0; i < body.length; i++) {
      console.log(body[i])
    }
  } else {
    console.log(chalk.red.inverse('Note not found'))
  }
}

/**
 *
 * @typeof {object} note
 * @property {string} title
 * @property {string[]} body
 */

/**
 *
 * @param {note[]} notes
 */
const saveNotes = (notes) => {
  try {
    const data = JSON.stringify(notes)
    fs.writeFile('notes.json', data, (err) => {
      if (err) {
        console.error(chalk.red.inverse(err.message))
        throw err
      }
      console.log(chalk.green.inverse('The file has been saved!'))
    })
  } catch (error) {
    console.error(chalk.red.inverse(error.message))
  }
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

module.exports = { addNote, removeNote, listNotes, readNote }
