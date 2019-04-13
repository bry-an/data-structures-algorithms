function spreadSheetColumnId(id) {
    id-- // allow input to be 1-based, but compute 0-based
    const results = []
    returnIds(id)
    function returnIds(id) {
        if (id < 26) { // simple case where column will be A - Z; also base case for recursive algorithm
            const char = String.fromCharCode(id + 65)
            results.push(char)
            return results
        }
        const char = String.fromCharCode((id % 26) + 65) // return the last character of the column name
        results.push(char) 
        id = id - (26 + id % 26) // reset id to handle other characters in column name. Working backwards due to nature of mod operator.
        returnIds(id)
    }
    const finalResult = []
    for (let i = results.length - 1; i >= 0; i--) {
        finalResult.push(results[i]) // since results is in backward order, reverse for final output
    }
    return finalResult.join("")
}
console.log(spreadSheetColumnId(27)) // AA