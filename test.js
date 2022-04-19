function positiveSum(arr) {
    //filter the positive
    const result = arr.filter(e => e>0)
    //add things 
    const resultMore = result.map(acc, c => acc+c, 0)
    return resultMore
  }