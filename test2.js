//Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

//Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

//[sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//  3            2      1

function wolves (arr) {
    if (arr.indexOf('wolf') == 0) {
        return 'go away holf'
    })
    //sheep in front of the wolf
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === 'wolf') {
            console.log(`Care sheep in place ${arr[i+1]}, there is wold around`)
        }
    }
}