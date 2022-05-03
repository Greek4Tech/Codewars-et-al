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
            //can I run this function here
            
            //if it isn't then: 
        } else {
                document.querySelector('.one').innerHTML = "O" 
                player1Turn = true
                tileOneIsOccupied = true
                //can I run this function here
        } checkWinner()

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
            //can I run this function here
        
        } else {
                document.querySelector('.two').innerHTML = "O" 
                player1Turn = true
                tileTwoIsOccupied = true
                //can I run this function here
            
        } checkWinner()
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
            //can I run this function here
            
        } else {
                document.querySelector('.three').innerHTML = "O" 
                player1Turn = true
                tileThreeIsOccupied = true
                //can I run this function here
            
        } checkWinner()
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
        } checkWinner()
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
        } checkWinner()
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
        } checkWinner()
            }
}

function buttonSix () {
    if (tileSixIsOccupied) {
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
        } checkWinner()
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
        } checkWinner()
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
        } checkWinner()
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
        } checkWinner()
            }
}

//winning conditions 
//[1,2,3], [4,5,6], [7,8,9], [1,4,7], [1,4,7], [3,6,9], [1,5,9], [7,5,3]
//want a function that runs every time we play
function checkWinner () {
    //winning condition 
    console.log(document.querySelector('.one').innerHTML === "X", document.querySelector('.two').innerHTML === "X", document.querySelector('.three').innerHTML === "X")

    if (    
        // [1,2,3]
        (document.querySelector('.one').innerHTML === "X" && document.querySelector('.two').innerHTML === "X" && document.querySelector('.three').innerHTML === "X") || 
        // [2,5,8]
        (document.querySelector('.two').innerHTML === "X" && document.querySelector('.five').innerHTML === "X" && document.querySelector('.eight').innerHTML === "X") || 
        // [4,5,6]
        (document.querySelector('.four').innerHTML === "X" && document.querySelector('.five').innerHTML === "X" && document.querySelector('.six').innerHTML === "X") || 
        // [7,8,9]
        (document.querySelector('.seven').innerHTML === "X" && document.querySelector('.eight').innerHTML === "X" && document.querySelector('.nine').innerHTML === "X") ||
        // [1,4,7]
        (document.querySelector('.one').innerHTML === "X" && document.querySelector('.four').innerHTML === "X" && document.querySelector('.seven').innerHTML === "X") ||
        // [3,6,9]
        (document.querySelector('.three').innerHTML === "X" && document.querySelector('.six').innerHTML === "X" && document.querySelector('.nine').innerHTML === "X") || 
        // [1,5,9]
        (document.querySelector('.one').innerHTML === "X" && document.querySelector('.five').innerHTML === "X" && document.querySelector('.nine').innerHTML === "X") || 
        // [7,5,3]
        (document.querySelector('.seven').innerHTML === "X" && document.querySelector('.five').innerHTML === "X" && document.querySelector('.three').innerHTML === "X")
        ){
                document.querySelector('.winner').innerHTML = "Player X wins"
        } else if (
            (document.querySelector('.one').innerHTML === "O" && document.querySelector('.two').innerHTML === "O" && document.querySelector('.three').innerHTML === "O") || 
            // [2,5,8]
            (document.querySelector('.two').innerHTML === "O" && document.querySelector('.five').innerHTML === "O" && document.querySelector('.eight').innerHTML === "O") ||    
            // [4,5,6]
            (document.querySelector('.four').innerHTML === "O" && document.querySelector('.five').innerHTML === "O" && document.querySelector('.six').innerHTML === "O") || 
            // [7,8,9]
            (document.querySelector('.seven').innerHTML === "O" && document.querySelector('.eight').innerHTML === "O" && document.querySelector('.nine').innerHTML === "O") ||
            // [1,4,7]
            (document.querySelector('.one').innerHTML === "O" && document.querySelector('.four').innerHTML === "O" && document.querySelector('.seven').innerHTML === "O") ||
            // [3,6,9]
            (document.querySelector('.three').innerHTML === "O" && document.querySelector('.six').innerHTML === "O" && document.querySelector('.nine').innerHTML === "O") || 
            // [1,5,9]
            (document.querySelector('.one').innerHTML === "O" && document.querySelector('.five').innerHTML === "O" && document.querySelector('.nine').innerHTML === "O") || 
            // [7,5,3]
            (document.querySelector('.seven').innerHTML === "O" && document.querySelector('.five').innerHTML === "O" && document.querySelector('.three').innerHTML === "O")
            ){
                    document.querySelector('.winner').innerHTML = "Player O wins"
            } else {
                return "it's a tie"
            }
        


    //check if the winning conditions were met 
    // if (winningCondition === true) {   
    } 


