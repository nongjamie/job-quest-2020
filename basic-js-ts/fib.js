let tempArray = {};

const fib = (n) => {
  if(!tempArray[n]) {
    if(n === 0) {
      tempArray[n] = 0;
      return 0;
    }
    if(n === 1) {
      tempArray[n] = 1;
      return 1;
    }
    tempArray[n] = fib(n-2) + fib(n-1);
  }
  return tempArray[n];
}

module.exports = fib;