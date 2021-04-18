// HackerRank: Davis' Staircase
// https://www.hackerrank.com/challenges/ctci-recursive-staircase/problem

'use strict';

let cache = new Map();

function stepPerms(n) {  
  if (n == 0) return 1;
  
  let permCounter = 0;
  if (cache.has(n)) {
    permCounter += cache.get(n);
  } else {
    for (let i = 1; (i <= n && i <= 3); i++) {
      permCounter += stepPerms(n-i);
    }
    cache.set(n, permCounter);
  }
  
  return permCounter % 10000000007;
}

