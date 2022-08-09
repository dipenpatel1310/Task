const csv = require('csv-parser');
const fs = require('fs');

var arr=[]

    
// *****************Fib func****************
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
  
//   console.log(fib(8));
var f=0;
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Enter the number: `, x => {
  console.log(`${fib(x-1)}`);

  fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (row) => {
    // console.log("row ", row);
    arr.push(row);
    // console.log(arr);
  })
  .on('end', () => {
    // console.log("**", arr);
    for(let i=0; i<arr.length; i++)
    {
      if (arr[i]['INPUT']==x)
      {
        f=1;
        break;
      }
    }
    if (f==0)
    {
      // console.log("here")
      arr.push({ INPUT: x, OUTPUT: fib(x-1) })
    }

    const createCsvWriter = require('csv-writer').createObjectCsvWriter;
    const csvWriter = createCsvWriter({
      path: 'data.csv',
      header: [
        {id: 'INPUT', title: 'INPUT'},
        {id: 'OUTPUT', title: 'OUTPUT'},
      ]
    });
    csvWriter
    .writeRecords(arr)
    .then(()=> console.log('The CSV file was written successfully'));

  });

  readline.close();
});
