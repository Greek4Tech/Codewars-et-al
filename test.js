function reverseArr (num) {
    let arr = []
    return String(num).split('').map(Number).reverse()
}