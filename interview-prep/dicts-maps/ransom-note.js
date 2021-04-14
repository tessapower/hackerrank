// HackerRank Interview Prep Kit: Dictionaries and Hashmaps
// Ransom Note
// https://bit.ly/2RpwojU

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

// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {
    let availableWords = new Map();
    for (let w of magazine) {
        availableWords.has(w) ?
            availableWords.set(w, availableWords.get(w)+1) : availableWords.set(w, 1);
    }
    for (let w of note) {
        if (availableWords.has(w) && availableWords.get(w) > 0) {
            availableWords.set(w, availableWords.get(w)-1);
        } else {
            return console.log("No");
        }
    }

    return console.log("Yes");
}

function main() {
    const mn = readLine().split(' ');

    const m = parseInt(mn[0], 10);

    const n = parseInt(mn[1], 10);

    const magazine = readLine().split(' ');

    const note = readLine().split(' ');

    checkMagazine(magazine, note);
}

