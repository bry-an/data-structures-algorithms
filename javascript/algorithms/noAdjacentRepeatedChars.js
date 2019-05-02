function noAdjRepeatedChars(string) {
    const strArray = string.split("")
    const sorted = strArray.sort()

    for (let i = 0; i < strArray.length; i++) {
        if (strArray[i] === strArray[i + 1]) {
            let j = i + 1
            while (strArray[j - 1]) {

            }
        }
    }




}
console.log(noAdjRepeatedChars("aaaabbc"))