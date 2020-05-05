$(document).ready(() => {
    
    const keepOpenInput = $('#keepOpen')

    keepOpenInput.click(() => {
        chrome.runtime.sendMessage('CLICK'
        , (response) => {
            console.log(response, 'CLICKED')
        })
    })

})
