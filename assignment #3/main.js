const VRed = require('../assignment #4/main').VRed;
exports.uniformDis = randomNumbers => {
  const mean = randomNumbers.reduce((prv, curr) => prv + curr) / randomNumbers.length;
  const a = Math.abs(mean - 2);
  const b = mean + 2
  let newrv = [];
  randomNumbers.forEach((rn, i) =>
    newrv.push(a + (b - a) * rn));

  console.log('new random numbers', newrv)
  VRed(newrv);
}
