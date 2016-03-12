var fs = require('fs')
var zlib = require('zlib') //zip file

var readable = fs.createReadStream(__dirname+'/hello.txt') //__dirname is current path (absolute)
var writeable = fs.createWriteStream(__dirname+'/hellocopy.txt')
var compressed = fs.createWriteStream(__dirname+'/hellocopy.txt.gz')
var gzip = zlib.createGzip() //stream

readable.pipe(gzip).pipe(compressed)