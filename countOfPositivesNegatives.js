function countPositivesSumNegatives(input) {
return input && input.length ? [input.filter (n => n>0).length, input.filter(n => n<0).reduce(a,b) = a+b,0] : []
}