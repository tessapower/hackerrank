// HackerRank: Counting Valleys
// https://www.hackerrank.com/challenges/counting-valleys/problem

'use strict';

function countingValleys(steps, path) {
    let altitude = 0;
    let numValleys = 0;
    for (let i = 0; i < steps; i++) {
        if (path[i] == "U") {
            altitude++;
        } else if (path[i] == "D") {
            if (altitude == 0) {
                numValleys++;
            }
            altitude--;
        }
    }

    return numValleys;
}

