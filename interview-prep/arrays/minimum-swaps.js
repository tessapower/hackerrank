// HackerRank Interview Preparation Kit: Arrays
// Minimum Swaps
// https://bit.ly/3ehnZXQ

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
  let numSwaps = 0;
  for (let i = 0; i < arr.length; i++) {
    while (arr[i] !== i+1) {
      // if a[i] = 7, move 7 to index 6
      let tmp = arr[arr[i]-1];
      arr[arr[i]-1] = arr[i];
      arr[i] = tmp;
      numSwaps++;
    }
  }

  return numSwaps;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const res = minimumSwaps(arr);

    ws.write(res + '\n');

    ws.end();
}

