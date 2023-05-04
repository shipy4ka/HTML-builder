const path = require('path');
const fs = require('fs');

stream = fs.createReadStream(path.join(__dirname,'text.txt'),'utf-8');
stream.on('data', chunk => console.log(chunk));