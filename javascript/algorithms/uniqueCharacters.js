const uniqueCharacters = str => {
    if (str.length > 128) // assuming the input str contains only UTF-8 characters
        return false
    let frequency = new Array(128).fill(null) // create an array of null values with a length representing the number of possible characters
    for (let i = 0; i < str.length; i++) {
        if (frequency[str.charCodeAt(i)]) // this charCode already exists in the string (since its index is non-null in the frequency array)
            return false
        frequency[str.charCodeAt(i)] = true;
    }
    return true
}
console.log(uniqueCharacters("abcde")) // true
console.log(uniqueCharacters("abcda")) // false