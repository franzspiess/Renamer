
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

// chrome.tabs.onUpdated.addListener(id => {
//   chrome.tabs.query({
//     status: 'complete',
//   }, (tabs) => {
//     const tab = tabs.find(el => el.id === id)
//     console.log(tab)
//     if (urlCheck(tab)) {
//       chrome.tabs.executeScript(id, {
//         file: 'content.js'
//       })
//     }
//   }
//   )
// })

// chrome.tabs.onActivated.addListener((tab) => {
//   const { tabId,url } = tab
//   if (urlCheck(url)) {
//     chrome.tabs.executeScript(tabId, {
//       file: 'content.js'
//     })
//   }
// })





// function urlCheck(tab) {
//   if (
//     tab &&
//     tab.url &&
//     tab.url.indexOf('http') !== -1
//     // &&
//     // tab.url.indexOf('mail.') === -1
//   ) return true
//   return false
// }

