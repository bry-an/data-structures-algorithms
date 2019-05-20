function circle(arr, word = arr[0], results = []) {
    if (arr.length === 0) {
    }
    console.log("calling circle", arr, word, results)
    const arrCopy = [...arr]
    const removed = arrCopy.splice(arrCopy.indexOf(word), 1)
    results.push(removed[0])

    if (arrCopy.length) {


        const lastLetter = word[word.length - 1]

        arrCopy.forEach(item => {
            if (item[0] === lastLetter) {
                return circle(arrCopy, item, results)

            }
        })
    }
    if (results.length === arr.length)
        return `True: ${results}`
    return `false: ${results}`
}


