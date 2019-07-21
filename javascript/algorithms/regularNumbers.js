const isPrime = num => {
  for (let i = 2; i <= Math.floor(num / 2); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const primeDivisors = num => {
  const primeDivisors = [];
  for (let i = 2; i <= Math.floor(num / 2); i++) {
    if (num % i === 0 && isPrime(i)) {
      primeDivisors.push(i);
    }
  }
  return primeDivisors;
};

const regularNumbers = n => {
  const regNums = [];
  let i = 60;
  while (regNums.length < n) {
    const pds = primeDivisors(i);
    if (
      pds.length === 3 &&
      pds.includes(2) &&
      pds.includes(3) &&
      pds.includes(5)
    ) {
      regNums.push(i);
    }
    i++;
  }
  return regNums;
};
