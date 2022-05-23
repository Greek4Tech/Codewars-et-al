//multiple of own index
    //element/index === 0

function multipleArr (arr) {
   return arr.filter((e,i) => e % i ===0)
}