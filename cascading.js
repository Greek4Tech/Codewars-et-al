function cascadingSubs (arr, num) {
    let newArr = []
    for (let i=0; i<arr.length; i++) {
        newArr.push(arr.slice(i,i+num))
    } return newArr.filter(n=> n.length === num )
}







// function cascade (arr, num) {
//     let newArr = []
//     for (let i=0; i<arr.length; i++) {
//         newArr.push(arr.slice(i,i+num))
//     } return newArr.filter(n => n.length === num)
// }

// cascade ([1,2,3,4,5,6,7,8], 3)