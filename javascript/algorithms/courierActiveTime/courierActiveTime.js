const courierActiveTime = schedule => {
    const scheduleMap = new Map();

    schedule.forEach(incident => {
        const times = scheduleMap.get(incident[0]);
        if (times) {
            times.push(incident[1]);
            scheduleMap.set(incident[0], times);
        } else {
            const newTimes = [incident[1]];
            scheduleMap.set(incident[0], newTimes);
        }
    });
    let totalTime = 0;

    scheduleMap.forEach((value) => {
        const difference = value[1] - value[0];
        totalTime += difference;
    });
    return totalTime; 
};

courierActiveTime(
    [
        [1, 1570320047, 'pickup'],
        [1, 1570320725, 'dropoff'],
        [2, 1570321092, 'pickup'],
        [3, 1570321212, 'pickup'],
        [3, 1570322352, 'dropoff'],
        [2, 1570323012, 'dropoff'],
    ]
); //?