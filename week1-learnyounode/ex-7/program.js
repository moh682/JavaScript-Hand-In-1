const url = process.argv[2]

var http = require('http');

// response.on('data') when data is available from the response
http.get( url , (response) => {
  response.setEncoding('utf8');
  response.on('data', (data) => {
    console.log(data)
  })
})


/**
 
 *** Their solutions **** 

  var http = require('http')

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8')
  response.on('data', console.log)
  response.on('error', console.error)
}).on('error', console.error)

 */