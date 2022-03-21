// Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
let musketeers = ["Athos", "Porthos", "Aramis"]
// Shows each array element using a for loop.
for (let i=0; i<=musketeers.length; i++) {
    console.log(musketeers[i])
}
// Adds the "D'Artagnan" value to the array.
musketeers.push("D'Artagnan")

// Shows each array element using the forEach() method.

musketeers.forEach(n => {console.log(musketeers(n))
}); 

// Remove poor Aramis.

musketeers.splice(2)

// Shows each array element using a for-of loop.

for (const name of musketeers) {
  console.log(name);}