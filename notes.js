const getNotes = function () {
  return 'Your notes...'
}

// TypeError: Assignment to constant variable.
// getNotes = function () {
//   console.log('it is not working')
// }

console.log(getNotes.toString())

module.exports = getNotes
