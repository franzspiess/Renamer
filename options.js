$('document').ready(() => {
  const container = $('body')
  const form = $('#options-form')
  const inputContainer = $('#input-container')
  populateForm()

  function populateForm() {
    getStoragePromise()
      .then(replacements => {
        Object.keys(replacements).forEach((key, i) => {
          const inputRow = getFormInputs({
            key,
            i,
            value: key,
            replacements
          })
          inputContainer.append(inputRow)
        })
        const inputRow = getFormInputs({
          key: Object.keys(replacements).length,
          i: Object.keys(replacements).length,
          name: 'new',
        })
        inputContainer.append(inputRow)

        form.append(`
        <div id="submit-container" class="level submit">
        <input class="button" type='submit' id='submitButton' value="SAVE"/>
        </div>
        `)
      })
  }

  form.submit((e) => {
    e.preventDefault()
    const replacements = createTranslations()
    chrome.storage.local.set({replacements}, () => {
      $('#submit-container').empty()
      $('#submit-container').append('<span>DONE</span>')
    })

  })

  $('#addBtn').click((e) => {
    console.log(inputContainer.children().length)
    const inputRow = getFormInputs({
      key: inputContainer.children().length,
      i: inputContainer.children().length,
      name: 'new',
    })
    inputContainer.append(inputRow)
    e.preventDefault()
  })

})

function getFormInputs({
  key,
  i,
  value = '',
  replacements = {} }) {
  return `<div class='level'>
  <div class="field">
  <label class="label">To be replaced</label>
  <div class="control">
  <input 
    class="input"
    id='name-${i}-' 
    name='${key}' 
    value='${value}'
    autocomplete='off'
    '>
  </div>
  </div>
  <div class="field">
  <span class='arrow'> \u2192 </span>
  </div>
  <div class="field">
  <label class="label">Replacement</label>
  <div class="control">
  <input 
  class="input"
  id='value-${i}-' 
  name='${key} '
  value='${replacements[key] || ""}'>
  </div>
  </div>
</div>`
}

function createTranslations() {
  const names = $('form [id^="name-"')
  const newReplacements = {}
  console.log(names.length, 'CCCC')
  for (let i=0; i < names.length; i++) {
      const name = $(`#name-${i}-`).val()
      const value = $(`#value-${i}-`).val()
      if (name && name.length > 4) {
        newReplacements[name] = value
      }
  }
  return newReplacements
}


