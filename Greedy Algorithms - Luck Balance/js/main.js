// HackerRank: Luck Balance
// https://www.hackerrank.com/challenges/luck-balance/problem 

'use strict';

// Complete the luckBalance function below.
function luckBalance(k, contests) {
  let luckBalance = 0;
  let important = [];
  contests.forEach(contest => {
    (contest[1] == 1) ? important.push(contest[0]) : luckBalance += contest[0];
  });
  important.sort((a, b) => a-b);
  let i = 0;
  important.forEach(contest => {
    (i < important.length-k) ? luckBalance -= contest : luckBalance += contest;
    i++;
  });
  
  return luckBalance;
}

