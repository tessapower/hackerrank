// HackerRank: Balanced Brackets
// https://www.hackerrank.com/challenges/balanced-brackets/problem

'use strict';

// Complete the isBalanced function below.
function isBalanced(s) {
  let push = new Set(["{", "(", "["]);
  let pop  = new Set(["}", ")", "]"]);
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (push.has(s[i])) {
      stack.push(s[i]);
    }
    if (pop.has(s[i])) {
      if (s[i-1] === undefined || stack.length == 0) return "NO";
      let last = stack[stack.length-1];
      switch(last) {
        case "[":
          if (s[i] == "]") {
            stack.pop();
          } else {
            return "NO";
          }
          break;
        case "(":
          if (s[i] == ")") {
            stack.pop();
          } else {
            return "NO";
          }
          break;
        case "{":
          if (s[i] == "}") {
            stack.pop();
          } else {
            return "NO";
          }
          break;
      }
    }
  }
  if (stack.length == 0) {
    return "YES";
  } else {
    return "NO";
  }
}

