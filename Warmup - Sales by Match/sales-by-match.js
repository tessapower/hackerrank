// HackerRank: Sales by Match a.k.a. Sock Merchant
// https://www.hackerrank.com/challenges/sock-merchant/problem

'use strict';

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

