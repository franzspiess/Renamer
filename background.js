chrome.runtime.onInstalled.addListener(function () {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: { schemes: ['http', 'https', 'chrome'] },
      })
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});

chrome.runtime.onMessage.addListener(
  
  function(message, sender, sendResponse) {
    console.log(message)
    if (message == 'CLICK'){
      chrome.tabs.executeScript({
        file: 'findAndReplaceDOMText.js'
      }, (result) => {
        chrome.tabs.executeScript({file: 'content.js'})
      });
    }
    sendResponse('RECEIVED')
 });
