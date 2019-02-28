import promise from './wrap_a_callback';

var http = require('http');
var args = process.argv.splice(2 , process.argv.length - 1 );

function addRandoms(array){
  var randoms = [];
      randoms.push({ "length" : array[index] , "randoms": promise.makeSecureRandom(array[index])});
  }
  console.log(randoms);

addRandoms(args);