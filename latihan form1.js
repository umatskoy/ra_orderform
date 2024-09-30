const scriptURL = 'https://script.google.com/macros/s/AKfycbzEvHOZkkqh8-BVdqh645cNPzTTUJz303C1lFFCIqmtMFvkfwBUzqbBcoeLDT7hlqgK2w/exec'

const form = document.forms['orderForm']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
