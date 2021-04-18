// HackerRank: Alternating Characters
// https://www.hackerrank.com/challenges/alternating-characters/problem

'use strict';

// Complete the alternatingCharacters function below.
function alternatingCharacters(s) {
    let numOfDeletions = 0;
    let currentChar = 0;
    while (currentChar < s.length) {
        if (s[currentChar] == s[currentChar + 1]) {
            numOfDeletions++;
        }
        currentChar++;
    }
    
    return numOfDeletions;
}

