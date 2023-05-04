const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname,'secret-folder'), (err, files) => {
  if (err) throw err;
  for (let file of files) {
    fs.stat(path.join(__dirname,'secret-folder',file),(err,stats) => {
      if (err) throw err;
      if (stats.isDirectory() == false) {
        console.log(file.substring(0,file.lastIndexOf('.')) + ' - ' + file.substring(file.lastIndexOf('.')+1) + ' - ' +stats.size/1000 + 'kb');
      }
    });
  }
});