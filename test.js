// each_cons([1,2,3,4], 2)
//   #=> [[1,2], [2,3], [3,4]]

// each_cons([1,2,3,4], 3)
//   #=> [[1,2,3],[2,3,4]]


function cascade (arr, num) {
  let result = []
  for (let i=0; i<arr.length; i++){
    result.push(arr.slice(i,i+num))
  }
  return result.filter(x => x.length ===num)
}