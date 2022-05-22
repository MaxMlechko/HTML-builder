const fs = require('fs');
const path = require('path');

const way = path.join(__dirname, 'secret-folder');

fs.readdir(way, {withFileTypes: true}, (err, files) => {
  if(err) {
    throw err;
  }
  else{
    files.forEach(file => {
      if(file.isFile()){
        fs.stat(path.join(way, file.name), (error, stats) => {
          if (error) {
            console.log(error);
          }
          else {
            console.log(file.name + ' - ' + path.extname(file.name).slice(1) + ' - ' + stats.size/1024 + ' Kbyte');
          }
        });
      }
    });
  }
});
