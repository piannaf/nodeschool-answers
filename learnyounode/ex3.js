var fs = require('fs')
  , path = process.argv[2];

// get number of new lines
var n = fs.readFileSync(path).toString().split('\n').length;

// Subtract 1 before printing because file doesn't end with new line
console.log(n - 1);
