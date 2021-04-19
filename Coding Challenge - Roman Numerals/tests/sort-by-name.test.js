const sort = require('../roman-numerals-to-int');

// Note: names appear in the form "James III"
// (pronounced "James the third"). "III" is called
// an "ordinal" in this context. The ordinals present
// a problem if sorted naively (alphabetically). We
// therefore test that the sorting logic takes the ordinal
// portion into account by sorting ordinal potions of a
// name numerically.

test('can sort names with same ordinal', () => {
  let names = [
    "Johnathan I",
    "Zora I",
    "Elizabeth I",
    "Mark I",
    "Henry I",
    "Paul I",
    "Abigail I",
  ];
  let expected = [
    "Abigail I",
    "Elizabeth I",
    "Henry I",
    "Johnathan I",
    "Mark I",
    "Paul I",
    "Zora I",
  ];
  expect(sort.sortByNameAndOrdinal(names)).toEqual(expected);
});

test('can sort names differing only by ordinal', () => {
  let names = [
    "Zora XIV",
    "Henry IV",
    "Louis L",
    "Zora I",
    "Elizabeth I",
    "Mark I",
    "Louise L",
    "Abigail IX",
    "Henry VIII",
    "Louis XXII",
    "Elizabeth II",
    "Abigail XLIX",
  ];
  let expected = [
    "Abigail IX",
    "Abigail XLIX",
    "Elizabeth I",
    "Elizabeth II",
    "Henry IV",
    "Henry VIII",
    "Louis XXII",
    "Louis L",
    "Louise L",
    "Mark I",
    "Zora I",
    "Zora XIV",
  ];
  expect(sort.sortByNameAndOrdinal(names)).toEqual(expected);
});

