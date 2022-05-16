// totalsScores(['1:1','2:2','3:3','4:4','2:2','3:3','4:4','3:3','4:4','4:4'])

function totalsScores (arr) {
    let sum = 0 
    arr.forEach(n=> {
        if (n[0]> n[2]) {
            sum = sum + 3
        } return sum 
    })
}