var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var file = process.argv[3];

var server = http.createServer(function (req, res) {
  /* NOTE
   * The official solution writes a header as follows
   *   res.writeHead(200, {'content-type': 'text/plain'})
   * This is necessary in a real-world situtation with an HTTP client
   * However, the test passes without it. I wouldn't have known to do this
   * without reading the solution
   */
  fs.createReadStream(file).pipe(res);
});
server.listen(port);
