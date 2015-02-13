var fs = require('fs')
  , path = require('path')
  , dir = process.argv[2]
  , ext = process.argv[3];

fs.readdir(dir, function (err, list) {
  filteredList = list.filter(function (el) {
    return path.extname(el).slice(1) === ext;
  });

  console.log(filteredList.join('\n'));
});
