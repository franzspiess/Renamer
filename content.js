// chrome.tabs.onUpdated.addListener(info => {
//     chrome.tabs.query({ active: true }, (tabArray) => {
//       const tab = tabArray.find(tab => tab.id === info)
//       if (tab.status === 'completed') {



//       }

//   })
// })

// document.body.innerText.replace('Trump', 'Crybaby')
// const html = document.body
// document.body = document.body.replace('Trump', 'Crybaby')

// var all = [...document.getElementsByTagName("p"), ...document.getElementsByTagName("a"),...document.getElementsByTagName("span"),...document.getElementsByTagName("h*")]
var all = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a, span, th, tr")

var trumpArr = []

for (var i = 0, max = all.length; i < max; i++) {
    let text = all[i].innerText
    if (text && text.indexOf('Trump') !== -1 && text.indexOf('{') === -1) {
        trumpArr.push(all[i])
    }
}
for (var i = 0, max = trumpArr.length; i < max; i++) {
    console.log(trumpArr[i])
    trumpArr[i].innerText = trumpArr[i].innerText.replace('Trump', 'Crybaby')
    // findAndReplaceDOMText(trumpArr[i], {
    //     find: '/Trump/',
    //     replace: 'Crybaby'
    // })
}

// console.log(all.length, trumpArr.length)
// console.log('AAAA')
// console.log(document.getElementsByTagName('p'))
