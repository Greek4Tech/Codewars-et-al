function removeEveryOther (arr) {
  //remove every second element
  let newArr =[]
  for (let i=0; i<arr.length; i++) {
    //every second element 0,1,2,3
    if (i%2==0) {

      newArr.push(arr[i])

    }
  } return newArr
}

//[a,b,c,d,e] => a, c, e