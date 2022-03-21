// Gravity Flip - https://www.codewars.com/kata/5f70c883e10f9e0001c89673/train/javascript
const flip=(d, a)=>{
    if(d === 'R') return a.sort((a,b)=>a-b);
    if(d === 'L') return a.sort((a,b)=>b-a);
  }

  // Pow of two

function powerOfTwo (n) {
  for (let i=0; i<=n; i++) {
    result.push(Math.pow(2,i))
  } return result;
}
