function sumsArr (arr) {
    arr.sort((a,b) => a - b)
    let sum = 0
    for  (let i = arr.length-1; i>0; i--) {
        sum += arr [i] - arr[i-1]
    }
    return sum 
}

sumsArr([5,10,15,20])

//sumsArr (arr)
//sums([5,10,15,20]) => 20 - 15 + 15 - 10 + 10 - 5