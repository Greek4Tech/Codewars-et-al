function findMultiples (num1,num2) {
//empty array
let arr = []
//loop that starts from num1 to num2
//last i? num1 or i = i + num1 
for (let i=num1; i<=num2; i+=num1) {
   //show only num2/i ===0 
   arr.push(i)
} return arr
}