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

// NOTICE: `onConsoleMessage` event handler is invoked before `evaluate()` returning
page.onConsoleMessage = function(msg){
    console.log('Got from `onCOnsoleMessage` event: ' + msg);
};
page.open(url, function(status){
    var title;
    if(status !== 'success'){
        console.log('Fail to load ' + url);
    }
    else{
        // NOTICE: `page.evaluate()` synchronize invoking callback
        title = page.evaluate(function(){
            console.log(document.title)
            return document.title;
        });
        console.log('Page title ' + title);
    }
    phantom.exit();
});
