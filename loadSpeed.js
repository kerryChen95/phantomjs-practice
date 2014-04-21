var page = require('webpage').create(),
    system = require('system'),
    startTime, url;

if(system.args.length === 1){
    console.log('Usage: loadspeed.js <some URL>');
    phantom.exit();
}

url = system.args[1];
startTime = Date.now();
page.open(url, function(status){
    if(status !== 'success'){
        console.log('Fall to load the URL');
    }
    else{
        console.log('Loading time ' + (Date.now() - startTime) + ' milliseconds');
    }
    phantom.exit();
});
