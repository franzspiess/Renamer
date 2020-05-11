// chrome.tabs.onUpdated.addListener(info => {
//     chrome.tabs.query({ active: true }, (tabArray) => {
//       const tab = tabArray.find(tab => tab.id === info)
//       if (tab.status === 'completed') {



//       }

//   })
// })
$(document).ready(async () => {

    // document.body.innerText.replace('Trump', 'Crybaby')
    // const html = document.body
    // document.body = document.body.replace('Trump', 'Crybaby')
    const replacements = await getStoragePromise()
    replaceTextNodes(document.querySelector('body'))
    function replaceTextNodes(el) {
        el.childNodes.forEach((node) => {
            if (node.nodeType === 3) {
                // Text node:
                const oldText = node.textContent
                const newText = Object.keys(replacements).reduce((acc, key) => {
                    console.log(acc, key)
                    return acc.replace(new RegExp(key, 'g'), replacements[key])
                }, oldText)
                if (newText !== oldText) {
                    node.textContent = newText
                }
            } else if (node.nodeType === 1) {
                // Element node, recurse:
                replaceTextNodes(node);
            }
        });
       

    // var all = [...document.getElementsByTagName("p"), ...document.getElementsByTagName("a"),...document.getElementsByTagName("span"),...document.getElementsByTagName("h*")]
    // const all = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, span, th, tr, li")
    // console.log(all)
    // let trumpArr = []

    // for (var i = 0, max = all.length; i < max; i++) {

    //     let text = all[i].innerText
    //     if (text &&
    //         Object.keys(replacements).some(value => text.indexOf(value) !== -1) &&
    //         text.indexOf('{') === -1) {
    //         trumpArr.push(all[i])
    //     }
    // }
    // console.log(trumpArr)
    // for (var i = 0, max = trumpArr.length; i < max; i++) {
    

    // console.log(trumpArr[i], 'BEFORE')
    // trumpArr[i].innerText = trumpArr[i].innerText.replace(new RegExp('Cuomo','g'), replacements['Cuomo'])
    // trumpArr[i].textContent = Object.keys(replacements).reduce((acc, key) => {
    //     console.log(acc, key)
    //     return acc.replace(new RegExp(key, 'g'), replacements[key])

    // }, trumpArr[i].textContent)
    // }


    

}



    // console.log(trumpArr[i].innerText, 'AFTER')
    // findAndReplaceDOMText(trumpArr[i], {
    //     find: '/Trump/',
    //     replace: 'Crybaby'
    // })
})

function getStoragePromise() {
    return new Promise((res) => {
        chrome.storage.local.get(['replacements'], ({ replacements }) => {
            res(replacements)
        })
    })
  }


// (function () {})() IIFE


    // console.log('AAAAA')
    // // document.body.innerText.replace('Trump', 'Crybaby')
    // // const html = document.body
    // // document.body = document.body.replace('Trump', 'Crybaby')
    // const replacements = {
    //     Trump: 'Whiny Little Bitch',
    //     Pence: 'SecretlyGay',
    //     Newsom: 'McDreamy',
    //     Cuomo: 'Beefcake',
    //     Biden: 'Happy Grandpa',
    //     McConnell: 'Evil Turtle',
    //     Johnson: 'Pathetic Clown',
    //     Mnuchin: 'John Oliver Impersonator',
    //     Pelosi: 'Geriatric Wonderwoman',
    //     Schumer:'Old Man Who Is Lost',
    //     Obama: 'God',
    //     Fauci: 'Knows It All',
    // }


    // // var all = [...document.getElementsByTagName("p"), ...document.getElementsByTagName("a"),...document.getElementsByTagName("span"),...document.getElementsByTagName("h*")]
    // const all = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, span, th, tr, li")
    // console.log(all)
    // let trumpArr = []

    // for (var i = 0, max = all.length; i < max; i++) {

    //     let text = all[i].innerText
    //     if (text &&
    //         Object.keys(replacements).some(value => text.indexOf(value) !== -1) &&
    //         text.indexOf('{') === -1) {
    //         trumpArr.push(all[i])
    //     }
    // }
    // console.log(trumpArr)
    // // for (var i = 0, max = trumpArr.length; i < max; i++) {
    //     replaceTextNodes(document.querySelector('body'))

    //     // console.log(trumpArr[i], 'BEFORE')
    //     // trumpArr[i].innerText = trumpArr[i].innerText.replace(new RegExp('Cuomo','g'), replacements['Cuomo'])
    //     // trumpArr[i].textContent = Object.keys(replacements).reduce((acc, key) => {
    //     //     console.log(acc, key)
    //     //     return acc.replace(new RegExp(key, 'g'), replacements[key])

    //     // }, trumpArr[i].textContent)
    // // }


    // function replaceTextNodes(elm) {
    //     elm.childNodes.forEach((node) => {
    //         if (node.nodeType === 3) {
    //             // Text node:
    //             node.textContent = Object.keys(replacements).reduce((acc, key) => {
    //                 console.log(acc, key)
    //                 return acc.replace(new RegExp(key, 'g'), replacements[key])
    //             }, node.textContent)
    //         } else if (node.nodeType === 1) {
    //             // Element node, recurse:
    //             replaceTextNodes(node);
    //         }
    //     });


    //     // console.log(trumpArr[i].innerText, 'AFTER')
    //     // findAndReplaceDOMText(trumpArr[i], {
    //     //     find: '/Trump/',
    //     //     replace: 'Crybaby'
    //     // })
    // }

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