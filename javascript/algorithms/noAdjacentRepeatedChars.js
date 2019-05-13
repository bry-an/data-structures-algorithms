function noAdjRepeatedChars(str) {
    const frequencyArr = new Array(128).fill(0)
    
    for (let i = 0; i < str.length; i++) {
        frequencyArr[str.charCodeAt(i)]++
    }
    const frequencyMap = new Map()

    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i)
        if (frequencyMap.has(charCode)) {
            let currentFrequency = frequencyMap.get(charCode)
            frequencyMap.set(charCode,++currentFrequency )
        }
        else {
            frequencyMap.set(charCode, 1)
        }
    }

}

function returnMaxExcept(array, exception) {
    let max = -Infinity

    for (let i = 0; i < array.length; i++) {
        if (array[i] > max && array[i] !== exception) {
            max = i
        }
    }
    return max 
}

console.log(noAdjRepeatedChars("aabbc"))