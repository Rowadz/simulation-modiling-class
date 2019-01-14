// assugment #2 ~ K-S Algorithm
const uniDist = require('../assignment #3/main').uniformDis;
// step ~1
exports.KSAlgorithm = randomNumbers => {
  const freq = new Map();
  // step ~2
  randomNumbers.forEach(rn =>
    freq.has(rn) ? freq.set(rn, freq.get(rn) + 1) : freq.set(rn, 1)
  );
  let acc = [];
  let len = -1;
  // step ~3
  freq.forEach((value, key) => acc.push(value + (acc.length > 0 ? acc[++len] : 0)))
  // step ~4
  let facc = [];
  acc.forEach(num => facc.push(num / acc[acc.length - 1]))
  // step ~5
  let findex = [];
  freq.forEach((value, key) =>
    findex.push((key / freq.size)));
  // step ~6
  let errors = [];
  for (let i = 0; i < findex.length; i++)
    errors.push(Math.abs(findex[i] - facc[i]));


  // step ~7
  const ktheo = errors.reduce((prv, curr) => prv > curr ? prv : curr);
  // step ~8 
  const kexp = 16.92;
  if (ktheo < kexp) console.log('The random numbers belongs to uniform distribution')
  else console.log('The random numbers DO NOT belong to uniform distribution')
  uniDist(randomNumbers);
}
