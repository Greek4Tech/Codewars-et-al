//Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.
function testing() {
let input = prompt('give a number')
while (input<100) {
    alert('give a number greater than 100')
    let additional = prompt('give another number')
} console.log(input)
}