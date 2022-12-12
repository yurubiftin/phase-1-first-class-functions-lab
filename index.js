// Code your solution in this file
const returnFirstTwoDrivers = function(arr) {
    return [arr[0],arr[1]];
}
const returnLastTwoDrivers = function(arr) {
    return [arr[arr.length-2],arr[arr.length-1]];
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
const createFareMultiplier = (function(num) {
    return function() {
        return num * num;
    }
})
const fareDoubler = function (num) {
    return num * 2;
}
const fareTripler = function(num) {
    return num * 3;
}
const selectDifferentDrivers = function(arr,func) {
    return func(arr);
}
