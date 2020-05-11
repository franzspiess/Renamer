
chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.local.set({
    replacements: {
      Trump: 'Whiny Little Bitch',
      Pence: 'SecretlyGay',
      Newsom: 'McDreamy',
      Cuomo: 'Beefcake',
      Biden: 'Happy Grandpa',
      McConnell: 'Evil Turtle',
      Johnson: 'Pathetic Clown',
      Mnuchin: 'John Oliver Impersonator',
      Pelosi: 'Geriatric Wonderwoman',
      Schumer: 'Old Man Who Is Lost',
      Obama: 'God',
      Fauci: 'Knows It All',
    }
  }, () => {
    console.log('SET REPLACEMENTS ON INSTALL')
  })

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

function getStoragePromise() {
  return new Promise((res) => {
      chrome.storage.local.get(['replacements'], ({ replacements }) => {
          res(replacements)
      })
  })
}

function setStorage(storageObj) {
  chrome.storage.local.set({replacements:storageObj}, () => {
      console.log('SET STORAGE:', JSON.stringify(storageObj))
  })
}

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

