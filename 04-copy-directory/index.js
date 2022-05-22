const fs = require('fs');
const path = require('path');

const way = path.join(__dirname, 'files');

async function copyFolder(){
  fs.mkdir(path.join(__dirname, 'files-copy'), {recursive: true},(err) => {
    if(err){
      throw err;
    }
    else{
      fs.readdir(path.join(__dirname, 'files-copy'), (err,files) => {
        if(err) {
          throw err;
        }
        else{
          files.forEach(file =>{
            fs.unlink(path.join(__dirname, 'files-copy', file), function(err){
              if(err) {
                throw err;
              }
            });
          });
        }
      });
      fs.readdir(way, {withFileTypes: true}, (err, files) => {
        if(err) {
          throw err;
        }
        else{
          files.forEach(file => {
            fs.open(path.join(way, file.name), (err) => {
              if(err) throw err;
            });
            fs.copyFile(path.join(__dirname, 'files',file.name), path.join(__dirname, 'files-copy',file.name), (err) => {
              if(err) throw err;
            });
          });
        }
      });
    }
  });
}

copyFolder();