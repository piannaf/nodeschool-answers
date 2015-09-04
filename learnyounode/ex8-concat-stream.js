var http = require('http');
var concat = require('concat-stream');
var url = process.argv[2];

http.get(url, function (response) {
  response.pipe(concat(function(buf_data) {
    data = buf_data.toString();
    console.log(data.length);
    console.log(data);
  }));
}).on('error', console.error);
