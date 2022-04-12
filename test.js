function returnString (num) {
    let str = ''; 
        for (let i=1; i<=num; i++) {
            str = str + i%2
            return str
        }
}