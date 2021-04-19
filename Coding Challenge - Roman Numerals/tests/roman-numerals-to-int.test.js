const convert = require('../roman-numerals-to-int');

// Note: our domain only needs to handle up to 50, which importantly,
// excludes 'M', 'D' and 'C' characters.

test('can convert single character roman numerals', () => {
  expect(convert.romanNumeralsToInt("I")).toBe( 1);
  expect(convert.romanNumeralsToInt("V")).toBe( 5);
  expect(convert.romanNumeralsToInt("X")).toBe(10);
  expect(convert.romanNumeralsToInt("L")).toBe(50);
});

test('can convert multi-character roman numerals', () => {
  expect(convert.romanNumeralsToInt(   "XII")).toEqual(12);
  expect(convert.romanNumeralsToInt(    "XV")).toEqual(15);
  expect(convert.romanNumeralsToInt(    "XX")).toEqual(20);
  expect(convert.romanNumeralsToInt("XXVIII")).toEqual(28);
  expect(convert.romanNumeralsToInt("XXXIII")).toEqual(33);
});

test('can convert roman numerals containing subtraction characters', () => {
  expect(convert.romanNumeralsToInt(    "IV")).toEqual( 4);
  expect(convert.romanNumeralsToInt(    "IX")).toEqual( 9);
  expect(convert.romanNumeralsToInt(   "XIV")).toEqual(14);
  expect(convert.romanNumeralsToInt(   "XIX")).toEqual(19);
  expect(convert.romanNumeralsToInt(  "XXIV")).toEqual(24);
  expect(convert.romanNumeralsToInt(  "XXIX")).toEqual(29);
  expect(convert.romanNumeralsToInt( "XXXIV")).toEqual(34);
  expect(convert.romanNumeralsToInt( "XXXIX")).toEqual(39);
  expect(convert.romanNumeralsToInt(    "XL")).toEqual(40);
  expect(convert.romanNumeralsToInt(   "XLI")).toEqual(41);
  expect(convert.romanNumeralsToInt(  "XLII")).toEqual(42);
  expect(convert.romanNumeralsToInt( "XLIII")).toEqual(43);
  expect(convert.romanNumeralsToInt(  "XLIV")).toEqual(44);
  expect(convert.romanNumeralsToInt(   "XLV")).toEqual(45);
  expect(convert.romanNumeralsToInt(  "XLVI")).toEqual(46);
  expect(convert.romanNumeralsToInt( "XLVII")).toEqual(47);
  expect(convert.romanNumeralsToInt("XLVIII")).toEqual(48);
  expect(convert.romanNumeralsToInt(  "XLIX")).toEqual(49);
});

