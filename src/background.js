var requestFilter = {
	urls: ["*://*/owa/*", "*://*/OWA/*", "*://teams.microsoft.com/*"]
};

chrome.webRequest.onBeforeSendHeaders.addListener(function(details) {
	var headers = details.requestHeaders;

	userAgentHeaderIndex = findUserAgentHeaderIndex(headers);
	if(userAgentHeaderIndex) {
            // headers[i].value = "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2049.0 Safari/537.36";
            // change for issue #3
            headers[userAgentHeaderIndex].value = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134";
	}
	return {requestHeaders: headers};
}, requestFilter, ['requestHeaders','blocking']);

function findUserAgentHeaderIndex(headers){
	for(var i = 0, l = headers.length; i < l; ++i) {
		if( headers[i].name === 'User-Agent' ) {
			return i;
		}
	}
	return null;
}
