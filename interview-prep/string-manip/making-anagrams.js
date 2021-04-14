// HackerRank Interview Preparation Kit: String Manipulation
// Making Anagrams
// https://bit.ly/3dZrvG6

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

// Complete the makeAnagram function below.
function makeAnagram(a, b) {
    let numMatchingChars = 0;
    for (let i = 0; i < a.length; i++) {
        let match = b.indexOf(a[i]);
        if (match != -1) {
            numMatchingChars++;
            b = b.slice(0, match).concat(b.slice(match+1));
        }
    }
    return (a.length - numMatchingChars) + b.length;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine();

    const b = readLine();

    const res = makeAnagram(a, b);

    ws.write(res + '\n');

    ws.end();
}

