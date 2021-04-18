// HackerRank: Repeated String
// https://www.hackerrank.com/challenges/repeated-string/problem

'use strict';

// Complete the repeatedString function below.
function repeatedString(s, n) {
    return s.split('').filter(c => c == 'a').length * Math.floor(n/s.length) +
            s.slice(0, n%s.length).split('').filter(c => c == 'a').length;
}

