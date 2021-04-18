// HackerRank Interview Preparation Kit: String Manipulation
// Sherlock and the Valid String
// https://bit.ly/3dg8T5s

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

// Complete the isValid function below.
function isValid(s) {
  let charCounts = new Map();
  // Count the number of times each character appears
  for (let c of s.split('')) {
    if (charCounts.has(c)) {
      charCounts.set(c, charCounts.get(c)+1);
    } else {
     charCounts.set(c, 1); 
    }
  }

  // Count the number of characters that appear
  // the same number of times
  let countOfCounts = new Map();
  let counts = charCounts.values();
  for (let c of counts) {
    if (countOfCounts.has(c)) {
      countOfCounts.set(c, countOfCounts.get(c)+1)
    } else {
      countOfCounts.set(c, 1);
    }
    // if characters appear in more than two different counts,
    // e.g. "aaaeef"
    //  "a" => { x3 }
    //  "e" => { x2 }
    //  "f" => { x1 }
    // the string would still be invalid even after removing
    // one occurrence of any of the characters.
    if (countOfCounts.size > 2) return "NO";
  }

  // if all characters appear the same number of times,
  // there will only be one count
  if (countOfCounts.size == 1) return "YES";

  // if the count "1" occurs once, this means one character
  // appeared once, and can be removed to create a valid string
  if (countOfCounts.has(1) && countOfCounts.get(1) == 1) return "YES";
  
  // if the counts differ by 1, and there is only one occurrence
  // of the higher count, then removing the one character that
  // appears only one more time will create a valid string
  let keys = Array.from(countOfCounts.keys());
  let higher = Math.max(...keys);
  let lower = Math.min(...keys);
  if (higher - lower == 1 && countOfCounts.get(higher) == 1) return "YES";
  
  // if the counts differ by more 1, e.g.
  // "aacccc"
  // "a" => { 2x }
  // "c" => { 4x }
  // then the difference between the counts is too large
  if (higher - lower > 1) return "NO";
  
  // if the number of the counts differ by more than one, e.g.
  // "116" => { 6x }
  // "115" => { 4x }
  // there is no way to remove only one occurrence of one
  // character to get a valid string
  let countValues = Array.from(countOfCounts.values());
  if (Math.abs(countValues[0] - countValues[1]) > 1) return "NO";
  
  // if a count that is greater than 1 appear more than once,
  // or a count of 1 appears more than once
  // e.g. "aabbcd"
  //  "a", "b" => { 2x } which maps to "2" => { 2x }
  //  "c", "d" => { 1x } which maps to "1" => { 2x }
  // there is no way to remove only one occurrence of one
  // character to get a valid string
  if (countValues[0] > 1 && countValues[1] > 1) {
    return "NO";
  }

  return "YES"
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = isValid(s);

    ws.write(result + "\n");

    ws.end();
}

