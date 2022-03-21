// Gravity Flip - https://www.codewars.com/kata/5f70c883e10f9e0001c89673/train/javascript
const flip=(d, a)=>{
    if(d === 'R') return a.sort((a,b)=>a-b);
    if(d === 'L') return a.sort((a,b)=>b-a);
  }

// Power of two - https://www.codewars.com/kata/57a083a57cb1f31db7000028

function powerOfTwo (n) {
  for (let i=0; i<=n; i++) {
    result.push(Math.pow(2,i))
  } return result;
}

//Create a function that takes in an array of numbers.  
// Multiply each number together and alert the product. 

function createArray(arr) {
  let product = 1
  arr.forEach(num => product *=num)
  alert(product)
}

createArray([2, 4, 10])

//Celsius to Fahrenheit// 

function converter (celsius) {
  let faren = celsius * 9/5 + 32
  console.log(`${celsius} C is ${faren} F`)
}

converter(20)