var http = require('http');
var url = process.argv[2];

http.get(url, function (response) {
  response.setEncoding("utf8");

  var all_data = [];
  response.on('data', function (data) {
    all_data.push(data);
  });

  response.on('end', function () {
    var collected_data = all_data.join("");
    console.log(collected_data.length);
    console.log(collected_data);
  });
}).on('error', console.error);
