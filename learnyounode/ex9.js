var http = require('http');
var bl = require('bl');
var urls = process.argv.slice(2, 5);

function http_collect(url, cb) {
  http.get(url, function (response) {
    response.pipe(bl(function(err, data) {
      if (err) { return console.error(err); }

      console.log(data.toString());

      if (cb) { cb(); }
    }));
  }).on('error', console.error);
}

http_collect(urls[0], function () {
  http_collect(urls[1], function () {
    http_collect(urls[2]);
  });
});
