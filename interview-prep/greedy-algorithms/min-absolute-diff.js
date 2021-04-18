// HackerRank: Minimum Absolute Difference in an Array
// https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem 

'use strict';

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

