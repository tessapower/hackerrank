// HackerRank: Mark and Toys
// https://www.hackerrank.com/challenges/mark-and-toys/problem

'use strict';

// Complete the maximumToys function below.
function maximumToys(prices, k) {
  prices.sort((a, b) => a-b);
  let maxNumberOfToys = 0;
  let i = 0;
  while (k > 0 && i < prices.length) {
    k -= prices[i];
    if (k >= 0) maxNumberOfToys++;
    i++;
  }
  
  return maxNumberOfToys;
}

