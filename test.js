function takeInArr (arr) {
  let result = 0 
  if (!arr) {
    return result 
  } else {
    return result = arr.filter(n => n>0).reduce((x,y) => x+y,0)
  }
}

function returnSum (arr) {
  return arr.reduce((x,y) => x + y*y,0)
}

//n=5 --> [5,4,3,2,1]

function opposite (num) {
  let arr = []
  for (let i=num; i<=1; i--) {
    arr.push(i)
  } return arr
}