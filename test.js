function charSequence (str) {
    if (str = '' || str.length ===0) {
        return Null
    } str.split('').splice(1,-1).join(' ')
}