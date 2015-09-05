var http = require('http');
var bl = require('bl');
var async = require('async');
var urls = process.argv.slice(2, 5);

function http_collect(url, cb) {
  http.get(url, function (response) {
    response.pipe(bl(function(err, data) {
      if (err) { cb(err); }

      cb(null, data.toString());
    }));
  }).on('error', cb);
}

async.mapSeries(urls, http_collect, function (err, data) {
      if (err) { console.error(err); }

      console.log(data.join("\n"));
});
