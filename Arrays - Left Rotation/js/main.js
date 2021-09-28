// HackerRank: Left Rotation
// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem

'use strict';

// Complete the rotLeft function below.
function rotLeft(a, d) {
    if (d == 0 || a.length % d == a.length) return a;
    let b = [];
    for (let i = 0; i < a.length; i++) {
        b[(i-d+a.length)%a.length] = a[i];
    }
    return b;
}

