function removeS (str) {
    let newArr = str.split('')
    newArr.shift()
    newArr.pop()
    return newArr 
}