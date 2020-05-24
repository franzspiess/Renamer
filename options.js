$('document').ready(() => {
  const container=$('body')
  const form = $('#options-form')
  const inputContainer = $('#input-container')
  populateForm()

  function populateForm() {
    getStoragePromise()
      .then(replacements => {
        Object.keys(replacements).forEach((key, i) => {
          const inputRow = getFormInputs({
            key,i, replacements
          })
          inputContainer.append(inputRow)
        })
        form.append(`<input type='submit' id='submitButton' />`)
      })
  }

  $('#addBtn').click((e) => {
    console.log('AAA')
    addInputs(inputContainer)
    e.preventDefault()
  })

})

function getFormInputs({
  key, 
  i, 
  replacements}) {
  return `<div class='row'>
  <input 
    id='key-${i}' 
    name='${key}' 
    value='${key}'
    autocomplete='off'
    '>
  <span class='arrow'>\u2192</span>
  <input 
  id='value-${i}' 
  name='${key} '
  value='${replacements[key]}'>
</div>`
}

