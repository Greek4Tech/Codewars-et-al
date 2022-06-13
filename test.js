const letter = ['a', 'b', 'c', 'd' , 'b', 'b'];
let count = {};
letter.forEach(item => {
  if (count[item]) {
    count[item]++ 
  } else {
    count[item] = 1
} 
})
console.log(count)
