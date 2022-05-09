function reverseArr (num) {
    let arr = []
    return String(num).split('').map(Number).reverse()
}

let greenEnergy = obj = obj['Fuel Type'] = 'avocado oil'

function evensNums (arr) {
    let evens = []
    arr.forEach (n=> n%2===0 ? evens.push(n) : 0)
    return evens 
}

function findsWolves (arr) {
const position = arr.reverse().indexOf('wolf')
return position === 0 ? alert ('go aways wolvesss') : alert (`Sheep ${position} be aware`)
}