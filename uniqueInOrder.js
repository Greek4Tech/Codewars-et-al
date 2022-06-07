var uniqueInOrder=function(iterable){
    //create empty array 
    let holderArray = []
    //lastletter = ''
    let lastLetter =''
    //loop through 
    for (let i=0; i<iterable.length; i++)
    //if not equal push element to empty array 
    if (iterable[i] !== lastLetter) {
        holderArray.push(iterable[i])
        lastLetter = iterable[i]
    } return holderArray
  }