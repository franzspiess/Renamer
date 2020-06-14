$(document).ready(async () => {
    const {
        domain,
        domains,
        replacements
    } = await getStoragePromise()
    console.log(domain, domains, replacements)
    if (domains.includes(domain)) {
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
            })
        }
    }
});


function getStoragePromise() {
    return new Promise((res) => {
        chrome.storage.local.get(['domain', 'domains', 'replacements'], (response) => {
            res(response)
        })
    })
}