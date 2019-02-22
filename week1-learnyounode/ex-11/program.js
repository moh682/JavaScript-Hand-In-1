var port = process.argv[2];
var file_location = process.argv[3];

var fs = require('fs');
var http = require('http');

http.createServer((req, res) => {
  
  var filestream = fs.createReadStream(file_location);
  filestream.on('open', function() {
    filestream.pipe(res)
  })

  filestream.on('error', function(err){
    console.log(err);
  })

}).listen(port)
