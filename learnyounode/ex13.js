var http = require('http');
var url = require('url');

var port = process.argv[2];

var server = http.createServer(function (req, res) {
  var parsed = url.parse(req.url, true);
  var date = new Date(parsed.query.iso);
  var endpoint = parsed.pathname;
  var json;

  if (endpoint === "/api/parsetime") {
    json = {
      "hour": date.getHours(),
      "minute": date.getMinutes(),
      "second": date.getSeconds()
    };
  } else if (endpoint === "/api/unixtime") {
    json = {
      "unixtime": date.getTime()
    };
  } else {
    res.writeHead(404);
    return res.end();
  }

  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(json));
});
server.listen(port);
