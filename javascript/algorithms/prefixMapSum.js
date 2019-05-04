// create a map
// create an insert method
// sum method:
    // iterate over the map
        // variable for count

function PrefixMap() {
    let prefixMap = new Map()
    let currentSum = 0

        function sum(str) {
            prefixMap.forEach((value, key) => {
                let keepGoing = true
                    for (let i = 0; i < str.length; i++) {
                        if (str[i] !== key[i]) {
                            keepgoing = false
                            break
                        }
                    }
                    if (keepGoing) {
                        currentSum += value
                    }
            })
            return currentSum
        }
        function insert(key, value) {
            prefixMap.set(key, value)
        }

    return {
        insert,
        sum
    }
}





