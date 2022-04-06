function nonNegative (n) {
    let res = []
    for (let i=1; i<=n; i++) {
    res.push(Math.pow(2,i))
    }
    console.log(res)
}