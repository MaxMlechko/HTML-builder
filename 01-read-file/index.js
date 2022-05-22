const fs = require('fs');
const path = require('path');

const way = path.join('01-read-file', 'text.txt');
const stream = new fs.ReadStream(way, {encoding: 'utf-8'});

stream.on('readable', function(){
  let data = stream.read();
  if(data != null){
    console.log(data);
  }
});