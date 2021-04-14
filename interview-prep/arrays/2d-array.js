// HackerRank Interview Preparation Kit: Arrays
// 2D Array - DS
// https://bit.ly/3wVzywg

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

// Complete the hourglassSum function below.
function hourglassSum(arr) {
    let sums = [];
    for (let i = 0; i < arr.length-2; i++) {
        for (let j = 0; j < arr[i].length-2; j++) {
            let a = arr[i][j],      b = arr[i][j+1],    c = arr[i][j+2];
            let                     d = arr[i+1][j+1];
            let e = arr[i+2][j],    f = arr[i+2][j+1],  g = arr[i+2][j+2];
            sums.push(a+b+c+d+e+f+g);
        }
    }
    return Math.max(...sums);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let result = hourglassSum(arr);

    ws.write(result + "\n");

    ws.end();
}

