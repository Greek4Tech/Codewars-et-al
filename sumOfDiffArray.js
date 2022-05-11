function sumsArr (arr) {
    arr.sort((a,b) => b - a)
    let sum = 0
    for  (let i = arr.length-1; i>0; i--) {
        sum += arr [i] - arr[i-1]
    }
    return sum 
}