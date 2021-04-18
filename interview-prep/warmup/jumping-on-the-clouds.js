// HackerRank: Jumping on the Clouds
// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem

'use strict';

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    let path = [];
    let i = 0;
    while (i < c.length) {
        if (i != 0 && !path.includes(i) && c[i] == 0) {
            path.push(i);
        }
        (i+2 < c.length && c[i+2] == 0) ? i +=2 : i++;
    }
    return path.length;
}

