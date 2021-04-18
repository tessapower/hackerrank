// HackerRank: Making Anagrams
https://www.hackerrank.com/challenges/ctci-making-anagrams/problem

'use strict';

// Complete the makeAnagram function below.
function makeAnagram(a, b) {
    let numMatchingChars = 0;
    for (let i = 0; i < a.length; i++) {
        let match = b.indexOf(a[i]);
        if (match != -1) {
            numMatchingChars++;
            b = b.slice(0, match).concat(b.slice(match+1));
        }
    }
    return (a.length - numMatchingChars) + b.length;
}

