function howGood (arr, score) {
    let aveScore
    //loop to add all scores 
    let addValue = arr.reduce((n,m) => n + m, 0)
    //add and devide 
      //average = add values / number of values 
        aveScore = (addValue + score) / (arr.length + 1)
        console.log(aveScore)
            if (aveScore <= score) {
                console.log("I am a winner baby")
            } else {
                console.log("I guess I suck")
            }
    } 


[5,10,15,20,25]