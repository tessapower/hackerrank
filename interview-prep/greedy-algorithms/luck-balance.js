// HackerRank Interview Preparation Kit: Greedy Algorithms
// Luck Balance
// https://bit.ly/3dkYWnm

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

// Complete the luckBalance function below.
function luckBalance(k, contests) {
  let luckBalance = 0;
  let important = [];
  contests.forEach(contest => {
    (contest[1] == 1) ? important.push(contest[0]) : luckBalance += contest[0];
  });
  important.sort((a, b) => a-b);
  let i = 0;
  important.forEach(contest => {
    (i < important.length-k) ? luckBalance -= contest : luckBalance += contest;
    i++;
  });
  
  return luckBalance;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    let contests = Array(n);

    for (let i = 0; i < n; i++) {
        contests[i] = readLine().split(' ').map(contestsTemp => parseInt(contestsTemp, 10));
    }

    const result = luckBalance(k, contests);

    ws.write(result + '\n');

    ws.end();
}

