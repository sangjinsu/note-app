'use strict'
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const { addNote } = require('./notes')

yargs(hideBin(process.argv))
  .command(
    'add',
    'Add a note',
    () => {},
    (argv) => {
      console.log(`Add a note with the title "${argv.title}"...`)
      console.log(`What is written is below.\n"${argv.body}"`)

      addNote(argv.title, argv.body)
    }
  )
  .demandOption(['title', 'body'])
  .command(
    'remove',
    'Remove the note',
    () => {},
    (argv) => {
      console.log(`Remove a note with the title "${argv.title}"...`)
    }
  )
  .demandOption(['title'])
  .command(
    'list',
    'List notes',
    () => {},
    () => {
      console.log(`List notes...`)
    }
  )
  .command(
    'read',
    'Read a note',
    () => {},
    (argv) => {
      console.log(`Read a note with the title "${argv.title}"...`)
    }
  )
  .demandOption(['title'])
  .options({
    title: {
      alias: 't',
      type: 'string',
      describe: '노트 이름을 입력합니다',
    },
    body: {
      alias: 'b',
      type: 'string',
      describe: '노트 내용을 입력합니다',
    },
  }).argv
