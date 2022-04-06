function eachCons(array, n) {
    //create a new array to return
    let res = [];
    
    //we are creating loop
    //i=0 => res.push(array.slice(0,5))
    //i=0 => res.push(array.slice(1,5))
    //i=0 => res.push(array.slice(2,5))
    //i=0 => res.push(array.slice(3,5))
    //i=0 => res.push(array.slice(4,5))
    
    for (let i = 0; i < array.length-1; i++) {
      res.push(array.slice(i, i + n));
    }
    
    //filtering the results
    return res.filter(e => e.length === n);
  }

  eachCons([1,2,3,4,5,6,7,8], 5)


  function eachConsTwo(arr, n) {
    let newArr = []
    for (let i=0; i<=arr.length-1; i++){
      newArr.push(arr.slice(i,i+n))
    }
    return newArr.filter(e => e.length===n)
  }