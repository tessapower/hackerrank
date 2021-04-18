// HackerRank Interview Preparation Kit: Arrays
// New Year Chaos
// https://bit.ly/32iKS7o

'use strict';

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

// Complete the minimumBribes function below.
function minimumBribes(q) {
    let bribeCounter = Array(q.length+1).fill(0);
    let didSwap = false;
    for (let i = 0; i < q.length; i++) {
        didSwap = false;
        for (let j = 0; j < q.length; j++) {
            if (q[j] > q[j+1]) {
                bribeCounter[q[j]]++;
                if (bribeCounter[q[j]] > 2) {
                    return console.log("Too chaotic");
                }
                let tmp = q[j];
                q[j] = q[j+1];
                q[j+1] = tmp;
                didSwap = true;
            }
        }
        if (!didSwap) break;
    }
    let numTotalBribes = 0;
    bribeCounter.forEach(entry => numTotalBribes += entry);
    
    return console.log(numTotalBribes);
}

function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const q = readLine().split(' ').map(qTemp => parseInt(qTemp, 10));

        minimumBribes(q);
    }
}

