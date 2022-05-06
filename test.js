function sumMix(x){
  return x.reduce ((a,c) => a+ Number(c),0 )
  }

  function twoSort(s) {
    let firstWord = s.sort((a,b)=>a-b).charAt(0)
    return firstWord
    }