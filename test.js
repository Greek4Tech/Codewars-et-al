function alternate (str) {
  return str.split('').map(c=> c=== c.toLowerCase() ? c.toUpperCase() : c.toLowerCase()).join('')
}