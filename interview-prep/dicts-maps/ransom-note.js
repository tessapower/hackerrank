// HackerRank: Ransom Note
// https://www.hackerrank.com/challenges/ctci-ransom-note/problem

'use strict';

// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {
    let availableWords = new Map();
    for (let w of magazine) {
        availableWords.has(w) ?
            availableWords.set(w, availableWords.get(w)+1) : availableWords.set(w, 1);
    }
    for (let w of note) {
        if (availableWords.has(w) && availableWords.get(w) > 0) {
            availableWords.set(w, availableWords.get(w)-1);
        } else {
            return console.log("No");
        }
    }

    return console.log("Yes");
}

