function spreadSheetColumnId(id) {
    id--
    const results = []
    returnIds(id)
    function returnIds(id) {
        if (id < 26) {
            const char = String.fromCharCode(id + 65)
            results.push(char)
            return results
        }
        const char = String.fromCharCode((id % 26) + 65)
        results.push(char)
        id = id - (26 + id % 26)
        returnIds(id)
    }
    const finalResult = []
    for (let i = results.length - 1; i >= 0; i--) {
        finalResult.push(results[i])
    }
    return finalResult.join("")
}
console.log(spreadSheetColumnId(27))