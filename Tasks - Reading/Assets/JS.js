//Hello Object - https://javascript.info/object#check-for-emptiness
let obj =  {}
  obj.name: "Pete",
  obj.surname: "Smith"
delete obj.name

//Check for emptiness - https://javascript.info/object#check-for-emptiness

function isEmpty(obj) {
  for (let key in obj) {
    return false; 
  }
  return true; 
}

//Sum object properties - https://javascript.info/object#sum-object-properties
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let sum = 0
for (let key in salaries) {
  sum += salaries[key];
}

alert (sum);

//Multiple numeric property values by 2
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}