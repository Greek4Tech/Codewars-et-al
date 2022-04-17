function zeroOne(num) {
    newArr = []
        //return 1,0,1,0
            //for loop [ind0,ind1,ind2,ind3,] => 
                //for 0/2 = 0 (0); 1/2 = 0.5 (0+); 2/2 = 1 (0)
                    for (let i=0; i<=num; i++) {
                        if (i%2 == 0) {
                            //we want this to be one
                            newArr.push(arr(i))
                        } else {
                            //we want this to be 0
                            newArr.push(arr(i))
                        }
                    }
}

zeroOne(5)