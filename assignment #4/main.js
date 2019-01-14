exports.VRed = randomNumbers => {
  let newrv = [];
  // inter arr = 1
  randomNumbers.forEach(rn =>
    newrv.push(-Math.log(rn))
  );
  let mean = newrv.reduce((prv, curr) => prv + curr) / newrv.length;
  const inter = setInterval(() => {
    if ((Math.abs(mean - 1) <= 10e-5)) {
      console.log('improved random numbers ', newrv);
      process.exit(1);
    }
    newrv.forEach(rn =>
      newrv.push(Math.abs(1 - rn))
    );
    newrv.slice(10);
    mean = newrv.reduce((prv, curr) => prv + curr) / newrv.length;
  }, 0);

  setTimeout(() => {
    clearInterval(inter);
    console.log('We are unable to improve your random numbers....')
  }, 1000);
}
