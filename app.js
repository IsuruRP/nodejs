const fs = require('fs');

fs.readFile('file.txt', 'utf8', function (err, data) {
 if (err) throw err;
 console.log(data);
});
fs.writeFile('file.txt', 'Hello World!', function (err) {
 if (err) throw err;
 console.log('File saved!');
});
const http = require('http');

const server = http.createServer(function (req, res) {
 res.writeHead(200, {'Content-Type': 'text/html'});
 res.write('Hello World!');
 res.end();
}).listen(8080);

server.on('listening', () => {
	console.log('HTTP server listening on port 8080');
});

server.on('error', (err) => {
	console.error('HTTP server error:', err && err.code ? err.code : err);
});

const https = require('https');

https.get('https://jsonplaceholder.typicode.com/posts/1', (resp) => {
 let data = '';

 resp.on('data', (chunk) => {
 data += chunk;
 });

 resp.on('end', () => {
 console.log(JSON.parse(data));
 });

}).on('error', (err) => {
 console.log("Error: " + err.message);
});
exports.myFunction = function() {
 return "Hello from my module!";
};
process.on('exit', (code) => {
	console.log('Process exiting with code', code);
});

process.on('uncaughtException', (err) => {
	console.error('Uncaught Exception:', err && err.stack ? err.stack : err);
	process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
	console.error('Unhandled Rejection at:', promise, 'reason:', reason);
	process.exit(1);
});

const condition = true;

const myPromise = new Promise((resolve, reject) => {
 if (condition) {
 resolve('Success!');
 } else {
 reject('Failure!');
 }
});

async function myFunction() {
 try {
 const result = await myPromise;
 console.log(result);
 } catch (error) {
 console.log(error);
 }
}

myFunction();