
var makeSecureRandoms = require('./wrap_a_callback').makeSecureRandoms;

var http = require('http');
var args = process.argv.splice(2 , process.argv.length - 1 );

function addRandoms(array){
  makeSecureRandoms(array);
}

addRandoms(args);