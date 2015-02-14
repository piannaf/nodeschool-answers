var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, callback) {
  var checkExtension = function (file) {
    return path.extname(file).slice(1) === ext;
  }

  fs.readdir(dir, function (err, files) {
    if (err) return callback(err);

    filteredList = files.filter(checkExtension);

    callback(null, filteredList);
  });
};
