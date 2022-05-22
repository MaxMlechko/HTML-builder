const fs = require('fs');
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const path = require('path');
const process = require('process');

const rl = readline.createInterface({ input, output });
const way = path.join('02-write-file', 'text.txt');

fs.open(way, 'w', (err) => {
  if(err) throw err;
});
fs.truncate(way , err => {
  if(err) throw err;
});

const file = fs.createWriteStream(way);
console.log('Hi, write some text:');
rl.on('line', text => {

  if(text == 'exit'){
    rl.close();
  }
  else{
    file.write(`${text}\n`);
  }
});

process.on('exit', () => {
  console.log('Ok, bye!');
});

process.on('SIGINT', () => {
  console.log('Ok, bye!');
});