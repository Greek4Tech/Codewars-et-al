function abbrevName(name){
    let myArray = name.split(" ")
    let fName = myArray[0].charAt(0).toUpperCase()
    let lName = myArray[1].charAt(0).toUpperCase()
    return `${fName}.${lName}` 
  
  }