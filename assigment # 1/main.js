console.log('> Enter a seed', '\n> Enter \'e\' to exit')
const KSAlgorithm = require('../assignment #2/main').KSAlgorithm;
const stdin = process.openStdin()
stdin.addListener('data', d => {
  let tenNumbers = 10
  let random = new Set()
  let resArr = []
  let seed = d.toString().trim()
  if (seed === 'e') process.exit()
  let k = seed.length
  for (let i = 0; i < tenNumbers; i++) {
    const val = Math.pow(seed << k, 2).toString()
    const result = +`${val[i - 1] || val[0]}${val[val.length - 1]}`
    if (random.has(result)) {
      seed++
      tenNumbers++
    }
    random.add(result)
    k = random.values.length + i
  }
  random.forEach(r => resArr.push(r / Math.pow(10, r.toString().length)))
  console.log('first attempt ', resArr)
  KSAlgorithm(resArr);
})
