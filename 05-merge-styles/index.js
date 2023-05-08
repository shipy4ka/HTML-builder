const fs = require('fs');
const path = require('path');
const dir= path.join(__dirname, 'styles');
const dirMerge= path.join(__dirname, 'project-dist', 'bundle.css');

fs.writeFile(dirMerge, '', err => {
  if (err) {
    throw err;
  }
});

fs.readdir(dir, 'utf-8', function (error, files) {
  if (error) {
    throw error;
  }

  files.forEach(file => {
    if (file.substring(file.lastIndexOf('.')) == '.css') {
      let readableStream = fs.createReadStream(path.join(dir, file));
      readableStream.on('data', chunk => {
        fs.appendFile(dirMerge, chunk, err => {
          if (err) {
            throw err;
          }
        });
      });
    }
  });
});