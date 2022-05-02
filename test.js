if(!localStorage.getItem('botScore')){
    localStorage.setItem('botScore',0)
}

document.querySelector('button').addEventListener('click', anotherOne)

function anotherOne () {
    let botScore = botScore + 1 
    localStorage.setItem('botScore', botScore)
    
}