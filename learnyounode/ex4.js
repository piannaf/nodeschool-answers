var fs = require('fs')
  , path = process.argv[2];

function printLines (err, data) {
  if (err) throw err;

  var n = data.split('\n').length;

  // Subtract 1 before printing because file doesn't end with new line
  console.log(n - 1);
}

// print number of new lines async
fs.readFile(path, 'utf8', printLines);

