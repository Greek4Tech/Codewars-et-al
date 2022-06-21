function leastLarger(a,i) {
    let arr = [];
    for (let j = 0; j < a.length; j++) {
      if (a[j] > a[i]) arr.push(a[j])
    }
    return a.indexOf(arr.sort((a, b) => a-b)[0]);
  }