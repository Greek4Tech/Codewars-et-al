function aboveBelow (x) {
    return x.split('').map(x => x<5 ? 0 : 5)
}