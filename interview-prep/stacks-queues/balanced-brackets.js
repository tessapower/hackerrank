// HackerRank Interview Preparation Kit: Stacks and Queues
// Balanced Brackets
// https://bit.ly/2QxOlwc

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

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

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const s = readLine();

        let result = isBalanced(s);

        ws.write(result + "\n");
    }

    ws.end();
}

