// function test() {
//     console.log("this is a test console log");
// }

// test();

// Output: this is a test console log"



// function test() {
//     text = "this is a test console log";
//     console.log("text");
// }

// test();

// Output: text. Bcs we are not using variable thats why


// function test() {
//     var text = "this is a test";
//     console.log(text);
// }

// test();

// Output: this is a test

// function test() {
//     let text = "this is a test";
//     console.log(text);
// }
// test();


// function test() {
//     const text = "this is a test";
//     console.log(text);
// }
// test();

// var/let/const
// Output: this is a test


// function test() {
//     var a = 10;
//     var b = 5;
//     const sum = a + b;
//     console.log(sum);
// }

// test();
// Output: 15


// function test() {
//     var a = 10;
//     var b = 5;
//     console.log(a + b);
// }

// test();
// Output: 15

// function test() {
//     var a = 10;
//     var b = "5";
//     const sum = a + b;
//     console.log(sum);
// }

// test();

// Output: 105



// function test() {
//     var a = 10;
//     var b = "5";
//     const sum = a + b;
//     console.log(typeof b);
// }

// test();

// Output: string




// function test() {
//     var a = "This is a text";
//     var b = 5;
//     console.log(a + ": " + b);
// }


// Output: This is a text: 5

// function test(a, b) {
//     console.log(a + b);
// }

// test(10, 5);

// Output: 15


// function test(a, b, c) {
//     console.log(a + b);
// }

// test(10, 5);

// Output: 15



// function test(a, b, c, d) {
//     console.log(a + b);
// }

// test(10, 5);
// Output: 15

// function test() {
//     let array = [1, 2, 3, 4, 5];
//     console.log(array);
// }

// test();


// Output: [1, 2, 3, 4, 5]


// function test() {
//     let array = [1, 2, 3, 4, 5];
//     console.log(array[-1]);
// }

// test();

// Output: undefined


// function test() {
//         let array = [1, 2, 3, 4, 5, "Hello", "Ostad"];
//         console.log(array[5]);
//     }
    
//     test();

// Output: Hello



// function test() {
//     let array = [1, 2, 3, 4, 5, "Hello", "Ostad"];
//     console.log(array[5] + array[3]);
// }
    
// test();

// Output: Hello4


// function test() {
//     let array = [1, 2, 3, 4, 5, "Hello", "Ostad", true];
//     array[5] = "Updated text";
//     console.log(array);
// }
    
// test();

// Output: [1, 2, 3, 4, 5, "Updated text", "Ostad", true]


// function test() {
//     var array = [1, 2, 3, 4, 5, "Hello", "Ostad", true];
//     let i;

//     for(i = 0; i <= 7; i++) {
//     console.log(array[i]);
//     }

// console.log(array);
// }
// test();

// Output: 
// 2
// 3
// 4
// 5
// Hello
// Ostad
// true
// [ 1, 2, 3, 4, 5, 'Hello', 'Ostad', true]



// function test() {
//     var array = [1, 2, 3, 4, 5, "Hello", "Ostad", true];
//     let i;

//     for(i = 0; i <= 7; i++) {
//     console.log("Current data: " + array[i]);
//     }

// }
// test();

// Output:

// Current data: 1
// Current data: 2    
// Current data: 3    
// Current data: 4    
// Current data: 5    
// Current data: Hello
// Current data: Ostad
// Current data: true 



// function test() {
//     var array = [1, 2, 3, 4, 5, "Hello", "Ostad", true];
//     var i;

//     for (i = 0; i <= 7; i++) {
//         console.log(`Current data: ${array[i]}`);
//     }
// }

// test();


// Output:

// Current data: 1
// Current data: 2
// Current data: 3
// Current data: 4
// Current data: 5
// Current data: Hello
// Current data: Ostad
// Current data: true


// function test() {
//     const number = 1;
//     if (number == 1) {
//         console.log("True");
//     }
//     else {
//         console.log("False");
//     }
// }

// test()

// Output: True






// function test() {
//     const number = 1;
//     if (number == 1) {
//         console.log("Number is 1");
//     }
//     else if (number == 2) {
//         console.log("Number is 2");
//     }
//     else if (number == 3) {
//         console.log("Number is 3");
//     }
//     else {
//         console.log("Number is not 1, 2 or 3");
//     }
// }

// test();

// Output: Number is 1


// function test() {
//     const number = 400;
//     if (number == 1) {
//         console.log("Number is 1");
//     }
//     else if (number == 2) {
//         console.log("Number is 2");
//     }
//     else if (number == 3) {
//         console.log("Number is 3");
//     }
//     else {
//         console.log("Number is not 1, 2 or 3");
//     }
// }

// test();

// // Output: Number is not 1, 2 or 3

// function condition() {
//     const number = 22;

//     if (number == 1) {
//         console.log("True");
//     }
//     else if (number == 0) {
//         console.log("False");
//     }
//     else {
//         console.log("Condition is not met");
//     }
// }

// condition():

// Output: Condition is not met

// function condition(number) {

//     if (number == 1) {
//         console.log("True");
//     }
//     else if (number == 0) {
//         console.log("False");
//     }
//     else {
//         console.log("Condition is not met");
//     }
// }

// condition(0);

// False

// function condition() {
//     const number = [24, 34, 43, 54, 65, 78, 86, 100];
//     console.log(number.length);

    // if (number == 1) {
    //     console.log("True");
    // }
    // else if (number == 0) {
    //     console.log("False");
    // }
    // else {
    //     console.log("Condition is not met");
    // }
// }

// condition();

// Output: 8


// function condition() {
//     const number = [24, 34, 43, 54, 65, 78, 86, 100];
    
//     for (let i = 0; i < number.length; i++) {
//         if (number[i] == 1) {
//             console.log(`For Data ${number[i]} answer is True`);
//         } else if (number[i] == 0) {
//             console.log(`For Data ${number[i]} answer is False`);
//         } else {
//             console.log(`For Data ${number[i]} answer is Condition is not met`);
//         }
//     }
// }

// condition();

// Output:

// For Data 24 answer is Condition is not met
// For Data 34 answer is Condition is not met
// For Data 43 answer is Condition is not met
// For Data 54 answer is Condition is not met
// For Data 65 answer is Condition is not met
// For Data 78 answer is Condition is not met
// For Data 86 answer is Condition is not met
// For Data 100 answer is Condition is not met




// function condition() {
//     const number = [24, "Ostad", 34, 43, 54, 65, "Hello", 78, 86, 100];
//     console.log(typeof number[1]);
    
    // for (let i = 0; i < number.length; i++) {
    //     if (number[i] == 1) {
    //         console.log(`For Data ${number[i]} answer is True`);
    //     } else if (number[i] == 0) {
    //         console.log(`For Data ${number[i]} answer is False`);
    //     } else {
    //         console.log(`For Data ${number[i]} answer is Condition is not met`);
    //     }   
    // }
// }
    
// condition();


// Output: string
    

// function condition() {
//     const number = [24, "Ostad", 34, 0, 43, 54, 65, "Hello", 78, 86, 100];

//     for (let i = 0; i < number.length; i++) {
//         if (number[i] == 1 || number[i] == "string") {
//             console.log(`For Data ${number[i]} answer is True`);
//         } 
//         else if (number[i] == 0) {
//             console.log(`For Data ${number[i]} answer is False`);
//         }
//         else {
//             console.log(`For Data ${number[i]} answer is Condition is not met`);
//         }   
//     }
// }
    
// condition();


// Output:  

// For Data 24 answer is Condition is not met
// For Data Ostad answer is Condition is not met
// For Data 34 answer is Condition is not met
// For Data 0 answer is False
// For Data 43 answer is Condition is not met
// For Data 54 answer is Condition is not met
// For Data 65 answer is Condition is not met
// For Data Hello answer is Condition is not met
// For Data 78 answer is Condition is not met
// For Data 86 answer is Condition is not met
// For Data 100 answer is Condition is not met



// 5! = 5 * 4 * 3 * 2 * 1 = 120
// 4! = 4 * 3 * 2 * 1 = 24
// 3! = 3 * 2 * 1 = 6  
// 2! = 2 * 1 = 2
// 1! = 1 = 1

// function factorial(number) {
//     if (number === 0 || number === 1) {
//         return 1;
//     }
//     return number * factorial(number - 1);
// }

// console.log(factorial(5)); // Output: 120



// 0 1 2 3 5 8 13 21 34 55 89

// function fibonacci(n) {
//     let fibInitial = [0, 1];

//     for (let i = 2; i < n; i++) {
//         fibInitial[i] = fibInitial[i - 1] + fibInitial[i - 2];
//     }
//     console.log(fibInitial);
//     return fibInitial;
// } 

// fibonacci(10); 

// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


// [
//     0, 1,  1,  2,  3,
//     5, 8, 13, 21, 34
// ]


// function fibo(n) {
//     const series = [0, 1];

//     for (let i = 2; i < n; i++) {
//         series[i] = series[i - 1] + series[i - 2];
//         console.log(series[i]);
//     }   
// }
// fibo(8);

// Output:

// 1
// 2 
// 3 
// 5 
// 8 
// 13



// class CheckConditions {
//     condition() {
//         const number = 1;
//         if (number == 1) {
//             console.log("Number is 1");
//         } else if (number == 2) {
//             console.log("Number is 2");
//         } else if (number == 3) {
//             console.log("Number is 3");
//         } else {
//             console.log("Number is not 1, 2 or 3");
//         }   
//     }
// }

// module.exports = CheckConditions();




