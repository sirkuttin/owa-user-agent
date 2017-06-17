var requestFilter = {
	urls: ["*://*/owa/*", "*://*/OWA/*"]
};

chrome.webRequest.onBeforeSendHeaders.addListener(function(details) {
	var headers = details.requestHeaders;
	for(var i = 0, l = headers.length; i < l; ++i) {
		if( headers[i].name === 'User-Agent' ) {
			break;
		}
	}
	if(i < headers.length) {
            // headers[i].value = "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2049.0 Safari/537.36";
            // change for issue #3
            headers[i].value = headers[i].value.replace(/(Mozilla\/\d+\.\d+ )\([^\)]+\)/, "\$1(Windows NT 6.1; WOW64)");
	}
	return {requestHeaders: headers};
}, requestFilter, ['requestHeaders','blocking']);
