function commonCharacterCount(s1, s2) {
  let string1 = s1.split("");
  let string2 = s2.split("");
  let common = 0;

  for (let i = 0; i < string1.length; i++) {
    if (string2.indexOf(string1[i]) >= 0) {
      common++;
      string2.splice(string2.indexOf(string1[i]), 1);
    }
  }
  return common;
}

let s1 = "aabcc",
  s2 = "adcaa";
console.log(commonCharacterCount(s1, s2));
