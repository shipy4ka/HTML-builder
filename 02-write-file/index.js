const fs = require('fs');
const path = require('path');
const redline = require('readline');
const process = require('process');

const stream = fs.createWriteStream(path.join(__dirname, 'text.txt'));
stream.on('error', (err) => console.log(`Error happened: ${err}`));

const rl = redline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Hello, write some text:\n');

rl.on('line', (data) => {
  data === 'exit' ? dataEnd() : stream.write(data);
});

rl.on('SIGINT', () => {
  dataEnd();
});

const dataEnd = () => {
  console.log('Bye-bye!');
  stream.end();
  rl.close();
  process.exit();
};