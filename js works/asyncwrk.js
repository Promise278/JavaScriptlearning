// 🔄 Concurrency vs Parallelism
// 🔹 Concurrency
// Definition: The ability of a program to handle multiple tasks at once, but not necessarily at the same time.

// Analogy: A single chef (thread) preparing multiple dishes by switching between them.

// Example Use Case: Handling multiple user requests in a web server.

// 🔹 Parallelism
// Definition: Running multiple tasks at the exact same time, typically on multiple cores.

// Analogy: Multiple chefs in a kitchen, each making a different dish simultaneously.

// Example Use Case: Processing large datasets in chunks using multi-core CPUs.

// 🕰️ Synchronous vs Asynchronous
// 🔸 Synchronous
// Definition: Tasks are done one after another. The next task waits for the previous one to finish.

// Analogy: You wait in line at a store. Each person is served one by one.

// Code Example:

// function task1() {
//   console.log("Task 1");
// }

// function task2() {
//   console.log("Task 2");
// }

// task1();
// task2();
// 🔸 Asynchronous
// Definition: You can start a task and move on without waiting for it to finish.

// Analogy: Ordering food at a restaurant. You order, then do other things until it's ready.

// Code Example (JS):

// console.log("Start");

// setTimeout(() => {
//   console.log("Async Task done");
// }, 2000);

// console.log("End");

// // Output: Start → End → Async Task done (after 2s)
// ⚙️ async / await (JavaScript)
// Purpose: Makes asynchronous code look and behave like synchronous code.

// Used with: Promises

// Keyword async: Declares an asynchronous function.

// Keyword await: Pauses the function until the Promise resolves.

// 🔸 Example:
// function wait(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function runTasks() {
//   console.log("1. Start");
//   await wait(2000); // Waits for 2 seconds
//   console.log("2. After 2 seconds");
// }

// runTasks();