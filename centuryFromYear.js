/**
 * Given a year, return the century it is in.
 * The first century spans from the year 1 up to and including the year 100,
 * the second - from the year 101 up to and including the year 200, etc.
 * @param {*} year
 */

function centuryFromYear(year) {
  let yrstr = year.toString();
  let lstDigit = yrstr.substring(yrstr.length - 2);
  let yearSplit = yrstr.substring(0, yrstr.length - 2);
  if (+lstDigit == 00) {
    return +yearSplit;
  }
  return +yearSplit + 1;
}

function centuryFromYear_v2(year) {
  return Math.ceil(year / 100);
}
console.log(centuryFromYear_v2(1900));
console.log(centuryFromYear(1900));
console.log(centuryFromYear_v2(1901));
console.log(centuryFromYear(1901));
