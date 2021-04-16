// HackerRank Interview Preparation Kit: Search
// Ice Cream Parlour
// https://bit.ly/3mVF9xK

'use strict';

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

// Complete the whatFlavors function below.
function whatFlavors(costs, money) {
  // Build a hash map of indices which match each cost. This
  // allows us to quickly find the indices (if any) that match
  // a given cost in O(1) time.
  let indicesByCost = new Map();
  for (const [i, cost] of costs.entries()) {
    let indices = indicesByCost.has(cost) ? indicesByCost.get(cost) : [];
    indices.push(i);
    indicesByCost.set(cost, indices);
  }
  
  for (const [i, cost] of costs.entries()) {
    const remainder = money - cost;
    
    if (!indicesByCost.has(remainder)) {
      continue;
    }
    
    const flavor2Idx = indicesByCost.get(remainder).filter(idx => idx != i)[0];
    if (flavor2Idx !== undefined) {
      return console.log(`${i + 1} ${flavor2Idx + 1}`);
    }
  }
}

function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const money = parseInt(readLine(), 10);

        const n = parseInt(readLine(), 10);

        const cost = readLine().split(' ').map(costTemp => parseInt(costTemp, 10));

        whatFlavors(cost, money);
    }
}

