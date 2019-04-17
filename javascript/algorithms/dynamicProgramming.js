// Top-down (memoization)

function fibonacci(num) {
    let memo = []
    return fibRecursive(num, memo)
}

function fibRecursive(num, memo) {
    if (num === 0 || num == 1) return num

    if (!memo[num]) {
        memo[num] = fibRecursive(num - 1, memo) + fibRecursive(num - 2, memo)
    }
    return memo[num]
}

// Bottom-up

function fibBottomUp(num) {
    if (num === 0) return 0
    else if (num === 1) return 1

    let memo = []
    memo[0] = 0
    memo[1] = 1
    for (let i = 2; i < num; i++) {
        memo[i] = memo[i - 1] + memo[i - 2]
    }
    return memo[num - 1] + memo[num - 2]
}
console.log(fibonacci(0))