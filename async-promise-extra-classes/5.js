/*
### File processing with callback 
Write a function 'readFileCallback' that takes a filename
and a callback function.
'readFileCallback' should read the contents of the file asynchronously and pass the data to the callback function.
*/

fs = require("fs");

function readFileCallback(filename, callback) {
  const readSync = fs.fileReadAsyn;
}

function cb(data) {
  console.log(data);
}
readFileCallback(fn, cb);
