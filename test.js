function takeNum (num) {
   
   //turn in into a string 
   let str = num.toString()
   //empty string to add number
   let emStr = ""
   //loop to add each number to the new string
   for (let i=0; i<=num; i++) {
      //one or zero?
      if (i%2 === 0) {
         emStr = emStr + i%2
      } 
   }
   
   //
}