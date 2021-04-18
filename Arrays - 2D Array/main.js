// HackerRank: 2D Array - DS
// https://www.hackerrank.com/challenges/2d-array/problem

'use strict';

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

