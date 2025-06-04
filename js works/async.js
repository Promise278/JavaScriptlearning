// let arr = [1, 2, 3, 4, 5];

// let five = new Promise((resolve, reject) => {
//     arr.forEach((a, i) => {
//         if (i>0) {
//             if (a+arr[i-1] == 5) {
//                 reject(`${a} and ${arr[i-1]} adds up to 5`)
//             } else {
//                 resolve(`${a} and ${arr[i-1]} no numbers can add`)
//             }
//         }
//     })
// })

// console.log(five);

// let count = 0

// setInterval(() => {
//     console.log("How far Boss Unique")
//     count++

//     if (count == 5) {
//         clearInterval()
//     }
// }, 1000)

// 1. Simulate a download notification. It should tell the user that "Download will start shortly", and after 5 seconds, it should tell the user "Download has started..."

// console.log("Download will start shortly");
// setTimeout(() => {
//   console.log("Download has started...");
// }, 5000);

// // 2. Create a countdown timer. Given a timer, you should count down till it gets to zero.

// let counter = 15;
// setInterval(() => {
//   console.log(`Number ${counter}`);
//   counter--;

//   if (counter > 0) {
//     clearInterval();
//   }
// }, 2000);

// async function getitems() {
//   let counter = 15;
//   setInterval(() => {
//     console.log(`Number ${counter}`);
//     counter--;

//     if (counter > 0) {
//       clearInterval();
//     }
//   }, 2000);
// }

// getitems()

// async function greet(name) {
//     return `Hello ${name}`
// }

// greet("Promise");

// async and await are modern JavaScript keywords used to handle asynchronous operations more cleanly than traditional .then() and .catch() promise chains. They make asynchronous code look and behave more like synchronous code, which is easier to write, read, and debug.

async function getPost() {
    await fetch("https://test.blockfuselabs.com/api/posts")
    .then(res => res.json())
    .then(data => console.log(data))
}

getPost();

async function getPost() {
    await fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => console.log(data))
}

getPost();


// ananymous function a function without a name
( () => {
    console.log("hello")
})();



//  What is async?
// When you prefix a function with async, it always returns a Promise.

// If the function returns a value, the promise is resolved with that value.

// If it throws an error, the promise is rejected with that error.

async function greet() {
  return "Hello";
}

greet().then(console.log);


//  What is await?
// await can only be used inside an async function.

// It pauses the execution of the function until the Promise resolves or rejects.

// After the promise resolves, await returns the resolved value.

async function getData() {
  let response = await fetch("https://api.example.com/data");
  let data = await response.json();
  console.log(data);
}
