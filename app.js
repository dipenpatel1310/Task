
var fib = function(n) {
    if (n === 0) {
      return [0];
    }
    if (n === 1) {
      return [0, 1];
    } else {
      var arr = fib(n - 1);
      arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
      return arr;
    }
  };
  
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Enter the number`, x => {
  console.log(`${fib(x-1)}`);
  readline.close();
});
