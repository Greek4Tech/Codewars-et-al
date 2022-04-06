// function eachCons(array, n) { 
//     let res = []; 
//         for(let i = 0; i < array.length; i++){ 
//             res.push(array.slice(i,i + n)); 
//         } 
//             return res.filter(e => e.length === n); 
// }

// cascade ([1,2,3,4,5,6,7], 3)

function cascade (arr, n) {
    let newArr =[];
    for (let i=0; i<=n; i++) {
        newArr.push(arr.slice(i, i+ n))
    } return newArr.filter(x => x.length ===n)
}

cascade ([1,2,3,4,5,6,7], 3)