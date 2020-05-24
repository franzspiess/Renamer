$(document).ready(() => {
    const myForm = $('#myForm')
    const goToOptionsBtn = $('#go-to-options')
    addInputs(myForm, true)


    myForm.submit((e) => {
        const newTranslation = myForm.serializeArray()
        getStoragePromise()
            .then(replacements => addToTranslation(newTranslation, replacements))
            .then(handleForm)
        e.preventDefault()
    })

    goToOptionsBtn.click(() => {
        if (chrome.runtime.openOptionsPage) {
            chrome.runtime.openOptionsPage();
        } else {
            window.open(chrome.runtime.getURL('options.html'));
        }
    })

    function handleForm(string) {
        switch (string) {
            case 'SUCCESS':
                displayMsg(string)
                setTimeout(addInputs, 5000)
        }
    }

    function displayMsg(string) {
        myForm.empty()
        myForm.append(`<span>${string}</span>`)
    }

    

})

function addToTranslation(newTranslation, replacements) {
    if (newTranslation.length === 2) {
        const [nameObj, valueObj] = newTranslation;
        const name = nameObj.value;
        const value = valueObj.value;
        if (!replacements[name]) {
            setStorage({
                ...replacements,
                [name]: value
            }, logger)
            return ('SUCCESS')
        }
        return ('EXISTS')
    }
    return ('FILL_ERROR')
}

// getStoragePromise()
// .then(replacements => {
//     Object.keys(replacements).forEach((key, i) => {
//         const field = `<div class='row'>
//                         <input id='key-${i}' name='${key}' value='${key}'>
//                         <label>---></label>
//                         <input id='value-${i}' name='${key} 'value='${replacements[key]}'>
//                     </div>`
//         inputContainer.append(field)
//     })
//     form.append(`<input type='submit' id='submitButton' />`)
// })

// const newTranslation = form.serializeArray().reduce((acc, el, i, arr) => {

//     if (i % 2 === 0) {
//         acc[el.value] = arr[i + 1].value
//     }
//     return acc
// }, {})
// setStorage(newTranslation)