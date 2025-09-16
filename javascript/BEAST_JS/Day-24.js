//Create an array of numbers and print the sum of all numbers.
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var sum = a.reduce(function (prev, value, index, arr) {
    return prev + value;
}, 0);
console.log("sum = ", sum);
