const http = require('http');
const fs = require('fs');

const server = http.createServer(function(request, response) {
  switch (request.url) {
    case "/":
      fs.readFile('index.html', function(err, data) {
        if (err) {
          response.writeHead(404);
          response.end(JSON.stringify(err));
          return;
        }
        response.writeHead(200);
        response.end(data);
      });
      break;
    case "/about":
      fs.readFile('about.html', function(err, data) {
        if (err) {
          response.writeHead(404);
          response.end(JSON.stringify(err));
          return;
        }
        response.writeHead(200);
        response.end(data);
      });
      break;
    case "/contact":
      fs.readFile('contact-me.html', function(err, data) {
        if (err) {
          response.writeHead(404);
          response.end(JSON.stringify(err));
          return;
        }
        response.writeHead(200);
        response.end(data);
      });
      break;
    default:
      response.writeHead(404);
      response.end(JSON.stringify("Page not found"));
      break;
  }
});

server.listen(8000, function() {
  console.log('Server is listening on port 8000');
});