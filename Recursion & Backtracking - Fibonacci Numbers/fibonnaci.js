// HackerRank: Fibonnaci Numbers
// https://www.hackerrank.com/challenges/ctci-fibonacci-numbers/problem

function fibonacci(n) {
  if (n == 0 || n == 1) return n;
  return fibonacci(n-1) + fibonacci(n-2);
}

