'use strict'

 /*
 * Sorts an array of names, in the format "James II" (read "James the Second"),
 * alphabetically and—if the names are the same—numerically based on the
 * integer value of the roman numeral ordinal. An Ordinal Number is a number
 * that indicates the position of something in a list, e.g. 1st, 2nd, 3rd, etc.
 * 
 * @param {array} names - an array of strings in the format "Henry VIII"
 * @returns The names sorted alphabetically and then by ordinal.
 */
function sortByNameAndOrdinal(names) {
  names.sort((a, b) => {
    const aSplit   = a.split(' ');
    const aName    = aSplit[0];
    const aOrdinal = romanNumeralsToInt(aSplit[1]);
    const bSplit   = b.split(' ');
    const bName    = bSplit[0];
    const bOrdinal = romanNumeralsToInt(bSplit[1]);
    
    if (aName > bName) {
      return 1;
    }
    if (aName < bName) {
      return -1;
    }
    
    // If we reach this point, the names are the same which means
    // we need to compare the roman numeral parts
    if (aOrdinal > bOrdinal) {
      return 1;
    }
    if (aOrdinal < bOrdinal) {
      return -1;
    }

    // If we reach this point, both the names and the ordinals are the same
    // e.g. a = "Louis IX" == b = "Louis IX"
    return 0;
  });
  // FIXME: in the original coding challenge, I (stupidly) sorted the names
  // first alphabetically and then used another sort to fix the roman numeral
  // sorting.
  // 
  // In effect, it was O(nlog(n) + n) instead of just O(nlog(n)).

  return names;
}

const NUMERALS = new Map([["I", 1], ["V", 5], ["X", 10], ["L", 50]]);

// We cache every computed Roman numeral to save calculating their integer
// value repeatedly. This helps execution speed with a large input containing
// many identical roman numerals.
let numeralsCache = new Map();

/*
 * Converts a roman numeral between 1 and 50 (inclusive) into an integer.
 *
 * @param {string} numeral - the roman numeral to convert to an integer
 * @returns Numeric value of a Roman numeral
 */
function romanNumeralsToInt(numeral) {
  if (numeralsCache.has(numeral)) return numeralsCache.get(numeral);

  let val = 0;
  for (let i = 0; i < numeral.length; i++) {
    const current = NUMERALS.get(numeral[i]);
    const next = (numeral[i+1] == undefined) ? undefined : NUMERALS.get(numeral[i+1]);

    // It's important to compare to the next character to account for
    // subtraction characters, e.g. "XIV", where the "I" indicates to subtract
    // the value of "I" (1) from the value of the next character "V" (5).
    // If the next character has a numerical value greater than the current
    // character, that indicates the value of the current character should be
    // subtracted from the value of the next character. In all other cases,
    // the value of the current character is added.
    if (current == next || next == undefined) {
      val += current;
    } else {
      // If we get to here, current and next are not the same character.
      // If the value of current is greater than value of next, e.g. 
      // "VI", "V" (5) is greater than "I" (1) => add the int value of "V"
      if (current > next) {
        val += current;
      } else {
        // If we get to here, the value of current is less than value of next
        // and indicates a subtraction character, e.g.
        // "IV", "I" (1) is less than "V" (5) => subtract the int value of "I"
        val -= current;
      }
    }
  }

  numeralsCache.set(numeral, val);
  
  return val;
}

exports.romanNumeralsToInt   = romanNumeralsToInt; 
exports.sortByNameAndOrdinal = sortByNameAndOrdinal; 

