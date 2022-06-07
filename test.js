function sumNums (arr) {
   //sum 
   let sum = 0 
   //loop 
   for(let i=0; i<arr.length; i++){
      if (arr[i] > 0) {
         sum = sum + arr[i]
      } 
   } return sum
}