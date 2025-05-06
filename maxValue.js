// 10, 5, 10, 7, 4, 12, 6

// function getMaxium() {
//     const array = [0, 5, 10, 7, 4, 15, 12, 6];
//     for(let i=0; i<array.length; i++){
//         for(let j=i+1; j<array.length; j++){
//             if(array[i] > array[j]){
//                 let temp = array[i];
//                 array[i] = array[j];
//                 array[j] = temp;
//             }
//         }
//     }
//     console.log(`The maximum value in the array is ${array[array.length - 1]}`);
// }

// getMaxium();

// Output: The maximum value in the array is 15



// function getMaxium() {
//     const array = [0, 5, 10, 7, 4, 15, 12, 6];
//     for(let i=0; i<array.length; i++){
//         console.log(`The value of i is ${array[i]}`);
//     }
// }

// getMaxium();


// Output: 

// The value of i is 0
// The value of i is 5
// The value of i is 10
// The value of i is 7
// The value of i is 4
// The value of i is 15
// The value of i is 12
// The value of i is 6


// function getMaxium() {
//     const array = [0, 5, 10, 7, 4, 15, 12, 6];
//     let maxValue = array[0];
//     for(let i=0; i<array.length; i++){
//         if(array[i] > maxValue){
//             maxValue = array[i];
//         }
//     }
//     console.log(maxValue);
// }

// getMaxium();

// Output: 15

// function getMaxium() {
//     const array = [0, 5, 10, 7, 4, 15, 12, 6];
//     let maxValue = array[0];
//     for (let i = 0; i < array.length; i++) {
//         var currentValue = array[i];
//         if (currentValue > maxValue) {
//             maxValue = currentValue;
//         }
//     }
//     console.log(maxValue);
// }

// getMaxium();

// Output: 15


// function getMaxium() {
//     const array = [0, 5, 10, 7, 4, 15, 12, 6];
//     let maxValue = array[0];
//     var i = 0;
//     while (i < array.length) {
//         var currentValue = array[i];
//         if (currentValue > maxValue) {
//             maxValue = currentValue;
//         }
//         i++;
//     }
//     console.log(maxValue); // <-- print the maximum value
// }

// getMaxium();


// Output: 15




// function getMinimum(array) {
//     let minValue = array[0];
//     var i = 0;
//     while (i < array.length) {
//         var currentValue = array[i];
//         if (currentValue < minValue) {
//             minValue = currentValue;
//         }
//         i++;
//     }
//     console.log(minValue); // <-- print the minimum value
// }

// getMinimum([0, 5, 10, 7, 4, 15, 12, 6]); // Output: 0




// function getMaxium(array) {
//     let maxValue = array[0];
//     var i = 0;
//     while (i < array.length) {
//         var currentValue = array[i];
//         if (currentValue > maxValue) {
//             maxValue = currentValue;
//         }
//         i++;
//     }
//     return maxValue; // <-- return the maximum value
// }

// function getMinimum(array) {
//     let minValue = array[0];
//     var i = 0;
//     while (i < array.length) {
//         var currentValue = array[i];
//         if (currentValue < minValue) {
//             minValue = currentValue;
//         }
//         i++;
//     }
//     return minValue; // <-- return the minimum value
// }

// function sum(array) {
//     var maxNumber = getMaxium(array);
//     var minNumber = getMinimum(array);

//     const result = maxNumber + minNumber;
//     console.log("Result: " + result); // <-- print the sum of max and min values
// }

// sum([0, 5, 10, 7, 4, 15, 12, 6]); // Output: Result: 15

// Output: Result: 15