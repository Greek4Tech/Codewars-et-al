//scores

function scores (arr) {
    let score = 0
    for (let i = 0 ; i< arr.length; i++) {
        if (arr[0] > arr[2]) {
            score = score + 3
        } else if (arr[0] === arr[2]) {
            score = score + 1
        } else {
            score = score + 0 
        } return score
    }
}