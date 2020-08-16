function lateRide(n) {
  let hrs = Math.floor(n / 60);
  let minutes = n % 60;
  return ((hrs / 10) | 0) + (hrs % 10) + ((minutes / 10) | 0) + (minutes % 10);
}

console.log(lateRide(808));
