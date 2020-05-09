$(document).ready(() => {
    const replacements = {
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

    const form = $('#myForm')

    Object.keys(replacements).forEach((key, i) => {
        console.log(key, i)
        const field = `<div class='row'>
                        <input id='key-${i}' value='${key}'>
                        <input id='value-${i}' value='${replacements[key]}'>
                    </div>`
        console.log(form)
        console.log(field)
        form.append(field)
    })

    form.append(`<input type='submit' id='submitButton' />`)

    $('submitButton').click((e) => {
        (function clickHandler(e) {
            e.preventDefault()
            console.log(arguments)
        })()
    })


})
