const assert = require('assert')


const format = num => {
    return num.toString().padStart(2, 0)
}

const calcSeconds = secondsInput => {
    return format(secondsInput % 60)
}

const calcMinutes = secondsInput => {
    return format(parseInt(secondsInput / 60) % 60)
}

const calcHours = secondsInput => {
    return format(parseInt(secondsInput / 3600) % 3600)
}
const humanReadable = secondsInput => {

    if (secondsInput < 60) {
        return calcSeconds(secondsInput)
    }
    if (secondsInput < 3600) {
        return `00:${format(calcMinutes(secondsInput))}:${format(calcSeconds(secondsInput))}`
    }
    return `${format(calcHours(secondsInput))}:${format(calcMinutes(secondsInput))}:${format(calcSeconds(secondsInput))}`

}

humanReadable(3601) //?

// assert.equal(humanReadable(5), '00:00:05', 'humanReadable(5)');
// assert.equal(humanReadable(60), '00:01:00', 'humanReadable(60)');
// assert.equal(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
// assert.equal(humanReadable(359999), '99:59:59', 'humanReadable(359999)');