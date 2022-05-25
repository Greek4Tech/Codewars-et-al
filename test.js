if (!localStorage) {
    localStorage.setItem('botScore', 0)
} localStorage.getItem('botScore', botScore)

function botScore () {
    botScore = botScore + 1
    localStorage.setItem('botScore', botScore)
    
}