const rps = (p1, p2) => {
  //3 winning conditions
  if ((p1 === 'scissors' && p2 === 'paper') || (p1 === 'paper' && p2 === 'rock') || (p1 === 'rock' && p2 === 'scissors')) {
      return "Player 1 wins"
  } else if (p1 === p2) {
      return 'draw'}
    else { 
        return "Player 2 wins"
    }
  }