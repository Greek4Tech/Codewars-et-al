function revArr (num) {
   //create empty array
   let arr = []
   //break the number into strings
   let digits = num.toString().split('').reverse()
   return digits
}