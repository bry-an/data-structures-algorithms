
// convert itineraries into an array of leg objects:
// add first leg

// iterate over itineraries to find starting itinerary at first leg
// if two starting itineraries at first leg
// get lexiographically smaller one
// add corresponding ending itinerary to object, push to array
// helper function that takes start, end and adds to object, returns object
// start = beginning of trip
// origin = beginning of leg
// destination = end of leg

const result = [];
const itineraries = (arr, start) => {
    const validDestinations = [];
    arr.forEach((leg, i) => {
        const origin = leg[0];
        if (origin === start) {
            validDestinations.push(i);
        }
    });
    if (validDestinations.length === 1) {
        const legOfInterest = validDestinations[0];
        const legObj = {
            origin: legOfInterest[0],
            destination: legOfInterest[1],
        };
        result.push(legObj);
    } else if (validDestinations.length > 1) {
        validDestinations.sort((a, b) => a[1] - b[1]);
        const legOfInterest = validDestinations[0];
        const legObj = {
            origin: legOfInterest[0],
            destination: legOfInterest[1],
        };
        result.push(legObj);
    } else {
        return null;
    }

};