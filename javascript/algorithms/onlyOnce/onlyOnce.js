function onlyOnce(arr) {
    const results = []

    for (let i = 0; i < arr.length; i++) {
        let count = 0
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                // the number at the i index appears in array (at position j); increment counter
                count++
            }
        }
        if (count < 2) {
            // the number at the i index appears only once; push to results array
            results.push(arr[i])
        }
    }
    return results
}


function onlyOnceEfficient(arr) {
    const arrSorted = arr.sort()
    const results = []

    for (let i = 0; i < arrSorted.length; i++) {
        if (arrSorted[i - 1] !== arrSorted[i] && arrSorted[i + 1] !== arrSorted[i]) {
            results.push(arrSorted[i])
        }
    }
    return results
}

console.log(onlyOnceEfficient([1, 1, 2, 3, 1]))