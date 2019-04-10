function permute(array, permutation) {
    let resultsArray = []

    for (let i = 0; i < array.length; i++) {
        resultsArray[i] = array[permutation[i]]
    }
    return resultsArray
}

console.log(permute(['a', 'b', 'c'], [2, 1, 0]))