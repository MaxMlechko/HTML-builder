const fs = require('fs');
const path = require('path');

const cssBundle = fs.createWriteStream(path.join(__dirname, 'project-dist', 'bundle.css'));

async function copyFolder(){

  fs.open(path.join(__dirname, 'project-dist', 'bundle.css'), 'w', (err) => {
    if(err) throw err;
  });
  fs.readdir(path.join(__dirname, 'styles'), {withFileTypes: true}, (err, files) => {
    if(err){
      throw err;
    }
    else{
      files.forEach(file => {
        if(path.extname(file.name).slice(1) == 'css'){
          let stream = new fs.ReadStream(path.join(__dirname, 'styles', file.name), {encoding: 'utf-8'});
          stream.on('readable', function(){
            let data = stream.read();
            if(data != null){
              cssBundle.write(data);
            }
          });
        }
      });
    }
  });
}

copyFolder();