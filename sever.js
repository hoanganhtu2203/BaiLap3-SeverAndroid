var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();

http.createServer(function (req, res) {
   if (req.url == '/') {
      readFileAndResponse(res, 'home.html')
   }  else if (req.url == '/page-b.html') {
      readFileAndResponse(res, 'page-b.html')
   }

   else if (req.url == '/thongtin') {
      fs.writeFile('thongtin.txt', 'Hoàng Anh Tú - Tuhaph19750 - tuhaph19750@fpt.edu.vn', function (err) {
         if (err) throw err;
         console.log('Saved!');
         res.write('Da tao file');
         res.end();
      });
   }
   else if (req.url == '/addthongtin') {
      fs.appendFile('thongtin.txt', '\n Lap trinh may tinh', function (err) {
         if (err) throw err;
         res.write('Da them thong thong tin trong file thongtin.txt');
         res.end();
      })
   }
   else if (req.url == '/doifile') {
      fs.rename('thongtin.txt', 'thongtin111.txt', function (err) {
         if (err) throw err;
         console.log('Saved!');
         res.write('Da doi ten file');
         res.end();
      });
   }

   else {
      res.write('404 - Not Found');
      return res.end();
   }
}).listen(8085);

function readFileAndResponse(res, fileUrl) {
   fs.readFile(fileUrl, function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end();
   });
}