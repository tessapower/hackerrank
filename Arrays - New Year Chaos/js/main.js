// HackerRank: New Year Chaos
// https://www.hackerrank.com/challenges/new-year-chaos/problem

'use strict';

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

