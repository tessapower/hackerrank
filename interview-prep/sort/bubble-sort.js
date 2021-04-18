// HackerRank:  Bubble Sort
// https://www.hackerrank.com/challenges/ctci-bubble-sort/problem

'use strict';

// Complete the countSwaps function below.
function countSwaps(a) {
  let numSwaps = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length-1; j++) {
      // Swap adjacent elements if they are in decreasing order
      if (a[j] > a[j+1]) {
        let tmp = a[j];
        a[j] = a[j+1];
        a[j+1] = tmp;
        numSwaps++;
      }
    }
  }
  console.log(`Array is sorted in ${numSwaps} swaps.`);
  console.log("First Element: " + a[0]);
  console.log("Last Element: " + a[a.length-1]);
  
  return 0;
}

