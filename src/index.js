const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer(function(req, res) {
    const pathname = url.parse(req.url, true);
    const filename = pathname.pathname.replace('.html', '');
    fs.readFile(filename === '/' ? `./pages/index.html` : `./pages${filename}.html`, function(err, data){
        if(err){
            fs.readFile('./pages/404.html', function(err2, data2){
                if(err2){
                    res.writeHead(404, {'Content-Type' : 'text/html'})
                    res.write('404 error not found');
                    return res.end();
                }else {
                    res.writeHead(404, {'Content-Type' : 'text/html'})
                    res.write(data2);
                    return res.end();
                }
            })
        }else {
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.write(data);
            return res.end();
        }
    });
}).listen(8080);