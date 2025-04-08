// // write a Number that accept a number

// function number(a) {
//     for (let i = 1; i <= a; i++) {
//         if (i % 2 == 0) {
//             console.log(`These are even numbers ${i}`)
//         } else {
//             console.log(`These are odd numbers ${i}`)
//         }
//     }
// }

// number(80);




// let name = "Promise Pius Obi";

// function checkage(age) {
//     if (age < 18) {
//         console.log(`Not Allowed Come Back Later ${name}`)
//     } else {
//         console.log(`Thanks For SigningUp In Our Program ${name}`)
//     }
// }

// checkage(17)
// checkage(19)





// // global and local scope.

// let global = "global scope";

// function localScope() {
//     let local = "local";
// }

// console.log(global)




// questions 1
// write a function that accept an input parameter any letter of the alphabet any returns true if a vowel and false if not a vowel sound?

// let vowel = [];
// let consanants = [];
// let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


// function checkalphabets(alphabet) {
//     for (let i = 0; i < alphabet.length; i++) {
//         if (i==0 || i==4 || i==8 || i == 14 || i ==20) {
//             vowel.push(`These are vowels ${alphabet[i]}`)
//         } else {
//             consanants.push(`These are consanats ${alphabet[i]}`)
//         }        
//     }
//     console.log(vowel)
//     console.log(consanants)
// }


// checkalphabets(alphabet)



// // questions 2
// // write a function that recievs and array of numbers as a parameter and it should compute the average of those numbers in the array and returns the number back to us?


// let array1 = [2, 4, 6, 8, 10];
// let newArray = [];


// function checkaverage(array1) {
//     for (let i = 0; i < array1.length; i++) {
//     newArray.push(array1[i]);
//     }
//     console.log(newArray)    
// }

// checkaverage(array1)

// // questions 3
// // check the minmum number in an array?


// let array = [2, 6, 8, 11, 16, 26, 5, 102]

// let min = 0;

// function checkmin(array) {
//     let min = array[0]
//     for (let i = 0; i <= array.length; i++) {
//         if (min > array) {
//             min.push(array)
//         }
//     }
//     console.log(min)
// }

// checkmin(array)

// // questions 4
// // write a functions that recieves a string as an input and return the vowels sound e.g home returns oe as vowels?


// let string = "Promise";
// output = [];

// function checkvowels(string) {
//     for (let i = 0; i < string.length; i++) {
//         output.push(string)
//         break
//     }
//     console.log(output)
// }

// checkvowels(string)



// let arr = [1, 2, 3, 4, 5]

// for (item in arr) {
//     if (arr[item] == 2) {
//         console.log("2 for now")
//     }
// }

// function checkvowel(str) {
//     let vowel = "aeiou"
//     let result = [];

//     let formattedString = str.toLowerCase();

//     for (char in formattedString) {
//         if (vowel.includes(formattedString[char])) {
//             result.push(formattedString[char])
//         }
//     }
//     console.log(result)
// }

// checkvowel("Emamanuel")

// for off loop and do while loop



let array = [2, 4, 6, 8, 10]
let newArray = [];

for (let i = 0; i < array.length; i++) {
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] * 3);
        console.log(`these are the loops i learnt about ${array}`)        
    }
    console.log(`these are not the numbers ${i}`)
}

// do {
   
// }  while (condition) {
    
// }