//heads or tails 
function headsTails() {
  let outcome = Math.random()
  if (outcome < 0.5) {
    console.log("It's Heads")
  } else {
    console.log("It's tails")
  }
}
headsTails()

//multiply array * 2
function maps(x){
  return x.map(n => n * 2);
}

//Merge two sorted arrays into one

function mergeArrays(arr1, arr2) {
return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));
}

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

let sums = [4, 10, 90, 80, 13, 8, 1400]
sums.sort((a,b) => a-b);
let allTogether = sums[1] + [sums.length -2]
console.log(allTogether)

//OR

function sumSecond (arr) {
    let sorted = arr.sort((a,b) => a-b)
    alert(sorted[1] + [sorted.length-2])
}
sumSecond([4, 10, 90, 80, 13, 8, 1400])

// Parse nice int from char problem
function getAge(inputString){
  return parseInt(inputString)
  }


//Neither yes nor no

let answer
while (answer != "yes" && answer != "no") 
{answer = prompt("Type something")}
console.log("correct")


//Multiplication table - https://github.com/thejsway/thejsway/blob/master/manuscript/chapter04.md#multiplication-table

let enterNum = Number(prompt("Give me a number"))
if (enterNum >=2 && enterNum <=9) {
  for (let i= 1; i<=enterNum; i++)
    console.log(`${i} x ${enterNum} = ${i * enterNum} `)
  } else {console.log("This is not a valid number")}


//Parity - https://github.com/thejsway/thejsway/blob/master/manuscript/chapter04.md/

let x = Number(prompt("Enter a starting number:"))
for (let i=x; i <= x + 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  }
  else if (i % 2 !== 0) {
    console.log(`${i} is odd`)
  }
  else {
    console.log(`${i} is not a number`);
  }
}


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

//Celsius to Fahrenheit - https://github.com/thejsway/thejsway/blob/master/manuscript/chapter02.md

function converter (celsius) {
  let faren = celsius * 9/5 + 32
  console.log(`${celsius} C is ${faren} F`)
}

converter(20)


// Variable swapping - https://github.com/thejsway/thejsway/blob/master/manuscript/chapter02.md
let number1 = 5;
let number2 = 3;

[number1, number2] = [number2, number1]

console.log(number1); // Should show 3
console.log(number2); // Should show 5

//Following day - https://github.com/thejsway/thejsway/blob/master/manuscript/chapter03.md
function dayWeek (day) {
  let dayLow = day.toLowerCase()
  switch(dayLow) {
    case 'monday':
    console.log("Tuesday")
  }
  }

//Get the Number of Days in a Month - https://github.com/thejsway/thejsway/blob/master/manuscript/chapter03.md// 
let getDaysInMonth = function(month,year) {
 return new Date(year, month, 0).getDate();
};
console.log(getDaysInMonth(1, 2012));
console.log(getDaysInMonth(2, 2012));

// Carousel - https://github.com/thejsway/thejsway/blob/master/manuscript/chapter04.md
function carousel () {
  let tellMe = prompt("give me a number")
  for (let i=1; i<=tellMe; i++) {
    console.log(i)
  }
}

// Quarter of the year - https://www.codewars.com/kata/5ce9c1000bab0b001134f5af 

function month () {
if (month == 1 || month == 2 || month == 3) {
  return 1 
}
else if (month == 4 || month == 5 || month == 6) {
  return 2 
}
else if (month == 7 || month == 8 || month == 9) {
  return 3 
}
else if (month == 10 || month == 11 || month == 12) {
  return 4 
}
}

// Twice as old
function twiceAsOld(dadYearsOld, sonYearsOld) {
  if (dadYearsOld > 2*sonYearsOld) {
  let x = dadYearsOld - 2*sonYearsOld
  return x
  } else {
    return 2*sonYearsOld - dadYearsOld
  }
}