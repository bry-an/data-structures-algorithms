function getValidIps(string, result = null) {

    if (!result) {
        result = []
    }
    addresses = []

    if (result.length > 4) {
        return []
    }

    if (!string) {
        if (result.length === 4) {
            return result.join(".")
        }
        return []
    }

    console.log(typeof result)
    
    addresses.push(getValidIps(string.slice(1), result.push(string.slice(0,1))))

    if (string.length > 1 && (10 <= parseInt(string.slice(0, 2)) <= 99)) {
    addresses.push(getValidIps(string.slice(2), result.push(string.slice(0,2))))
    }

    if (string.length > 2 && (100 <= parseInt(string.slice(0, 3)) <= 255)) {
    addresses.push(getValidIps(string.slice(3), result.push(string.slice(0,3))))
    }
    return addresses
}
console.log(getValidIps("2542540123"))