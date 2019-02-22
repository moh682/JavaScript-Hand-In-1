const path = process.argv[2];
const format = process.argv[3];

var func = require('./module.js');

// callbacks can be used like here
func(path, format, function (err, list) {
  if (err) {
    return console.error('There was an error:', err)
  }
  list.forEach(function (file) {
    console.log(file)
  })
})