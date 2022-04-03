function nonConse (arr) {
    //consecutive: [ind(0) = 2, ind(1) =3, ind(2) = 4, ind(3) = 5] => 
    for (let i=0; i<=arr.length-1; i++) {
    //if Math.abs((index 0 - index (0+1)) > 1 { then alert us}
        if (arr[i] + 1 !== arr[i+1]) {
            return `the first non-consecutive number is ${arr[i+1]}`
        }}
            return 'everything looks okay'
        }