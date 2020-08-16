/*

Given the array of strings A, you need to find the longest string S which is the prefix of 
ALL the strings in the array.
A = ["abcdefgh", "aefghijk", "abcefgh"] -> “a”
A =
 ["abab", "ab", "abcd"] -> “ab”

 A=["asd","cds"]->''
A=['asd','acd','f']=>""
*/

function prefixString(input) {
  let shortestString = input.reduce((acc, item) => {
    if (item.length <= acc.length) {
      acc = item;
    }
    return acc;
  }, input[0]);
  let shortestLength = shortestString.length;
  for (let i = 0; i < input.length; i++) {
    if (input[i].substring(0, shortestLength) != shortestString) {
      shortestString = shortestString.substring(0, shortestLength - 1);
      i = 0;
      shortestLength--;
    }
    if (shortestString == "") {
      break;
    }
  }

  return shortestString;
}

let input = ["abab", "ab", "abcd"];
//input = ["asd", "acd", "f"];
//input = ["abab", "z"];
//input = ["abcdefgh", "aefghijk", "abcefgh"];
console.log(prefixString(input));
