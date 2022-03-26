//filter out "the geese"

function gooseFilter (birds) {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(b => !geese.includes(b));
};

//Factory of LoL champs

function FactoryOfLoLChamps (Q, W, Ult, DiffLevel) {
    this.Q = Q
    this.W = W
    this.Ult = Ult
    this.DiffLevel = DiffLevel
    this.eliminate = function () {
        console.log("You will pay for this")
    }
}

let Thresh = new FactoryOfLoLChamps ("Death Sentence", "Dark Passage", "The Box", "Moderate" ) 
let Zeri = new FactoryOfLoLChamps("Burst Fire", "UltraShock Lazer", "Lighting Crush", "Hard")

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