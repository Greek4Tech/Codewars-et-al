function cascading (arr, num) {
let newArr = []
for (let i=0; i<arr.length; i++) {
    newArr.push(arr.slice(i, i+num))
} return newArr.filter(n=> n.length===num)
}

cascading ([0,1,2,3,4,5,6], 3)

function integer (num) {
    let arr = []
    for (let i=num; i<=0; i--) {
        arr.push(i)
    } return arr
}

function returnElems (arr) {
    return arr.filter(n,i=> n%i===0)
}