function positiveSum(arr) {
    //we add (reduce) (a => index; b=>value) => add values if they are greater than 0
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
 }

 var summation = function (num) {
    let result = 0;
    for (var i = 1; i <= num; i++) {
      result += i;
    }
    
    return result;
  }