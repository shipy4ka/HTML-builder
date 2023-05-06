const path = require('path');
const dir = path.resolve('04-copy-directory', 'files');
const dirCopy = path.resolve('04-copy-directory', 'files-copy');
const fs = require('fs/promises');

const copyDir = () => {
  fs.rm(dirCopy, {recursive: true, force: true}).then(function() {
    fs.mkdir(dirCopy, {recursive: true}, (err) => {
      if (err) throw err;
    });
    fs.readdir(dir, {withFileTypes: true}).then(function(data) {
      data.forEach(function(item) {
        if (item.isFile()) {
          let dirItem = path.join(dir, item.name);
          let dirItemCopy = path.join(dirCopy, item.name);
          fs.copyFile(dirItem, dirItemCopy);
        }
      });
    });
  });
}
copyDir();