var page = require('webpage').create(),
    system = require('system'),
    url;

if(system.args.length === 1){
    console.log('Usage: evalCode.js <some URL>');
    phantom.exit();
}
else{
    url = system.args[1];
}


// example:
// Request {
//     "headers": [
//         {
//             "name": "User-Agent",
//             "value": "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/534.34
// (KHTML, like Gecko) PhantomJS/1.9.7 Safari/534.34"
//         },
//         {
//             "name": "Accept",
//             "value": "*/*"
//         },
//         {
//             "name": "Referer",
//             "value": "http://localhost/"
//         }
//     ],
//     "id": 2,
//     "method": "GET",
//     "time": "2014-04-21T13:41:24.040Z",
//     "url": "http://localhost/js/simple.js"
// }
// 
// NOTICE: `headers`, `id` fields
page.onResourceRequested = function(request){
    console.log('Request ' + JSON.stringify(request, undefined, 4));
};

// example:
// Receive {
//     "contentType": "text/html; charset=UTF-8",
//     "headers": [
//         {
//             "name": "Accept-Ranges",
//             "value": "bytes"
//         },
//         {
//             "name": "ETag",
//             "value": "\"542-1398040235000\""
//         },
//         {
//             "name": "Date",
//             "value": "Mon, 21 Apr 2014 13:41:23 GMT"
//         },
//         {
//             "name": "Cache-Control",
//             "value": "public, max-age=0"
//         },
//         {
//             "name": "Last-Modified",
//             "value": "Mon, 21 Apr 2014 00:30:35 GMT"
//         },
//         {
//             "name": "Content-Type",
//             "value": "text/html; charset=UTF-8"
//         },
//         {
//             "name": "Content-Length",
//             "value": "542"
//         },
//         {
//             "name": "Connection",
//             "value": "keep-alive"
//         }
//     ],
//     "id": 1,
//     "redirectURL": null,
//     "stage": "end",
//     "status": 200,
//     "statusText": "OK",
//     "time": "2014-04-21T13:41:24.163Z",
//     "url": "http://localhost/"
// }
page.onResourceReceived = function(response){
    console.log('Receive ' + JSON.stringify(response, undefined, 4));
};
page.open(url);
