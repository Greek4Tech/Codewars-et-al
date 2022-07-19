function minMax (arr) {
    let arrSorted = arr.sort((a,b) => a - b)
    console.log(arrSorted)
    return `Min is ${arrSorted[0]}, Max is ${arrSorted[arr.length-1]}`

    let min = Math.min(...arr)
}