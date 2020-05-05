// chrome.tabs.onUpdated.addListener(info => {
//     chrome.tabs.query({ active: true }, (tabArray) => {
//       const tab = tabArray.find(tab => tab.id === info)
//       if (tab.status === 'completed') {



//       }

//   })
// })
(function () {
console.log('AAAAA')
// document.body.innerText.replace('Trump', 'Crybaby')
// const html = document.body
// document.body = document.body.replace('Trump', 'Crybaby')
const replacements = {
    Trump: 'Whiny Little Bitch',
    Pence: 'SecretlyGay',
    Newsom: 'McDreamy',
    Cuomo: 'Beefcake',
    Biden: 'Happy Grandpa',
    McConnel: 'Evil Turtle'
  }
  
  
// var all = [...document.getElementsByTagName("p"), ...document.getElementsByTagName("a"),...document.getElementsByTagName("span"),...document.getElementsByTagName("h*")]
const all = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, span, th, tr, li")
console.log(all)
let trumpArr = []

for (var i = 0, max = all.length; i < max; i++) {
    let text = all[i].innerText
    if (text &&
        Object.keys(replacements).some(value => text.indexOf(value) !== -1) &&
        text.indexOf('{') === -1) {
        trumpArr.push(all[i])
    }
}
console.log(trumpArr)
for (var i = 0, max = trumpArr.length; i < max; i++) {
    console.log(trumpArr[i], 'BEFORE')
    // trumpArr[i].innerText = trumpArr[i].innerText.replace(new RegExp('Cuomo','g'), replacements['Cuomo'])
    trumpArr[i].innerText = Object.keys(replacements).reduce((acc, key) => {
        console.log(acc, key)
        return acc.replace(new RegExp(key, 'g'), replacements[key])
        
    }, trumpArr[i].innerText)

    console.log(trumpArr[i].innerText, 'AFTER')
    // findAndReplaceDOMText(trumpArr[i], {
    //     find: '/Trump/',
    //     replace: 'Crybaby'
    // })
}
})()
// console.log(all.length, trumpArr.length)
// console.log('AAAA')
// console.log(document.getElementsByTagName('p'))
// (function () {
//     class DomManipulator {
//         constructor(dict) {
//             this.dict = dict
//             this.all = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, span, th, tr, li")
//         }
//         logger() {
//             console.log(this)
//         }
//         findRelevantNodes () {
//             const keys = Object.keys(this.dict)
//             this.all.forEach(node => {
//                 console.log(node)
//                 node.innerText = keys.reduce((acc,key) => {
//                     acc.replace(new RegExp(key, 'g'))
//                     return acc
//                 }, node.innerText)
//                 console.log(node.innerText)
//             })

//         }

//     }

//     const letsManipulate = new DomManipulator({
//         Trump: 'Whiny Little Bitch',
//         Pence: 'SecretlyGay',
//         Newsom: 'McDreamy',
//         Cuomo: 'Beefcake',
//         Biden: 'Happy Grandpa',
//     })
//     letsManipulate.findRelevantNodes()
// })()

// (
//     text.indexOf('Trump') !== -1 ||
//     text.indexOf('Pence') !== -1 ||
//     text.indexOf('Newsom') !== -1 ||
//     text.indexOf('Cuomo') !== -1 ||
//     text.indexOf('Biden') !== -1)
//     && 

// trumpArr[i].innerText.reduce
//         .replace(/Trump/g, 'Whiny Little Bitch')
//         .replace(/Pence/g, 'SecretlyGay')
//         .replace(/Newsom/g, 'McDreamy')
//         .replace(/Cuomo/g, 'Beefcake')
//         .replace(/Biden/g, 'Happy Grandpa')