// HackerRank Interview Preparation Kit: Greedy Algorithms
// Minimum Absolute Difference in an Array
// https://bit.ly/3agyvND

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

// Complete the minimumAbsoluteDifference function below.
function minimumAbsoluteDifference(arr) {
    let minDifference = Infinity;
    arr.sort();
    for (let i = 0; i < arr.length-1; i++) {
        if (Math.abs(arr[i]-arr[i+1]) < minDifference) {
            minDifference = Math.abs(arr[i]-arr[i+1]);
        }
    }
    return minDifference;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = minimumAbsoluteDifference(arr);

    ws.write(result + '\n');

    ws.end();
}

