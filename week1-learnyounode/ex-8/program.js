var url = process.argv[2];

var concatStream = require('concat-stream');
var http = require('http');

http.get(url, (res) => {
  res.setEncoding('utf8');
  res.on('error', console.error)
  res.pipe(concatStream((data) => {
    console.log(data.length)
    console.log(data)
  }))
})
