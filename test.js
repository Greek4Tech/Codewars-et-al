function leastLarger (num,ind) {
  let minNum = num[0]
  let smallestInd
  for (let i=0; i<num.length; i++)
  if (num[i]<=minNum) {
    minNum = num[i]
    smallestInd = i
  }
  console.log(minNum)
  if (smallestInd > ind) {
    return ind
  } return -1
}

leastLarger ([4,1,3,5,6],0)
