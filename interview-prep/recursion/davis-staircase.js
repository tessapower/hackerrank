// HackerRank Interview Preparation Kit: Recursion
// Davis' Staircase
// https://bit.ly/3aiS7AE

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

let cache = new Map();

function stepPerms(n) {  
  if (n == 0) return 1;
  
  let permCounter = 0;
  if (cache.has(n)) {
    permCounter += cache.get(n);
  } else {
    for (let i = 1; (i <= n && i <= 3); i++) {
      permCounter += stepPerms(n-i);
    }
    cache.set(n, permCounter);
  }
  
  return permCounter % 10000000007;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = parseInt(readLine(), 10);

    for (let sItr = 0; sItr < s; sItr++) {
        const n = parseInt(readLine(), 10);

        const res = stepPerms(n);

        ws.write(res + '\n');
    }

    ws.end();
}

