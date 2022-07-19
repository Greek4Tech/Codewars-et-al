function thatProblem(str) {
    let newStr = str.split(',')
    newStr.pop()
    newStr.push()
    return newStr == '' ? null : newStr.join(' ')
}