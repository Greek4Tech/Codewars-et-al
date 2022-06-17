// The table with id="age-table".
let table = document.getElementById('age-table')

// All label elements inside that table (there should be 3 of them).
table.getElementsByTagName('label')
//OR
document.querySelectorAll('#age-table label')

// The first td in that table (with the word “Age”).
table.rows[0].cells[0]
// or
table.getElementsByTagName('td')[0]
// or
table.querySelector('td')

// The form with name="search".
let form = document.getElementsByName('search')[0]
// or, form specifically
document.querySelector('form[name="search"]')

// The first input in that form.
form.getElementsByTagName('input')[0]
// or
form.querySelector('input')

// The last input in that form.
let inputs = form.querySelectorAll('input') // find all inputs
inputs[inputs.length-1] // take the last one

// Open the page table.html in a separate wi