var zlib = require("zlib");
var fs = require("fs");

var inStream = fs.createReadStream("input.zip");

var outStream = fs.createWriteStream("input.txt");

var unzip = zlib.createGunzip();

inStream.pipe(unzip).pipe(outStream);
