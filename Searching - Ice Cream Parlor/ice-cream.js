// HackerRank: Ice Cream Parlor
// https://www.hackerrank.com/challenges/ctci-ice-cream-parlor/problem 

'use strict';

// Complete the whatFlavors function below.
function whatFlavors(costs, money) {
  // Build a hash map of indices which match each cost. This
  // allows us to quickly find the indices (if any) that match
  // a given cost in O(1) time.
  let indicesByCost = new Map();
  for (const [i, cost] of costs.entries()) {
    let indices = indicesByCost.has(cost) ? indicesByCost.get(cost) : [];
    indices.push(i);
    indicesByCost.set(cost, indices);
  }
  
  for (const [i, cost] of costs.entries()) {
    const remainder = money - cost;
    
    if (!indicesByCost.has(remainder)) {
      continue;
    }
    
    const flavor2Idx = indicesByCost.get(remainder).filter(idx => idx != i)[0];
    if (flavor2Idx !== undefined) {
      return console.log(`${i + 1} ${flavor2Idx + 1}`);
    }
  }
}

