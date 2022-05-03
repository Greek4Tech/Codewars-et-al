//player1 & player 2
let player1
let player2 
 
let player1Turn = true

//who starts first 

//how does the software know who is playing - could it be alternate (player1, then player2 etc.)

//create a variable that defines if the button is already occupied

let tileOneIsOccupied = false
let tileTwoIsOccupied = false
let tileThreeIsOccupied = false
let tileFourIsOccupied = false
let tileFiveIsOccupied = false
let tileSixIsOccupied = false
let tileSevenIsOccupied = false
let tileEightIsOccupied = false
let tileNineIsOccupied = false

//9 event listeners

document.querySelector('#one').addEventListener('click', buttonOne)
document.querySelector('#two').addEventListener('click', buttonTwo)
document.querySelector('#three').addEventListener('click', buttonThree)
document.querySelector('#four').addEventListener('click', buttonFour)
document.querySelector('#five').addEventListener('click', buttonFive)
document.querySelector('#six').addEventListener('click', buttonSix)
document.querySelector('#seven').addEventListener('click', buttonSeven)
document.querySelector('#eight').addEventListener('click', buttonEight)
document.querySelector('#nine').addEventListener('click', buttonNine)

//who's turn is it
function buttonOne () {
    //Does the tile has already a mark?
    if (tileOneIsOccupied) {
        alert('tile already occupied, choose another tile')
        //if it doesn't check if it's player1's turn
        //if it is:
    } else {
        if (player1Turn) {
            document.querySelector('.one').innerHTML = "X" 
            //since player1 just played, not is player2's turn
            player1Turn = false
            //mark the tile as occupied
            tileOneIsOccupied = true
            //if it isn't then: 
        } else {
                document.querySelector('.one').innerHTML = "O" 
                player1Turn = true
                tileOneIsOccupied = true
        }
            }
}

function buttonTwo () {
    if (tileTwoIsOccupied) {
        alert('tile already occupied')
    } else {
        if (player1Turn) {
            document.querySelector('.two').innerHTML = "X" 
            player1Turn = false
            tileTwoIsOccupied = true
        } else {
                document.querySelector('.two').innerHTML = "O" 
                player1Turn = true
                tileTwoIsOccupied = true
        }
            }
}

function buttonThree () {
    if (tileThreeIsOccupied) {
        alert('tile already occupied')
    } else {
        if (player1Turn) {
            document.querySelector('.three').innerHTML = "X" 
            player1Turn = false
            tileThreeIsOccupied = true
        } else {
                document.querySelector('.three').innerHTML = "O" 
                player1Turn = true
                tileThreeIsOccupied = true
        }
            }
}

function buttonThree () {
    if (tileThreeIsOccupied) {
        alert('tile already occupied')
    } else {
        if (player1Turn) {
            document.querySelector('.three').innerHTML = "X" 
            player1Turn = false
            tileThreeIsOccupied = true
        } else {
                document.querySelector('.three').innerHTML = "O" 
                player1Turn = true
                tileThreeIsOccupied = true
        }
            }
}

function buttonFour () {
    if (tileFourIsOccupied) {
        alert('tile already occupied')
    } else {
        if (player1Turn) {
            document.querySelector('.four').innerHTML = "X" 
            player1Turn = false
            tileFourIsOccupied = true
        } else {
                document.querySelector('.four').innerHTML = "O" 
                player1Turn = true
                tileFourIsOccupied = true
        }
            }
}

function buttonFive () {
    if (tileFiveIsOccupied) {
        alert('tile already occupied')
    } else {
        if (player1Turn) {
            document.querySelector('.five').innerHTML = "X" 
            player1Turn = false
            tileFiveIsOccupied = true
        } else {
                document.querySelector('.five').innerHTML = "O" 
                player1Turn = true
                tileFiveIsOccupied = true
        }
            }
}

function buttonSix () {
    if (tileFiveIsOccupied) {
        alert('tile already occupied')
    } else {
        if (player1Turn) {
            document.querySelector('.six').innerHTML = "X" 
            player1Turn = false
            tileSixIsOccupied = true
        } else {
                document.querySelector('.six').innerHTML = "O" 
                player1Turn = true
                tileSixIsOccupied = true
        }
            }
}

function buttonSeven () {
    if (tileSevenIsOccupied) {
        alert('tile already occupied')
    } else {
        if (player1Turn) {
            document.querySelector('.seven').innerHTML = "X" 
            player1Turn = false
            tileSevenIsOccupied = true
        } else {
                document.querySelector('.seven').innerHTML = "O" 
                player1Turn = true
                tileSevenIsOccupied = true
        }
            }
}

function buttonEight () {
    if (tileEightIsOccupied) {
        alert('tile already occupied')
    } else {
        if (player1Turn) {
            document.querySelector('.eight').innerHTML = "X" 
            player1Turn = false
            tileEightIsOccupied = true
        } else {
                document.querySelector('.eight').innerHTML = "O" 
                player1Turn = true
                tileEightIsOccupied = true
        }
            }
}

function buttonNine () {
    if (tileNineIsOccupied) {
        alert('tile already occupied')
    } else {
        if (player1Turn) {
            document.querySelector('.nine').innerHTML = "X" 
            player1Turn = false
            tileNineIsOccupied = true
        } else {
                document.querySelector('.nine').innerHTML = "O" 
                player1Turn = true
                tileNineIsOccupied = true
        }
            }
}

//winning conditions 
