// function multiples (num, limit) {
//     let newArr = []
//         for (i=num; i<=limit; i=i+num) {
//             newArr.push(i)
//         } console.log(newArr)
// }

function cascading (arr, num) {
    let newArr = []
        //loop
            for (i=0; i<arr.length; i++) {
                newArr.push(arr.slice(i, i+num))
            } 
        //restructure 
        return newArr.filter(i, i.length === num)
}