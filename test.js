function zeroOne (num) {
    let str = ''

    for (let i=1; i<=num; i++) 

    str = str + i%2

    return str

} 

//5 '10101'

function consecutive (arr) {
    for (let i=0; i<arr.length; i++){
        if (arr[i] + 1 != arr[i+1]) {
            break
            return ('not consecutive') 
    } else {
        return ('all good')
    }
}

consecutive ([1,2,3,6,11])