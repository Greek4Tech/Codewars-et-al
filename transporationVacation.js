function rentalCarCost(d) {
    let total = 0  
    if (d>=7) {
        total = d * 40 - 50
    } if (d>=3) {
        total = d * 40 - 20
    } else {
        total = d * 40
    } return total
  }