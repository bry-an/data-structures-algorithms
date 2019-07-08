function circle(arr, word = arr[0], results = []) {
    // console.log("calling circle", arr, word, results)
    const arrCopy = [...arr]
    const removed = arrCopy.splice(arrCopy.indexOf(word), 1)
    results.push(removed[0])
    console.log("arrCopy", arrCopy)

    if (arrCopy.length) {
        const lastLetter = word[word.length - 1]

        arrCopy.forEach(item => {
            if (item[0] === lastLetter) {
                console.log("about to call circle", arrCopy, item, results)
                return circle(arrCopy, item, results)

            }
        })
    }
    if (results.length === arr.length)
        return `True: ${results}`
    return `false: ${results}`
}

console.log(circle(["racket", "true", "egg", "golf", "fig", "group"]))
// console.log(circle(['chair', 'height', 'racket', 'touch']))

