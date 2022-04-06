function findMultiples(int,limit) {
let res = []
for(let i=int; i<=limit; i+=int) {
    res.push(i)
} 
console.log(res) 
}