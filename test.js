function takeInArr (arr) {
  let newArr = []
  //even number number%2=0
  arr.forEach(x => 
      {
          if (x%2===0) {
              newArr.push(x)
            }
  
  })
  return newArr
}