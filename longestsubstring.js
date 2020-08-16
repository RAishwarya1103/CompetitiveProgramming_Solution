var lengthOfLongestSubstring = function (s) {
  const { length } = s;
  if (length < 2) return length;

  let max = 0;

  const history = {};
  let start = 0;
  for (let end = 0; end < length; end++) {
    const char = s[end];

    const pi = history[char];
    if (pi !== undefined && pi >= start) start = pi + 1;

    const current = end - start + 1;
    history[char] = end;
    if (current > max) max = current;
  }

  return max;
};
console.log(lengthOfLongestSubstring("pwwkewkhhiop"));
