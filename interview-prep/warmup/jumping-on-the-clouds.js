// HackerRank Interview Preparation Kit: Warm-up Challenges
// Jumping on the Clouds
// https://bit.ly/3uTzI5v

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

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    let path = [];
    let i = 0;
    while (i < c.length) {
        if (i != 0 && !path.includes(i) && c[i] == 0) {
            path.push(i);
        }
        (i+2 < c.length && c[i+2] == 0) ? i +=2 : i++;
    }
    return path.length;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    let result = jumpingOnClouds(c);

    ws.write(result + "\n");

    ws.end();
}

