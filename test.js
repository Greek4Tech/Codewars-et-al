function capitalize(s){
  //even  indexes => index % 2 === 0
  //even indexes
  let evenIndex =[]
  let oddIndex =[]
  
  let splitIndex = s.split('')
  
  for (let i=0; i<splitIndex.length; i++) {
    if (i % 2 == 0) {
      evenIndex.push(splitIndex[i].toUpperCase())
    } else {
      evenIndex.push(splitIndex[i])
    }
    
  for (let i=0; i<splitIndex.length; i++) {
    if (i % 2 != 0) {
      oddIndex.push(splitIndex[i].toUpperCase())
    } else {
      oddIndex.push(splitIndex[i])
    }
    
    
  } return `[${evenIndex}, ${oddIndex}]`

  }}