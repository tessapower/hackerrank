// HackerRank: Two Strings
// https://www.hackerrank.com/challenges/two-strings/problem

'use strict';

// Complete the twoStrings function below.
function twoStrings(s1, s2) {
    let s1Chars = new Set()
    for (let c of s1.split('')) {
        s1Chars.add(c);
    }
    for (let c of s2.split('')) {
        if (s1Chars.has(c)) return "YES";
    }
    return "NO";
}

