const isPrime = num => {
    if (num < 2) {
        return false
    }
    for (let i = 2; i < Math.floor(num / 2); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

const twoPrimes = num => {
    if (num % 2 !== 0) {
        return null
    }

    let n = 1
    while (n <= Math.floor(num / 2)) {
        const a = num - n
        if (isPrime(a) && isPrime(n)) {
            return `${n} + ${a} = ${n + a}`
        }
        n++
    }
}
console.log(twoPrimes(746))