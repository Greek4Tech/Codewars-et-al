function pipe (arr) {
    let first = arr[0]
    let last = arr[arr.length-1]

    let newArr = []

    for (let i=first; i<=last; i++) {
        newArr.push(i)
    }

    return newArr

}