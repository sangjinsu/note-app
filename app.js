'use strict'
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const { addNote, removeNote, listNotes, readNote } = require('./notes')

const titleOption = {
  alias: 't',
  type: 'string',
  describe: '노트 이름을 입력합니다',
  demandOption: true,
}

const bodyOption = {
  alias: 'b',
  type: 'string',
  describe: '노트 내용을 입력합니다',
  demandOption: true,
}

yargs(hideBin(process.argv))
  .command(
    'add',
    'Add a note',
    (yargs) =>
      yargs.option({
        title: titleOption,
        body: bodyOption,
      }),
    (argv) => {
      console.log(`Add a note with the title "${argv.title}"...`)
      console.log(`What is written is below.\n"${argv.body}"`)

      addNote(argv.title, argv.body)
    }
  )
  .command(
    'remove',
    'Remove the note',
    (yargs) =>
      yargs.option({
        title: titleOption,
      }),
    (argv) => {
      console.log(`Remove a note with the title "${argv.title}"...`)
      removeNote(argv.title)
    }
  )
  .command(
    'list',
    'List notes',
    () => {},
    () => {
      console.log(`List notes...`)
      listNotes()
    }
  )
  .command(
    'read',
    'Read a note',
    (yargs) =>
      yargs.option({
        title: titleOption,
      }),
    (argv) => {
      console.log(`Read a note with the title "${argv.title}"...`)
      readNote(argv.title)
    }
  ).argv
