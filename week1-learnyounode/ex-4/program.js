const file = process.argv[2];
const fs = require('fs');

// The use of utf8 change it to string instead of bytes
fs.readFile(file , 'utf8' , function callback(err, data) {
     console.log(data.split('\n').length -1 )
} )

// THIS CANT BE USED BECAUSE IT WILL 
//    FINISH HERE BEFORE THE FUNCTION
//console.log('Path :' + file + '\n');

