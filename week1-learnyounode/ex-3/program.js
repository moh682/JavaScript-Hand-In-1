const filePath = process.argv[2];

var fs = require('fs');
const buffer = fs.readFileSync(filePath, 'utf8');

let value = buffer.split('\n').length -1 ;
console.log(value);