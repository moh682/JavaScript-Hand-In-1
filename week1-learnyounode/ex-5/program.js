const path = process.argv[2];
const format = process.argv[3];

var fs = require('fs');

fs.readdir(path , (err, files) => {
    if (err) console.log(err) 
    files.forEach(element => {
        if(format === element.split('.')[1]){
          console.log(element);
        }
      }
    );
})

