$(document).ready(() => {
    const form = $('#myForm')
    const inputContainer =$('#inputContainer')

    getStoragePromise()
        .then(replacements => {
            Object.keys(replacements).forEach((key, i) => {
                const field = `<div class='row'>
                                <input id='key-${i}' name='${key}' value='${key}'>
                                <label>---></label>
                                <input id='value-${i}' name='${key} 'value='${replacements[key]}'>
                            </div>`
                inputContainer.append(field)
            })
            form.append(`<input type='submit' id='submitButton' />`)
        })

    form.submit((e) => {
        const newTranslation = form.serializeArray().reduce((acc, el, i, arr) => {

            if (i % 2 === 0) {
                acc[el.value] = arr[i + 1].value
            }
            return acc
        }, {})
        setStorage(newTranslation)
        e.preventDefault()
    })

    $('#addBtn').click(() => {
        console.log('clicked')
        const field = `<div class='row'>
                                <input  name='TEST' value=''>
                                <label>---></label>
                                <input name='TEST' 'value=''>
                            </div>`
        console.log(field)
        inputContainer.append(field)
    })
    console.log(form)
    console.log($('#addBtn'))
})


