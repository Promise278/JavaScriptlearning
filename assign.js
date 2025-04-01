// // having a number 50 find the odd and even numbers using for loops


// let even = [];
// let odd = [];

// for (let i = 1; i < 50; i++) {
//     if (i % 2 == 0) {
//         even.push(`These are the even numbers ${i}`)
        
//     } else {
//         odd.push(`These are the odd numbers ${i}`)
//     }
// }

// console.log(even)
// console.log(odd)



// // have an aray of [2,4,6,8,10] and multiply each of the items by 3 e.g 2*3,4*3,6*3,8*3, 10*3 and an empty array that will store the values of the asnwers inside of the empty array


// let array = [2, 4, 6, 8, 10];
// let newArray = [];

// for (let i = 0; i < array.length; i++) {
//     newArray.push(array[i] * 3);
// }

// console.log(newArray)



// // using loops find the factory of 10


// // let factory = 10

// // for (let i = 1; i <= 10; i++) {
// //     factory = (factory -1)
// //     console.log(`The value is ${factory}`) 
// // }


// let factory = 10

// for (let i = 1; i < 10; i++) {
//     factory *= i
// }

// console.log(factory)


// FIZZBUZZ

// muiltiples of 3 it should print fizz
// multiples of 5 it should prinit buzz
// multiples of 3 and 5 it should print fizzbuzz


// let number = 100;

// for (let i = 1; i <= number; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log(i, "fizzbuzz")
//     } else if (i % 3 == 0) {
//         console.log(i, "fizz")
//     } else if(i % 5 == 0){
//         console.log(i,"buzz")
//     }
// }

let students = [
    "james",
    "prmise",
    "philip",
    "esther",
    "pius",
    "grace"
]

for (let i = 0; i < students.length; i++) {
    console.log(`Welcome to Blockfuse Labs ${students[i ]}`);
    
}