// HackerRank: Pairs
// https://www.hackerrank.com/challenges/pairs/problem

'use strict';

// Complete the pairs function below.
function pairs(k, arr) {
  arr.sort((a,b) => a-b);
  let numPairsWithDiffk = 0;
  for (let i = 0; i < arr.length-1; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] - arr[i] == k) numPairsWithDiffk++;
    }
  }
  
  return numPairsWithDiffk;
}

