//Given a 32-bit signed integer, reverse digits of an integer.
//2^31-1=2147483647
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let sign = x < 0 ? -1 : 1;
  let revNum = +Math.abs(x).toString().split("").reverse().join("");
  revNum = revNum > 2147483647 ? 0 : revNum * sign;
  return revNum;
};

let x = -123;
console.log(reverse(x));
