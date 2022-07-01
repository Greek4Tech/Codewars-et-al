function each_cons (arr,num) {
  let newArr = []
  for (let i=0; i<arr.length; i++) {
    newArr = arr.slice(i,i+num)
  }
  return newArr
}