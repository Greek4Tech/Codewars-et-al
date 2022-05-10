function warnSheep (arr) {
    let position = arr.reverse().indexOf('wolf')
    return position === 0 ? 'go away wolf' : `care sheep, wolf is behind you`
}

// [s, s, s, w, s]
// [0, 1, 2, 3, 4]
// [s, w, s, s, s]

//position of wolf is 3
//reverse is 1 