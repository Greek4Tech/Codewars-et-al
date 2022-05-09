function totalsScores (games) {
    let total = 0 
    games.map(n=> {
        if (n[0]>n[2]) {
            total = total + 3
        } else if (n[0] === n[2]) {
            total = total + 1
        }
    })
    return total
}






































// function points (games) {
//     let total = 0 
//     games.map(game => {
//         if (game[0] === game[2]) {
//             total = total + 1
//         } else if (game[0] > game[2]) {
//             total = total + 3
//         }
//     })
//     return total
// }