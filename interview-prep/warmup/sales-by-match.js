// HackerRank Interview Preparation Kit: Warm-up Challenge
// Sales by Match a.k.a. Sock Merchant
// https://bit.ly/2PShVNf 

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    let numPairs = 0;
    let colors = new Map();
    for (let color of ar) {
        if (!colors.has(color)) {
            colors.set(color, 1);
        } else {
            colors.set(color, colors.get(color)+1);
        }
    }
    for (let value of colors.values()) {
        numPairs += Math.floor(value/2);
    }
    
    return numPairs;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}

