const returnFirstTwoDrivers = function(names) {
    let newArray = [...names]
    return newArray.slice(0,2)
    
}

const returnLastTwoDrivers = function(names) {
    let newArr = [...names]
    return newArr.slice(-2)
}

const selectingDrivers = [
        returnFirstTwoDrivers,
        returnLastTwoDrivers
    ];

function createFareMultiplier(int) {
    return function cb(num2) {
        return int * num2
    }
}

function fareDoubler(int) {
    const double = createFareMultiplier(2)

    return double(int)
}

function fareTripler(int) {
    const triple = createFareMultiplier(3)

    return triple(int)
}

function selectDifferentDrivers(drivers, func) {
    return func(drivers)
}