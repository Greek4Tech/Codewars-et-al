function takeInArr (arr) {
  let result = 0 
  if (!arr) {
    return result 
  } else {
    return result = arr.filter(n => n>0).reduce((x,y) => x+y,0)
  }
}