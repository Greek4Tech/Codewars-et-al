function playsBanjo (name) {
    let firstLetter = name.atChar(0)
    if (firstLetter === 'R' || firstLetter === 'r') {
        return name + " plays the banjo"
    } 
    return name + " does not play the banjo"
}