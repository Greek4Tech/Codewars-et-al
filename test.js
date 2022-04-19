function cascade (arr, num) {
  let newArr = []
  //we want a forloop 
  for (let i=0; i<arr.length; i++) {
     newArr = arr.slice(i, num)
  } return arr
}

//[5,6,7,8,9,10] num =3 
//=> 567 8910