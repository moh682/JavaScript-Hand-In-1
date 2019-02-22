var port = process.argv[2];
var net = require('net');

const date = new Date()

var server = net.createServer( (socket) => {
  var year = date.getFullYear();
  var hour = date.getHours();
  var min = date.getMinutes();
  let value = `${year}-${ date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth }-${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()} ${hour}:${min}`;

  try{
  socket.write(value + '\n')
  } catch(err){
    console.log(err)
  }
  socket.end()
})

server.listen(port);


/**

 *  Learnyounode solution * 

    var net = require('net')
    
    function zeroFill (i) {
      return (i < 10 ? '0' : '') + i
    }
    
    function now () {
      var d = new Date()
      return d.getFullYear() + '-' +
        zeroFill(d.getMonth() + 1) + '-' +
        zeroFill(d.getDate()) + ' ' +
        zeroFill(d.getHours()) + ':' +
        zeroFill(d.getMinutes())
    }
    
    var server = net.createServer(function (socket) {
      socket.end(now() + '\n')
    })
    
    server.listen(Number(process.argv[2]))



 */