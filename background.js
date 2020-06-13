
chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.local.set({
    domain:'',
    domains: [],
    replacements: {
     
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


chrome.tabs.onActivated.addListener((info) => {
  chrome.windows.getCurrent({ populate: true }, (window) => {
      new Promise(res => {
        res(getDomain(window.tabs.filter(tab => tab.active)[0].url))
      }).then((domain) => {
        setValuesInStorage({
          domain
        })
      })
  })
})

chrome.runtime.onMessage.addListener(
  (request, _, sendResponse) => {
    if (request.keepGroupOpen) {
      keepOpenClick('domains')
    }
    sendResponse('RECEIVED')
  });

  function keepOpenClick(key) {
    new Promise(res => {
      chrome.storage.local.get([key, 'domain'], (storage) => {
        const { domain } = storage
        const tabArray = storage[key]
        let resultArray = []
  
        if (tabArray.includes(domain)) {
          resultArray = [...tabArray.filter(tab => tab !== domain)]
        } else {
          resultArray = [...tabArray]
          if (domain !== 'noStandardUrl') {
            resultArray.push(domain)
          }
        }
        res(resultArray)
      })
    }).then(result => {
      setValuesInStorage({ [key]: result })
    })
  }

function getStoragePromise() {
  return new Promise((res) => {
    chrome.storage.local.get(['replacements'], ({ replacements }) => {
      res(replacements)
    })
  })
}

function setStorage(storageObj, cb) {
  chrome.storage.local.set({ replacements: storageObj }, () => {
    cb(arguments)
  })
}

function logger(args) {
  console.log('SET STORAGE:', JSON.stringify(args[0]))
}

function addInputs(node, empty = false) {
  empty && node.empty()
  const field = `<div class='row'>
<input  name='TEST' value=''><br/>
<span>TRANSLATES TO</span>
<input name='TEST' 'value=''><br/>
<input type='submit'>ADD TRANSLATION</button>
</div>`
  node.append(field)
}
function setValuesInStorage(setterObj) {
  chrome.storage.local.set(setterObj, () => {
    console.log('SET STORAGE IN ACTIVE TAB')
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

// {Trump: 'Whiny Little Bitch',
//       Pence: 'SecretlyGay',
//       Newsom: 'McDreamy',
//       Cuomo: 'Beefcake',
//       Biden: 'Happy Grandpa',
//       McConnell: 'Evil Turtle',
//       Johnson: 'Pathetic Clown',
//       Mnuchin: 'John Oliver Impersonator',
//       Pelosi: 'Geriatric Wonderwoman',
//       Schumer: 'Old Man Who Is Lost',
//       Obama: 'God',
//       Fauci: 'Knows It All',}

function getDomain(url) {
  if (url) {
    const domainRegex = url.match(/^(?:.*:\/\/)?(?:.*?\.)?([^:\/]*?\.[^:\/]*).*$/)
    return domainRegex ? domainRegex[1] : 'noStandardUrl'
  }
  return 'noStandardUrl'
}