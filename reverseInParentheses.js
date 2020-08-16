function reverseInParens(str) {
  (str.match(/\((.+)\)/g) || []).forEach((a) => {
    a = a.substring(1, a.length - 1);
    let b = reverseInParens(a)
      .replace(/[\(\)]/g, function ($1) {
        return $1 === "(" ? ")" : "(";
      })
      .split("")
      .reverse()
      .join("");
    str = str.replace(a, b);
  });
  return str;
}
console.log(reverseInParens("one (ruof ((rht)ee) owt)"));
