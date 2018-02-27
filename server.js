var http = require('http');
var fs = require('fs');
//var ReactDOM = require('react-dom');
const PORT=8000; 

fs.readFile('./index.js', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(PORT);
});