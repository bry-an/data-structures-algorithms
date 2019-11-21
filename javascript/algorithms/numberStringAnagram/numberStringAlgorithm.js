const numberStringAnagram = string => {
    const frequencies = new Map()

    string.split('').forEach(char => {
        let currentFreq = frequencies.get(char)
        if (!currentFreq) {
        frequencies.set(char, 1)
        } else {
            frequencies.set(char, ++currentFreq)
        }
    })
    let returnArray = []
    words.forEach(word => {
        let keepGoing = true
        let i = 0
        while (keepGoing) {
            let letterFreq = frequencies.get(word[i])
            if (frequencies.has(word[i])) {
                letterFreq--
                frequencies.set(letter, letterFreq)
            
            } else {
                keepGoing = false
            }
            i++
            returnArray.push(i)
        }
        })
    return returnArray
}

const words = [
    {z: 1, e: 1, r: 1, o: 1},
    {t: 1, w: 1, o: 1},
    {t: 1, h: 1, r: 1, e: 2},
    {f: 1, o: 1, u: 1, r: 1},
    {f: 1, i: 1, v: 1, e: 1},
    {s: 1, i: 1, x: 1},
    {s: 1, e: 1, v: 1, e: 1, n: 1},
    {e: 1, i: 1, g: 1, h: 1, t: 1},
    {n: 2, i: 1, e: 1}
]


numberStringAnagram('niesevehrtfeev') //?



