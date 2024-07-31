var http = reqire('http');
http.createServer(function(req,res)
{
    res.writeHead(200,{'content-Type':'text/html'});
    res.write('Helloworlds!');
    res.write(req.url);
    res.end();

}).listen(4000);