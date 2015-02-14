var filtered_ls = require('./ex6-module.js');
var dir = process.argv[2];
var ext = process.argv[3];

filtered_ls(dir, ext, function (err, data) {
  if (err) return console.error('ERROR:', err);

  console.log(data.join('\n'));
});
