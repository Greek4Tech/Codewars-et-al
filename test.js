function mults (num1, num2) {
    let arr = []
    for (let i=num1; i<=num2; i=i+num1) {
        arr.push(i)
        return arr
    } 
}

function takeNum (num) {
    return String(num).split('').map(Number).reverse()
}

function takeIn (arr) {
    return arr.filter(r => r % 2===0 ? newArr.push(r) : )
}