$(document).ready(() => {
    const myForm = $('#myForm')
    const goToOptionsBtn = $('#go-to-options')
    const keepGroupOpenInput = $('#keepGroupOpen')
    addInputs(myForm, true)
    deriveInputState(keepGroupOpenInput)
    function deriveInputState(node) {

        const id = node.attr('id')
    
        if (id === 'keepGroupOpen') {
            chrome.storage.local.get(['domains', 'domain'], ({domains, domain}) => {
                node.prop('checked', domains.includes(domain))
            })
        }
    
    }
    keepGroupOpenInput.click(() => {
        chrome.runtime.sendMessage({
            keepGroupOpen: 'CLICK'
        }, () => {
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.update(tabs[0].id, {url: tabs[0].url});
            });
        })
    })


    goToOptionsBtn.click(() => {
        if (chrome.runtime.openOptionsPage) {
            chrome.runtime.openOptionsPage();
        } else {
            window.open(chrome.runtime.getURL('options.html'));
        }
    })

})
