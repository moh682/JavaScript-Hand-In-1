var url1 = process.argv[2]
var url2 = process.argv[3]
var url3 = process.argv[4]

var http = require('http')
var concatStream = require('concat-stream')

const getData = async (url) => {

  http.get(url, (res) => {
  res.setEncoding('utf8');
  res.on('error', console.error)
  res.pipe(concatStream((data) => {
    console.log(data)
  }))
})
}

getData(url1)
getData(url2)
getData(url3)


/**
 
Solved by learnyounode 

    var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0
    
    function printResults () {
      for (var i = 0; i < 3; i++) {
        console.log(results[i])
      }
    }
    
    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err) {
            return console.error(err)
          }
    
          results[index] = data.toString()
          count++
    
          if (count === 3) {
            printResults()
          }
        }))
      })
    }
    
    for (var i = 0; i < 3; i++) {
      httpGet(i)
    }

 */